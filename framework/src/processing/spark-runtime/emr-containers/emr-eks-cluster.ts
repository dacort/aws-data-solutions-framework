// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { readFileSync } from 'fs';
import { join } from 'path';
import { Aws, CfnOutput, Stack, Tags, CfnJson, RemovalPolicy } from 'aws-cdk-lib';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import {
  AlbControllerVersion,
  Cluster,
  ClusterLoggingTypes,
  EndpointAccess,
  HelmChart,
  KubernetesVersion,
} from 'aws-cdk-lib/aws-eks';
import { CfnVirtualCluster } from 'aws-cdk-lib/aws-emrcontainers';
import {
  CfnInstanceProfile,
  CfnServiceLinkedRole,
  Effect,
  FederatedPrincipal,
  IManagedPolicy,
  ManagedPolicy,
  PolicyDocument,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from 'aws-cdk-lib/aws-iam';
import { Key } from 'aws-cdk-lib/aws-kms';
import { ILayerVersion } from 'aws-cdk-lib/aws-lambda';
import { Bucket, BucketEncryption, Location } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import * as SimpleBase from 'simple-base';
import { vpcBootstrap } from './../../../utils/vpc-helper';
import { karpenterSetup, eksClusterSetup, setDefaultKarpenterProvisioners, createNamespace } from './emr-eks-cluster-helpers';
import { EmrVirtualClusterOptions } from './emr-virtual-cluster';
import * as CriticalDefaultConfig from './resources/k8s/emr-eks-config/critical.json';
import * as NotebookDefaultConfig from './resources/k8s/emr-eks-config/notebook-pod-template-ready.json';
import * as SharedDefaultConfig from './resources/k8s/emr-eks-config/shared.json';
import * as K8sRoleBinding from './resources/k8s/rbac/emr-containers-role-binding.json';
import * as K8sRole from './resources/k8s/rbac/emr-containers-role.json';
import { Context, EMR_DEFAULT_VERSION, TrackedConstruct, TrackedConstructProps } from '../../../utils';

/**
 * The properties for the EmrEksCluster Construct class.
 */
export interface SparkEmrContainersRuntimeProps {
  /**
   * Name of the Amazon EKS cluster to be created
   * @default -  The [default cluster name]{@link DEFAULT_CLUSTER_NAME}
   */
  readonly eksClusterName?: string;
  /**
   * Amazon IAM Role to be added to Amazon EKS master roles that will give access to kubernetes cluster from AWS console UI.
   * An admin role must be passed if `eksCluster` property is not set.
   * You will use this role to grant other access to and manage EKS cluster
   */
  readonly eksAdminRoleArn: string;
  /**
   * The EKS cluster to setup EMR on. The cluster needs to be created in the same CDK Stack.
   * If the EKS cluster is provided, the cluster AddOns and all the controllers (Ingress controller, Cluster Autoscaler or Karpenter...) need to be configured.
   * When providing an EKS cluster, the methods for adding nodegroups can still be used. They implement the best practices for running Spark on EKS.
   * @default - An EKS Cluster is created
   */
  readonly eksCluster?: Cluster;
  /**
   * Kubernetes version for Amazon EKS cluster that will be created
   * The default is changed as new version version of k8s on EKS becomes available
   * @default -  Kubernetes version {@link DEFAULT_EKS_VERSION}
   */
  readonly kubernetesVersion?: KubernetesVersion;
  /**
   * If set to true, the Construct will create default EKS nodegroups or node provisioners (based on the autoscaler mechanism used).
   * There are three types of nodes:
   *  * Nodes for critical jobs which use on-demand instances, high speed disks and workload isolation
   *  * Nodes for shared worklaods which uses spot instances and no isolation to optimize costs
   *  * Nodes for notebooks which leverage a cost optimized configuration for running EMR managed endpoints and spark drivers/executors.
   * @default -  true
   */
  readonly defaultNodes?: boolean;
  /**
   * The version of karpenter to pass to Helm
   * @default - The [default Karpenter version]{@link DEFAULT_KARPENTER_VERSION}
   */
  readonly karpenterVersion?: string;
  /**
   * Starting k8s 1.22, CDK no longer bundle the kubectl layer with the code due to breaking npm package size.
   * A layer needs to be passed to the Construct.
   *
   * The cdk [documentation] (https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_eks.KubernetesVersion.html#static-v1_22)
   * contains the libraries that you should add for the right Kubernetes version
   * @default - No layer is used and the default CDK layer is used
   */
  readonly kubectlLambdaLayer: ILayerVersion;

  /**
   * The CIDR of the VPC to use with EKS. If provided, a VPC with three public subnets and three private subnets is created
   * The size of the private subnets is four time the one of the public subnet
   * @default - A vpc with the following CIDR 10.0.0.0/16 will be used
   */
  readonly vpcCidr?: string;

  /**
   * The VPC object where to deploy the EKS cluster
   * VPC should have at least two private and public subnets in different Availability Zones
   * All private subnets should have the following tags:
   * 'for-use-with-amazon-emr-managed-policies'='true'
   * 'kubernetes.io/role/internal-elb'='1'
   * All public subnets should have the following tag:
   * 'kubernetes.io/role/elb'='1'
   * Cannot be combined with vpcCidr, if combined vpcCidr takes precedence.
   */
  readonly eksVpc?: IVpc;

  /**
  * The CIDR blocks that are allowed access to your cluster’s public Kubernetes API server endpoint.
  */
  readonly publicAccessCIDRs: string[];

  /**
  * Wether we need to create an EMR on EKS Service Linked Role
  * @default - true
  */
  readonly createEmrOnEksServiceLinkedRole?: boolean;

  /**
   * The removal policy when deleting the CDK resource.
   * Resources like Amazon cloudwatch log or Amazon S3 bucket
   * If DESTROY is selected, context value
   * @default - The resources are not deleted (`RemovalPolicy.RETAIN`).
   */
  readonly removalPolicy?: RemovalPolicy;
}

/**
 * EmrEksCluster Construct packaging all the resources and configuration required to run Amazon EMR on EKS.
 *
 * Usage example:
 *
 * @example
 *
 * import { ManagedPolicy, PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
 *
 * const emrEks: dsf.SparkEmrContainersRuntime = dsf.SparkEmrContainersRuntime.getOrCreate(this, {
 *   eksAdminRoleArn: "arn:aws:iam::1234567890:role/EksAdmin",
 *   publicAccessCIDRs: ["1.1.1.1/32"], //change it with your own IP
 * });
 *
 * const policy = new ManagedPolicy(this, 'testPolicy', {
 *   document: new PolicyDocument({
 *     statements: [
 *       new PolicyStatement({
 *         resources: ['arn:aws:s3:::your-bucket/key_name'],
 *         actions: ['s3:GetObject'],
 *       }),
 *     ],
 *  }),
 * });
 *
 * const virtualCluster = emrEks.addEmrVirtualCluster(this, {
 *   name: "intra-day-jobs",
 *   createNamespace: true,
 *   eksNamespace: "data-platform",
 * });
 *
 * const role = emrEks.createExecutionRole(this, 'execRole', policy, 'data-platform', 'execRole');
 *
 * // EMR on EKS virtual cluster ID
 * new CfnOutput(this, 'VirtualClusterId', { value : virtualCluster.attr_id });
 * // Job config for each nodegroup
 * new CfnOutput(this, "CriticalConfig", { value : emrEks.criticalDefaultConfig });
 * new CfnOutput(this, "SharedConfig", { value : emrEks.sharedDefaultConfig});
 * // Execution role arn
 * new CfnOutput(this,'ExecRoleArn', { value : role.roleArn});
 *
 */
export class SparkEmrContainersRuntime extends TrackedConstruct {

  public static readonly DEFAULT_EMR_VERSION = EMR_DEFAULT_VERSION;
  public static readonly DEFAULT_EKS_VERSION = KubernetesVersion.V1_27;
  public static readonly DEFAULT_CLUSTER_NAME = 'data-platform';
  public static readonly DEFAULT_KARPENTER_VERSION = 'v0.30.0';
  public static readonly DEFAULT_VPC_CIDR = '10.0.0.0/16';

  /**
   * Get an existing EmrEksCluster based on the cluster name property or create a new one
   * only one EKS cluster can exist per stack
   * @param {Construct} scope the CDK scope used to search or create the cluster
   * @param {EmrEksClusterProps} props the EmrEksClusterProps [properties]{@link EmrEksClusterProps} if created
   */
  public static getOrCreate(scope: Construct, props: SparkEmrContainersRuntimeProps) {

    const stack = Stack.of(scope);
    const id = props.eksClusterName || SparkEmrContainersRuntime.DEFAULT_CLUSTER_NAME;

    let emrEksCluster: SparkEmrContainersRuntime =
      stack.node.tryFindChild(id) as SparkEmrContainersRuntime ??
      new SparkEmrContainersRuntime(stack, id, props);

    return emrEksCluster;
  }

  public readonly eksCluster: Cluster;
  public readonly notebookDefaultConfig?: string;
  public readonly criticalDefaultConfig?: string;
  public readonly sharedDefaultConfig?: string;
  public readonly podTemplateLocation: Location;
  public readonly assetBucket: Bucket;
  public readonly clusterName: string;

  private readonly emrServiceRole?: CfnServiceLinkedRole;
  private readonly assetUploadBucketRole: Role;
  private readonly karpenterChart?: HelmChart;
  private readonly defaultNodes: boolean;
  private readonly createEmrOnEksServiceLinkedRole: boolean;
  private readonly logKmsKey: Key;
  private readonly eksSecretKmsKey: Key;
  /**
   * Constructs a new instance of the EmrEksCluster construct.
   * @param {Construct} scope the Scope of the CDK Construct
   * @param {string} id the ID of the CDK Construct
   * @param {EmrEksClusterProps} props the EmrEksClusterProps [properties]{@link EmrEksClusterProps}
   */
  private constructor(scope: Construct, id: string, props: SparkEmrContainersRuntimeProps) {

    const trackedConstructProps: TrackedConstructProps = {
      trackingTag: SparkEmrContainersRuntime.name,
    };

    super(scope, id, trackedConstructProps);

    const removalPolicy = Context.revertRemovalPolicy(scope, props.removalPolicy);

    this.logKmsKey = Stack.of(scope).node.tryFindChild('logKmsKey') as Key ?? new Key(scope, 'logKmsKey', {
      enableKeyRotation: true,
      alias: 'log-vpc-key',
    });

    this.eksSecretKmsKey = Stack.of(scope).node.tryFindChild('eksSecretKmsKey') as Key ?? new Key(scope, 'eksSecretKmsKey', {
      enableKeyRotation: true,
      alias: 'eks-key',
    });

    this.clusterName = props.eksClusterName ?? SparkEmrContainersRuntime.DEFAULT_CLUSTER_NAME;

    //Define EKS cluster logging
    const eksClusterLogging: ClusterLoggingTypes[] = [
      ClusterLoggingTypes.API,
      ClusterLoggingTypes.AUTHENTICATOR,
      ClusterLoggingTypes.SCHEDULER,
      ClusterLoggingTypes.CONTROLLER_MANAGER,
      ClusterLoggingTypes.AUDIT,
    ];

    //Set the flag for creating the EMR on EKS Service Linked Role
    this.createEmrOnEksServiceLinkedRole = props.createEmrOnEksServiceLinkedRole ?? true;

    //Set flag for default karpenter provisioners for Spark jobs
    this.defaultNodes = props.defaultNodes ?? true;

    const karpenterVersion: string = props.karpenterVersion ?? SparkEmrContainersRuntime.DEFAULT_KARPENTER_VERSION;

    // Create a role to be used as instance profile for nodegroups
    let ec2InstanceNodeGroupRole = new Role(scope, 'ec2InstanceNodeGroupRole', {
      assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
    });

    //attach policies to the role to be used by the nodegroups
    ec2InstanceNodeGroupRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonEKSWorkerNodePolicy'));
    ec2InstanceNodeGroupRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2ContainerRegistryReadOnly'));
    ec2InstanceNodeGroupRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));
    ec2InstanceNodeGroupRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonEKS_CNI_Policy'));

    //Create instance profile to be used by Managed nodegroup and karpenter
    const clusterInstanceProfile = new CfnInstanceProfile(scope, 'karpenter-instance-profile', {
      roles: [ec2InstanceNodeGroupRole.roleName],
      instanceProfileName: `adsfNodeInstanceProfile-${this.clusterName ?? 'default'}`,
      path: '/',
    });

    // create an Amazon EKS CLuster with default parameters if not provided in the properties
    if (props.eksCluster == undefined) {

      const vpcCidr = props.vpcCidr ? props.vpcCidr : SparkEmrContainersRuntime.DEFAULT_VPC_CIDR;

      let eksVpc: IVpc = props.eksVpc ? props.eksVpc : vpcBootstrap (scope, vpcCidr, this.logKmsKey, removalPolicy, this.clusterName, undefined).vpc;

      this.eksCluster = new Cluster(scope, `${this.clusterName}Cluster`, {
        defaultCapacity: 0,
        clusterName: this.clusterName,
        version: props.kubernetesVersion ?? SparkEmrContainersRuntime.DEFAULT_EKS_VERSION,
        clusterLogging: eksClusterLogging,
        kubectlLayer: props.kubectlLambdaLayer,
        vpc: eksVpc,
        endpointAccess: EndpointAccess.PUBLIC_AND_PRIVATE,
        secretsEncryptionKey: this.eksSecretKmsKey,
        albController: {
          version: AlbControllerVersion.V2_5_1,
          policy: JSON.parse(readFileSync(join(__dirname, 'resources/k8s/controllers-iam-policies/alb/iam-policy-alb-v2.5.json'), 'utf8')),
        },
      });

      //Setting up the cluster with the required controller
      eksClusterSetup(this.eksCluster, scope, props.eksAdminRoleArn, ec2InstanceNodeGroupRole, SparkEmrContainersRuntime.DEFAULT_EKS_VERSION);

      //Deploy karpenter
      this.karpenterChart = karpenterSetup(
        this.eksCluster,
        this.clusterName,
        this,
        clusterInstanceProfile,
        ec2InstanceNodeGroupRole,
        karpenterVersion,
      );

    } else {
      //Initialize with the provided EKS Cluster
      this.eksCluster = props.eksCluster;
    }

    //Check if the user want to use the default Karpenter provisioners and
    //Add the defaults pre-configured and optimized to run Spark workloads
    if (this.defaultNodes ) {
      setDefaultKarpenterProvisioners(this, karpenterVersion);
    }

    // Tags the Amazon VPC and Subnets of the Amazon EKS Cluster
    Tags.of(this.eksCluster.vpc).add(
      'for-use-with-amazon-emr-managed-policies',
      'true',
    );

    this.eksCluster.vpc.privateSubnets.forEach((subnet) =>
      Tags.of(subnet).add('for-use-with-amazon-emr-managed-policies', 'true'),
    );

    this.eksCluster.vpc.publicSubnets.forEach((subnet) =>
      Tags.of(subnet).add('for-use-with-amazon-emr-managed-policies', 'true'),
    );

    // Create Amazon IAM ServiceLinkedRole for Amazon EMR and add to kubernetes configmap
    // required to add a dependency on the Amazon EMR virtual cluster
    if (this.createEmrOnEksServiceLinkedRole) {
      this.emrServiceRole = new CfnServiceLinkedRole(this, 'EmrServiceRole', {
        awsServiceName: 'emr-containers.amazonaws.com',
      });
    }

    this.eksCluster.awsAuth.addRoleMapping(
      Role.fromRoleArn(
        this,
        'ServiceRoleForAmazonEMRContainers',
        `arn:aws:iam::${Stack.of(this).account}:role/AWSServiceRoleForAmazonEMRContainers`,
      ),
      {
        username: 'emr-containers',
        groups: [''],
      },
    );

    // Create an Amazon S3 Bucket for default podTemplate assets
    this.assetBucket = new Bucket (this, 'assetBucket', {
      encryption: BucketEncryption.KMS_MANAGED,
      enforceSSL: true,
      removalPolicy: RemovalPolicy.DESTROY,

    });

    // Configure the podTemplate location
    this.podTemplateLocation = {
      bucketName: this.assetBucket.bucketName,
      objectKey: `${this.clusterName}/pod-template`,
    };

    let s3DeploymentLambdaPolicyStatement: PolicyStatement[] = [];

    s3DeploymentLambdaPolicyStatement.push(new PolicyStatement({
      actions: ['logs:CreateLogGroup', 'logs:CreateLogStream', 'logs:PutLogEvents'],
      resources: [`arn:aws:logs:${Aws.REGION}:${Aws.ACCOUNT_ID}:*`],
      effect: Effect.ALLOW,
    }));

    //Policy to allow lambda access to cloudwatch logs
    const lambdaExecutionRolePolicy = new ManagedPolicy(this, 's3BucketDeploymentPolicy', {
      statements: s3DeploymentLambdaPolicyStatement,
      description: 'Policy used by S3 deployment cdk construct',
    });

    //Create an execution role for the lambda and attach to it a policy formed from user input
    this.assetUploadBucketRole = new Role(this,
      's3BucketDeploymentRole', {
        assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
        description: 'Role used by S3 deployment cdk construct',
        managedPolicies: [lambdaExecutionRolePolicy],
      });


    if (props.defaultNodes) {

      // Upload the default podTemplate to the Amazon S3 asset bucket
      this.uploadPodTemplate('defaultPodTemplates', join(__dirname, 'resources/k8s/pod-template'));

      // Replace the pod template location for driver and executor with the correct Amazon S3 path in the notebook default config
      NotebookDefaultConfig.applicationConfiguration[0].properties['spark.kubernetes.driver.podTemplateFile'] =
      this.assetBucket.s3UrlForObject(`${this.podTemplateLocation.objectKey}/notebook-driver.yaml`);

      NotebookDefaultConfig.applicationConfiguration[0].properties['spark.kubernetes.executor.podTemplateFile'] =
      this.assetBucket.s3UrlForObject(`${this.podTemplateLocation.objectKey}/notebook-executor.yaml`);

      this.notebookDefaultConfig = JSON.parse(JSON.stringify(NotebookDefaultConfig));

      // Replace the pod template location for driver and executor with the correct Amazon S3 path in the critical default config
      CriticalDefaultConfig.applicationConfiguration[0].properties['spark.kubernetes.driver.podTemplateFile'] =
      this.assetBucket.s3UrlForObject(`${this.podTemplateLocation.objectKey}/critical-driver.yaml`);
      CriticalDefaultConfig.applicationConfiguration[0].properties['spark.kubernetes.executor.podTemplateFile'] =
      this.assetBucket.s3UrlForObject(`${this.podTemplateLocation.objectKey}/critical-executor.yaml`);

      this.criticalDefaultConfig = JSON.stringify(CriticalDefaultConfig);

      // Replace the pod template location for driver and executor with the correct Amazon S3 path in the shared default config
      SharedDefaultConfig.applicationConfiguration[0].properties['spark.kubernetes.driver.podTemplateFile'] =
      this.assetBucket.s3UrlForObject(`${this.podTemplateLocation.objectKey}/shared-driver.yaml`);

      SharedDefaultConfig.applicationConfiguration[0].properties['spark.kubernetes.executor.podTemplateFile'] =
      this.assetBucket.s3UrlForObject(`${this.podTemplateLocation.objectKey}/shared-executor.yaml`);

      this.sharedDefaultConfig = JSON.stringify(SharedDefaultConfig);

      // Provide the podTemplate location on Amazon S3
      new CfnOutput(this, 'podTemplateLocation', {
        description: 'Use podTemplates in Amazon EMR jobs from this Amazon S3 Location',
        value: this.assetBucket.s3UrlForObject(`${this.podTemplateLocation.objectKey}`),
      });

    }

  }

  /**
   * Add a new Amazon EMR Virtual Cluster linked to Amazon EKS Cluster.
   * @param {Construct} scope of the stack where virtual cluster is deployed
   * @param {EmrVirtualClusterOptions} options the EmrVirtualClusterProps [properties]{@link EmrVirtualClusterProps}
   */
  public addEmrVirtualCluster(scope: Construct, options: EmrVirtualClusterOptions): CfnVirtualCluster {
    const eksNamespace = options.eksNamespace ?? 'default';

    let ns = undefined;

    if (options.createNamespace) {
      ns = createNamespace(this.eksCluster, options.eksNamespace!);
    }

    // deep clone the Role template object and replace the namespace
    const k8sRole = JSON.parse(JSON.stringify(K8sRole));
    k8sRole.metadata.namespace = eksNamespace;
    const role = this.eksCluster.addManifest(`${options.name}Role`, k8sRole);


    if (ns) {role.node.addDependency(ns);}

    // deep clone the Role Binding template object and replace the namespace
    const k8sRoleBinding = JSON.parse(JSON.stringify(K8sRoleBinding));
    k8sRoleBinding.metadata.namespace = eksNamespace;
    const roleBinding = this.eksCluster.addManifest(`${options.name}RoleBinding`, k8sRoleBinding);
    roleBinding.node.addDependency(role);

    const virtualCluster = new CfnVirtualCluster(scope, `${options.name}VirtualCluster`, {
      name: options.name,
      containerProvider: {
        id: this.clusterName,
        type: 'EKS',
        info: { eksInfo: { namespace: options.eksNamespace ?? 'default' } },
      },
    });

    virtualCluster.node.addDependency(roleBinding);

    if (this.emrServiceRole) {
      role.node.addDependency(this.emrServiceRole);
      virtualCluster.node.addDependency(this.emrServiceRole);
    }

    if (ns) {virtualCluster.node.addDependency(ns);}

    return virtualCluster;
  }


  /**
   * Create and configure a new Amazon IAM Role usable as an execution role.
   * This method makes the created role assumed by the Amazon EKS cluster Open ID Connect provider.
   * @param {Construct} scope of the IAM role
   * @param {string} id of the CDK resource to be created, it should be unique across the stack
   * @param {IManagedPolicy} policy the execution policy to attach to the role
   * @param {string} namespace The namespace from which the role is going to be used. MUST be the same as the namespace of the Virtual Cluster from which the job is submitted
   * @param {string} name Name to use for the role, required and is used to scope the iam role
   */
  public createExecutionRole(scope: Construct, id: string, policy: IManagedPolicy, namespace: string, name: string): Role {

    const stack = Stack.of(scope);

    let irsaConditionkey: CfnJson = new CfnJson(scope, `${id}irsaConditionkey'`, {
      value: {
        [`${this.eksCluster.openIdConnectProvider.openIdConnectProviderIssuer}:sub`]: 'system:serviceaccount:' + namespace + ':emr-containers-sa-*-*-' + Aws.ACCOUNT_ID.toString() + '-' + SimpleBase.base36.encode(name),
      },
    });

    // Create an execution role assumable by EKS OIDC provider
    return new Role(scope, `${id}ExecutionRole`, {
      assumedBy: new FederatedPrincipal(
        this.eksCluster.openIdConnectProvider.openIdConnectProviderArn,
        {
          StringLike: irsaConditionkey,
        },
        'sts:AssumeRoleWithWebIdentity'),
      roleName: name,
      managedPolicies: [policy],
      inlinePolicies: {
        PodTemplateAccess: new PolicyDocument({
          statements: [
            new PolicyStatement({
              actions: [
                's3:getObject',
              ],
              resources: [
                stack.formatArn({
                  region: '',
                  account: '',
                  service: 's3',
                  resource: this.podTemplateLocation.bucketName,
                  resourceName: `${this.podTemplateLocation.objectKey}/*`,
                }),
              ],
            }),
          ],
        }),
      },
    });
  }

  /**
   * Upload podTemplates to the Amazon S3 location used by the cluster.
   * @param {string} id the unique ID of the CDK resource
   * @param {string} filePath The local path of the yaml podTemplate files to upload
   */
  public uploadPodTemplate(id: string, filePath: string) {

    new BucketDeployment(this, `${id}AssetDeployment`, {
      destinationBucket: this.assetBucket,
      destinationKeyPrefix: this.podTemplateLocation.objectKey,
      sources: [Source.asset(filePath)],
      role: this.assetUploadBucketRole,
    });
  }

  /**
   * Apply the provided manifest and add the CDK dependency on EKS cluster
   * @param {string} id the unique ID of the CDK resource
   * @param {any} manifest The manifest to apply.
   * You can use the Utils class that offers method to read yaml file and load it as a manifest
   */
  public addKarpenterProvisioner(id: string, manifest: any): any {

    let manifestApply = this.eksCluster.addManifest(id, ...manifest);

    if (this.karpenterChart) {
      manifestApply.node.addDependency(this.karpenterChart);
    }

    return manifestApply;
  }
}

