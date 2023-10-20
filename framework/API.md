# AWS Data Solutions Framework

![ADSF logo](../website/static/img/adsf-logo-light.png)

AWS Data Solutions Framework (AWS DSF) is a framework for implementation and delivery of analytics solutions with built-in AWS best practices. AWS DSF is an abstraction atop AWS services based on [AWS Cloud Development Kit](https://aws.amazon.com/cdk/) (CDK) L3 constructs, packaged as a library.

➡️ **More information on our [website](https://awslabs.github.io/aws-data-solutions-framework)**

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessLogsBucket <a name="AccessLogsBucket" id="aws-dsf.AccessLogsBucket"></a>

Amazon S3 Bucket configured with best-practices and smart defaults for storing S3 access logs.

Default bucket name is `accesslogs-<AWS_ACCOUNT_ID>-<AWS_REGION>-<UNIQUE_ID>`

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/access-logs-bucket](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/access-logs-bucket)

*Example*

```typescript
const bucket = new dsf.AccessLogsBucket(this, 'AccessLogsBucket', {
 removalPolicy: cdk.RemovalPolicy.DESTROY,
})
```


#### Initializers <a name="Initializers" id="aws-dsf.AccessLogsBucket.Initializer"></a>

```typescript
import { AccessLogsBucket } from 'aws-dsf'

new AccessLogsBucket(scope: Construct, id: string, props?: BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.AccessLogsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-dsf.AccessLogsBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.AccessLogsBucket.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_s3.BucketProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.AccessLogsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AccessLogsBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="aws-dsf.AccessLogsBucket.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.AccessLogsBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.AccessLogsBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-dsf.AccessLogsBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#aws-dsf.AccessLogsBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#aws-dsf.AccessLogsBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#aws-dsf.AccessLogsBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#aws-dsf.AccessLogsBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#aws-dsf.AccessLogsBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#aws-dsf.AccessLogsBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#aws-dsf.AccessLogsBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#aws-dsf.AccessLogsBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#aws-dsf.AccessLogsBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#aws-dsf.AccessLogsBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#aws-dsf.AccessLogsBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#aws-dsf.AccessLogsBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#aws-dsf.AccessLogsBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#aws-dsf.AccessLogsBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#aws-dsf.AccessLogsBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#aws-dsf.AccessLogsBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="aws-dsf.AccessLogsBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-dsf.AccessLogsBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-dsf.AccessLogsBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="aws-dsf.AccessLogsBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="aws-dsf.AccessLogsBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="aws-dsf.AccessLogsBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="aws-dsf.AccessLogsBucket.addEventNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="aws-dsf.AccessLogsBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="aws-dsf.AccessLogsBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="aws-dsf.AccessLogsBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="aws-dsf.AccessLogsBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="aws-dsf.AccessLogsBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="aws-dsf.AccessLogsBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="aws-dsf.AccessLogsBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="aws-dsf.AccessLogsBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="aws-dsf.AccessLogsBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="aws-dsf.AccessLogsBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="aws-dsf.AccessLogsBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="aws-dsf.AccessLogsBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AccessLogsBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AccessLogsBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="aws-dsf.AccessLogsBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: string, keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="aws-dsf.AccessLogsBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* string

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="aws-dsf.AccessLogsBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="aws-dsf.AccessLogsBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AccessLogsBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AccessLogsBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPutAcl` <a name="grantPutAcl" id="aws-dsf.AccessLogsBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling `grantWrite` or `grantReadWrite` no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AccessLogsBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AccessLogsBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="aws-dsf.AccessLogsBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AccessLogsBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AccessLogsBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantReadWrite` <a name="grantReadWrite" id="aws-dsf.AccessLogsBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AccessLogsBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AccessLogsBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="aws-dsf.AccessLogsBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AccessLogsBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AccessLogsBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="aws-dsf.AccessLogsBucket.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="aws-dsf.AccessLogsBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AccessLogsBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AccessLogsBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="aws-dsf.AccessLogsBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AccessLogsBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AccessLogsBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="aws-dsf.AccessLogsBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AccessLogsBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AccessLogsBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="aws-dsf.AccessLogsBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="aws-dsf.AccessLogsBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="aws-dsf.AccessLogsBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="aws-dsf.AccessLogsBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AccessLogsBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="aws-dsf.AccessLogsBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="aws-dsf.AccessLogsBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="aws-dsf.AccessLogsBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="aws-dsf.AccessLogsBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AccessLogsBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="aws-dsf.AccessLogsBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="aws-dsf.AccessLogsBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="aws-dsf.AccessLogsBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="aws-dsf.AccessLogsBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="aws-dsf.AccessLogsBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="aws-dsf.AccessLogsBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="aws-dsf.AccessLogsBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="aws-dsf.AccessLogsBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.AccessLogsBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-dsf.AccessLogsBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-dsf.AccessLogsBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-dsf.AccessLogsBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#aws-dsf.AccessLogsBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#aws-dsf.AccessLogsBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#aws-dsf.AccessLogsBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.AccessLogsBucket.isConstruct"></a>

```typescript
import { AccessLogsBucket } from 'aws-dsf'

AccessLogsBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.AccessLogsBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-dsf.AccessLogsBucket.isOwnedResource"></a>

```typescript
import { AccessLogsBucket } from 'aws-dsf'

AccessLogsBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-dsf.AccessLogsBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-dsf.AccessLogsBucket.isResource"></a>

```typescript
import { AccessLogsBucket } from 'aws-dsf'

AccessLogsBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-dsf.AccessLogsBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="aws-dsf.AccessLogsBucket.fromBucketArn"></a>

```typescript
import { AccessLogsBucket } from 'aws-dsf'

AccessLogsBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.AccessLogsBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AccessLogsBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="aws-dsf.AccessLogsBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="aws-dsf.AccessLogsBucket.fromBucketAttributes"></a>

```typescript
import { AccessLogsBucket } from 'aws-dsf'

AccessLogsBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.AccessLogsBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AccessLogsBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-dsf.AccessLogsBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="aws-dsf.AccessLogsBucket.fromBucketName"></a>

```typescript
import { AccessLogsBucket } from 'aws-dsf'

AccessLogsBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.AccessLogsBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AccessLogsBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="aws-dsf.AccessLogsBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="aws-dsf.AccessLogsBucket.fromCfnBucket"></a>

```typescript
import { AccessLogsBucket } from 'aws-dsf'

AccessLogsBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="aws-dsf.AccessLogsBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="aws-dsf.AccessLogsBucket.validateBucketName"></a>

```typescript
import { AccessLogsBucket } from 'aws-dsf'

AccessLogsBucket.validateBucketName(physicalName: string)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="aws-dsf.AccessLogsBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.AccessLogsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#aws-dsf.AccessLogsBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.AccessLogsBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-dsf.AccessLogsBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-dsf.AccessLogsBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="aws-dsf.AccessLogsBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="aws-dsf.AccessLogsBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="aws-dsf.AccessLogsBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="aws-dsf.AccessLogsBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="aws-dsf.AccessLogsBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="aws-dsf.AccessLogsBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="aws-dsf.AccessLogsBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="aws-dsf.AccessLogsBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="aws-dsf.AccessLogsBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="aws-dsf.AccessLogsBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---


### AnalyticsBucket <a name="AnalyticsBucket" id="aws-dsf.AnalyticsBucket"></a>

Amazon S3 Bucket configured with best-practices and defaults for analytics.

The default bucket name is `analytics-<AWS_ACCOUNT_ID>-<AWS_REGION>-<UNIQUE_ID>`

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/analytics-bucket](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/analytics-bucket)

*Example*

```typescript
import { Key } from 'aws-cdk-lib/aws-kms';

// Set context value for global data removal policy (or set in cdk.json).
this.node.setContext('@aws-data-solutions-framework/removeDataOnDestroy', true);

const encryptionKey = new Key(this, 'DataKey', {
 removalPolicy: cdk.RemovalPolicy.DESTROY,
 enableKeyRotation: true,
});

new dsf.AnalyticsBucket(this, 'MyAnalyticsBucket', {
 encryptionKey,
 removalPolicy: cdk.RemovalPolicy.DESTROY,
});
```


#### Initializers <a name="Initializers" id="aws-dsf.AnalyticsBucket.Initializer"></a>

```typescript
import { AnalyticsBucket } from 'aws-dsf'

new AnalyticsBucket(scope: Construct, id: string, props: AnalyticsBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.AnalyticsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-dsf.AnalyticsBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.AnalyticsBucket.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.AnalyticsBucketProps">AnalyticsBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.AnalyticsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AnalyticsBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.AnalyticsBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.AnalyticsBucketProps">AnalyticsBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.AnalyticsBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.AnalyticsBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-dsf.AnalyticsBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#aws-dsf.AnalyticsBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#aws-dsf.AnalyticsBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#aws-dsf.AnalyticsBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#aws-dsf.AnalyticsBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#aws-dsf.AnalyticsBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#aws-dsf.AnalyticsBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#aws-dsf.AnalyticsBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#aws-dsf.AnalyticsBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#aws-dsf.AnalyticsBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#aws-dsf.AnalyticsBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#aws-dsf.AnalyticsBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#aws-dsf.AnalyticsBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#aws-dsf.AnalyticsBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#aws-dsf.AnalyticsBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#aws-dsf.AnalyticsBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#aws-dsf.AnalyticsBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="aws-dsf.AnalyticsBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-dsf.AnalyticsBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-dsf.AnalyticsBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="aws-dsf.AnalyticsBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="aws-dsf.AnalyticsBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="aws-dsf.AnalyticsBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="aws-dsf.AnalyticsBucket.addEventNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="aws-dsf.AnalyticsBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="aws-dsf.AnalyticsBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="aws-dsf.AnalyticsBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="aws-dsf.AnalyticsBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="aws-dsf.AnalyticsBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="aws-dsf.AnalyticsBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="aws-dsf.AnalyticsBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="aws-dsf.AnalyticsBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="aws-dsf.AnalyticsBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="aws-dsf.AnalyticsBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="aws-dsf.AnalyticsBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="aws-dsf.AnalyticsBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AnalyticsBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AnalyticsBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="aws-dsf.AnalyticsBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: string, keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="aws-dsf.AnalyticsBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* string

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="aws-dsf.AnalyticsBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="aws-dsf.AnalyticsBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AnalyticsBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AnalyticsBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPutAcl` <a name="grantPutAcl" id="aws-dsf.AnalyticsBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling `grantWrite` or `grantReadWrite` no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AnalyticsBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AnalyticsBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="aws-dsf.AnalyticsBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AnalyticsBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AnalyticsBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantReadWrite` <a name="grantReadWrite" id="aws-dsf.AnalyticsBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AnalyticsBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AnalyticsBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="aws-dsf.AnalyticsBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-dsf.AnalyticsBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="aws-dsf.AnalyticsBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="aws-dsf.AnalyticsBucket.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="aws-dsf.AnalyticsBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AnalyticsBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AnalyticsBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="aws-dsf.AnalyticsBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AnalyticsBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AnalyticsBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="aws-dsf.AnalyticsBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AnalyticsBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AnalyticsBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="aws-dsf.AnalyticsBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="aws-dsf.AnalyticsBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="aws-dsf.AnalyticsBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="aws-dsf.AnalyticsBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AnalyticsBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="aws-dsf.AnalyticsBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="aws-dsf.AnalyticsBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="aws-dsf.AnalyticsBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="aws-dsf.AnalyticsBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.AnalyticsBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="aws-dsf.AnalyticsBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="aws-dsf.AnalyticsBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="aws-dsf.AnalyticsBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="aws-dsf.AnalyticsBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="aws-dsf.AnalyticsBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="aws-dsf.AnalyticsBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="aws-dsf.AnalyticsBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="aws-dsf.AnalyticsBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.AnalyticsBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-dsf.AnalyticsBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-dsf.AnalyticsBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-dsf.AnalyticsBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#aws-dsf.AnalyticsBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#aws-dsf.AnalyticsBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#aws-dsf.AnalyticsBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.AnalyticsBucket.isConstruct"></a>

```typescript
import { AnalyticsBucket } from 'aws-dsf'

AnalyticsBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.AnalyticsBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-dsf.AnalyticsBucket.isOwnedResource"></a>

```typescript
import { AnalyticsBucket } from 'aws-dsf'

AnalyticsBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-dsf.AnalyticsBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-dsf.AnalyticsBucket.isResource"></a>

```typescript
import { AnalyticsBucket } from 'aws-dsf'

AnalyticsBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-dsf.AnalyticsBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="aws-dsf.AnalyticsBucket.fromBucketArn"></a>

```typescript
import { AnalyticsBucket } from 'aws-dsf'

AnalyticsBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.AnalyticsBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AnalyticsBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="aws-dsf.AnalyticsBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="aws-dsf.AnalyticsBucket.fromBucketAttributes"></a>

```typescript
import { AnalyticsBucket } from 'aws-dsf'

AnalyticsBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.AnalyticsBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AnalyticsBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-dsf.AnalyticsBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="aws-dsf.AnalyticsBucket.fromBucketName"></a>

```typescript
import { AnalyticsBucket } from 'aws-dsf'

AnalyticsBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.AnalyticsBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.AnalyticsBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="aws-dsf.AnalyticsBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="aws-dsf.AnalyticsBucket.fromCfnBucket"></a>

```typescript
import { AnalyticsBucket } from 'aws-dsf'

AnalyticsBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="aws-dsf.AnalyticsBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="aws-dsf.AnalyticsBucket.validateBucketName"></a>

```typescript
import { AnalyticsBucket } from 'aws-dsf'

AnalyticsBucket.validateBucketName(physicalName: string)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="aws-dsf.AnalyticsBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.AnalyticsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#aws-dsf.AnalyticsBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.AnalyticsBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-dsf.AnalyticsBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-dsf.AnalyticsBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="aws-dsf.AnalyticsBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="aws-dsf.AnalyticsBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="aws-dsf.AnalyticsBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="aws-dsf.AnalyticsBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="aws-dsf.AnalyticsBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="aws-dsf.AnalyticsBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="aws-dsf.AnalyticsBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="aws-dsf.AnalyticsBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="aws-dsf.AnalyticsBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="aws-dsf.AnalyticsBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---


### ApplicationStage <a name="ApplicationStage" id="aws-dsf.ApplicationStage"></a>

ApplicationStage class that creates a CDK Pipelines Stage from an ApplicationStackFactory.

#### Initializers <a name="Initializers" id="aws-dsf.ApplicationStage.Initializer"></a>

```typescript
import { ApplicationStage } from 'aws-dsf'

new ApplicationStage(scope: Construct, id: string, props: ApplicationStageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.ApplicationStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#aws-dsf.ApplicationStage.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#aws-dsf.ApplicationStage.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.ApplicationStageProps">ApplicationStageProps</a></code> | the SparkCICDStageProps properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.ApplicationStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.ApplicationStage.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.ApplicationStage.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.ApplicationStageProps">ApplicationStageProps</a>

the SparkCICDStageProps properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.ApplicationStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.ApplicationStage.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |

---

##### `toString` <a name="toString" id="aws-dsf.ApplicationStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="aws-dsf.ApplicationStage.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="aws-dsf.ApplicationStage.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.ApplicationStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-dsf.ApplicationStage.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#aws-dsf.ApplicationStage.of">of</a></code> | Return the stage this construct is contained with, if available. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.ApplicationStage.isConstruct"></a>

```typescript
import { ApplicationStage } from 'aws-dsf'

ApplicationStage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.ApplicationStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="aws-dsf.ApplicationStage.isStage"></a>

```typescript
import { ApplicationStage } from 'aws-dsf'

ApplicationStage.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.ApplicationStage.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="aws-dsf.ApplicationStage.of"></a>

```typescript
import { ApplicationStage } from 'aws-dsf'

ApplicationStage.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-dsf.ApplicationStage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.ApplicationStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.ApplicationStage.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#aws-dsf.ApplicationStage.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#aws-dsf.ApplicationStage.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#aws-dsf.ApplicationStage.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#aws-dsf.ApplicationStage.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#aws-dsf.ApplicationStage.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#aws-dsf.ApplicationStage.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#aws-dsf.ApplicationStage.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |
| <code><a href="#aws-dsf.ApplicationStage.property.stackOutputsEnv">stackOutputsEnv</a></code> | <code>{[ key: string ]: aws-cdk-lib.CfnOutput}</code> | The list of CfnOutputs created by the CDK Stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.ApplicationStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="aws-dsf.ApplicationStage.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="aws-dsf.ApplicationStage.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="aws-dsf.ApplicationStage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### `policyValidationBeta1`<sup>Required</sup> <a name="policyValidationBeta1" id="aws-dsf.ApplicationStage.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="aws-dsf.ApplicationStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="aws-dsf.ApplicationStage.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="aws-dsf.ApplicationStage.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="aws-dsf.ApplicationStage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---

##### `stackOutputsEnv`<sup>Optional</sup> <a name="stackOutputsEnv" id="aws-dsf.ApplicationStage.property.stackOutputsEnv"></a>

```typescript
public readonly stackOutputsEnv: {[ key: string ]: CfnOutput};
```

- *Type:* {[ key: string ]: aws-cdk-lib.CfnOutput}

The list of CfnOutputs created by the CDK Stack.

---


### DataCatalogDatabase <a name="DataCatalogDatabase" id="aws-dsf.DataCatalogDatabase"></a>

An AWS Glue Data Catalog Database configured with the location and a crawler.

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/data-catalog-database](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/data-catalog-database)

*Example*

```typescript
import { Bucket } from 'aws-cdk-lib/aws-s3';

new dsf.DataCatalogDatabase(this, 'ExampleDatabase', {
   locationBucket: new Bucket(scope, 'LocationBucket'),
   locationPrefix: '/databasePath',
   name: 'example-db'
});
```


#### Initializers <a name="Initializers" id="aws-dsf.DataCatalogDatabase.Initializer"></a>

```typescript
import { DataCatalogDatabase } from 'aws-dsf'

new DataCatalogDatabase(scope: Construct, id: string, props: DataCatalogDatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataCatalogDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-dsf.DataCatalogDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.DataCatalogDatabase.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.DataCatalogDatabaseProps">DataCatalogDatabaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.DataCatalogDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.DataCatalogDatabase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.DataCatalogDatabase.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.DataCatalogDatabaseProps">DataCatalogDatabaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.DataCatalogDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.DataCatalogDatabase.grantReadOnlyAccess">grantReadOnlyAccess</a></code> | Grants read access via identity based policy to the principal. |
| <code><a href="#aws-dsf.DataCatalogDatabase.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |

---

##### `toString` <a name="toString" id="aws-dsf.DataCatalogDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `grantReadOnlyAccess` <a name="grantReadOnlyAccess" id="aws-dsf.DataCatalogDatabase.grantReadOnlyAccess"></a>

```typescript
public grantReadOnlyAccess(principal: IPrincipal): AddToPrincipalPolicyResult
```

Grants read access via identity based policy to the principal.

This would attach an IAM policy to the principal allowing read access to the database and all its tables.

###### `principal`<sup>Required</sup> <a name="principal" id="aws-dsf.DataCatalogDatabase.grantReadOnlyAccess.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

Principal to attach the database read access to.

---

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.DataCatalogDatabase.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.DataCatalogDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.DataCatalogDatabase.isConstruct"></a>

```typescript
import { DataCatalogDatabase } from 'aws-dsf'

DataCatalogDatabase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.DataCatalogDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataCatalogDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.DataCatalogDatabase.property.database">database</a></code> | <code>aws-cdk-lib.aws_glue.CfnDatabase</code> | The Glue database that's created. |
| <code><a href="#aws-dsf.DataCatalogDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | The Glue database name with the randomized suffix to prevent name collisions in the catalog. |
| <code><a href="#aws-dsf.DataCatalogDatabase.property.crawler">crawler</a></code> | <code>aws-cdk-lib.aws_glue.CfnCrawler</code> | The Glue Crawler that is automatically created when `autoCrawl` is set to `true` (default value). |
| <code><a href="#aws-dsf.DataCatalogDatabase.property.crawlerLogEncryptionKey">crawlerLogEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | KMS encryption key used by the Crawler. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.DataCatalogDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `database`<sup>Required</sup> <a name="database" id="aws-dsf.DataCatalogDatabase.property.database"></a>

```typescript
public readonly database: CfnDatabase;
```

- *Type:* aws-cdk-lib.aws_glue.CfnDatabase

The Glue database that's created.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="aws-dsf.DataCatalogDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The Glue database name with the randomized suffix to prevent name collisions in the catalog.

---

##### `crawler`<sup>Optional</sup> <a name="crawler" id="aws-dsf.DataCatalogDatabase.property.crawler"></a>

```typescript
public readonly crawler: CfnCrawler;
```

- *Type:* aws-cdk-lib.aws_glue.CfnCrawler

The Glue Crawler that is automatically created when `autoCrawl` is set to `true` (default value).

This property can be undefined if `autoCrawl` is set to `false`.

---

##### `crawlerLogEncryptionKey`<sup>Optional</sup> <a name="crawlerLogEncryptionKey" id="aws-dsf.DataCatalogDatabase.property.crawlerLogEncryptionKey"></a>

```typescript
public readonly crawlerLogEncryptionKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

KMS encryption key used by the Crawler.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataCatalogDatabase.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.DataCatalogDatabase.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.DataCatalogDatabase.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.DataCatalogDatabase.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

### DataLakeCatalog <a name="DataLakeCatalog" id="aws-dsf.DataLakeCatalog"></a>

Creates AWS Glue Catalog Database for each storage layer.

Composed of 3 {@link DataCatalogDatabase} for Bronze, Silver, and Gold data.

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/data-lake-catalog](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/data-lake-catalog)

*Example*

```typescript
import { Key } from 'aws-cdk-lib/aws-kms';

const logEncryptionKey = new Key(this, 'LogEncryptionKey');
const storage = new dsf.DataLakeStorage(this, "ExampleStorage");
const dataLakeCatalog = new dsf.DataLakeCatalog(this, "ExampleDataLakeCatalog", {
  dataLakeStorage: storage,
  databaseName: "exampledb",
  crawlerLogEncryptionKey: logEncryptionKey
})
```


#### Initializers <a name="Initializers" id="aws-dsf.DataLakeCatalog.Initializer"></a>

```typescript
import { DataLakeCatalog } from 'aws-dsf'

new DataLakeCatalog(scope: Construct, id: string, props: DataLakeCatalogProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataLakeCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#aws-dsf.DataLakeCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#aws-dsf.DataLakeCatalog.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.DataLakeCatalogProps">DataLakeCatalogProps</a></code> | the DataLakeCatalog properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.DataLakeCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.DataLakeCatalog.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.DataLakeCatalog.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.DataLakeCatalogProps">DataLakeCatalogProps</a>

the DataLakeCatalog properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.DataLakeCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.DataLakeCatalog.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |

---

##### `toString` <a name="toString" id="aws-dsf.DataLakeCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.DataLakeCatalog.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.DataLakeCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.DataLakeCatalog.isConstruct"></a>

```typescript
import { DataLakeCatalog } from 'aws-dsf'

DataLakeCatalog.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.DataLakeCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataLakeCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.DataLakeCatalog.property.bronzeCatalogDatabase">bronzeCatalogDatabase</a></code> | <code><a href="#aws-dsf.DataCatalogDatabase">DataCatalogDatabase</a></code> | *No description.* |
| <code><a href="#aws-dsf.DataLakeCatalog.property.goldCatalogDatabase">goldCatalogDatabase</a></code> | <code><a href="#aws-dsf.DataCatalogDatabase">DataCatalogDatabase</a></code> | *No description.* |
| <code><a href="#aws-dsf.DataLakeCatalog.property.silverCatalogDatabase">silverCatalogDatabase</a></code> | <code><a href="#aws-dsf.DataCatalogDatabase">DataCatalogDatabase</a></code> | *No description.* |
| <code><a href="#aws-dsf.DataLakeCatalog.property.crawlerLogEncryptionKey">crawlerLogEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.DataLakeCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bronzeCatalogDatabase`<sup>Required</sup> <a name="bronzeCatalogDatabase" id="aws-dsf.DataLakeCatalog.property.bronzeCatalogDatabase"></a>

```typescript
public readonly bronzeCatalogDatabase: DataCatalogDatabase;
```

- *Type:* <a href="#aws-dsf.DataCatalogDatabase">DataCatalogDatabase</a>

---

##### `goldCatalogDatabase`<sup>Required</sup> <a name="goldCatalogDatabase" id="aws-dsf.DataLakeCatalog.property.goldCatalogDatabase"></a>

```typescript
public readonly goldCatalogDatabase: DataCatalogDatabase;
```

- *Type:* <a href="#aws-dsf.DataCatalogDatabase">DataCatalogDatabase</a>

---

##### `silverCatalogDatabase`<sup>Required</sup> <a name="silverCatalogDatabase" id="aws-dsf.DataLakeCatalog.property.silverCatalogDatabase"></a>

```typescript
public readonly silverCatalogDatabase: DataCatalogDatabase;
```

- *Type:* <a href="#aws-dsf.DataCatalogDatabase">DataCatalogDatabase</a>

---

##### `crawlerLogEncryptionKey`<sup>Optional</sup> <a name="crawlerLogEncryptionKey" id="aws-dsf.DataLakeCatalog.property.crawlerLogEncryptionKey"></a>

```typescript
public readonly crawlerLogEncryptionKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataLakeCatalog.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.DataLakeCatalog.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.DataLakeCatalog.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.DataLakeCatalog.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

### DataLakeStorage <a name="DataLakeStorage" id="aws-dsf.DataLakeStorage"></a>

Creates the storage layer for a data lake, composed of 3 {@link AnalyticsBucket} for Bronze, Silver, and Gold data.

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/data-lake-storage](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/data-lake-storage)

*Example*

```typescript
// Set the context value for global data removal policy
this.node.setContext('@aws-data-solutions-framework/removeDataOnDestroy', true);

new dsf.DataLakeStorage(this, 'MyDataLakeStorage', {
 bronzeBucketName: 'my-bronze',
 bronzeBucketInfrequentAccessDelay: 90,
 bronzeBucketArchiveDelay: 180,
 silverBucketName: 'my-silver',
 silverBucketInfrequentAccessDelay: 180,
 silverBucketArchiveDelay: 360,
 goldBucketName: 'my-gold',
 goldBucketInfrequentAccessDelay: 180,
 goldBucketArchiveDelay: 360,
 removalPolicy: cdk.RemovalPolicy.DESTROY,
});
```


#### Initializers <a name="Initializers" id="aws-dsf.DataLakeStorage.Initializer"></a>

```typescript
import { DataLakeStorage } from 'aws-dsf'

new DataLakeStorage(scope: Construct, id: string, props?: DataLakeStorageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataLakeStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#aws-dsf.DataLakeStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#aws-dsf.DataLakeStorage.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.DataLakeStorageProps">DataLakeStorageProps</a></code> | the DataLakeStorageProps properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.DataLakeStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.DataLakeStorage.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Optional</sup> <a name="props" id="aws-dsf.DataLakeStorage.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.DataLakeStorageProps">DataLakeStorageProps</a>

the DataLakeStorageProps properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.DataLakeStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.DataLakeStorage.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |

---

##### `toString` <a name="toString" id="aws-dsf.DataLakeStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.DataLakeStorage.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.DataLakeStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.DataLakeStorage.isConstruct"></a>

```typescript
import { DataLakeStorage } from 'aws-dsf'

DataLakeStorage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.DataLakeStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataLakeStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.DataLakeStorage.property.accessLogsBucket">accessLogsBucket</a></code> | <code><a href="#aws-dsf.AccessLogsBucket">AccessLogsBucket</a></code> | *No description.* |
| <code><a href="#aws-dsf.DataLakeStorage.property.bronzeBucket">bronzeBucket</a></code> | <code><a href="#aws-dsf.AnalyticsBucket">AnalyticsBucket</a></code> | *No description.* |
| <code><a href="#aws-dsf.DataLakeStorage.property.dataLakeKey">dataLakeKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#aws-dsf.DataLakeStorage.property.goldBucket">goldBucket</a></code> | <code><a href="#aws-dsf.AnalyticsBucket">AnalyticsBucket</a></code> | *No description.* |
| <code><a href="#aws-dsf.DataLakeStorage.property.silverBucket">silverBucket</a></code> | <code><a href="#aws-dsf.AnalyticsBucket">AnalyticsBucket</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.DataLakeStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `accessLogsBucket`<sup>Required</sup> <a name="accessLogsBucket" id="aws-dsf.DataLakeStorage.property.accessLogsBucket"></a>

```typescript
public readonly accessLogsBucket: AccessLogsBucket;
```

- *Type:* <a href="#aws-dsf.AccessLogsBucket">AccessLogsBucket</a>

---

##### `bronzeBucket`<sup>Required</sup> <a name="bronzeBucket" id="aws-dsf.DataLakeStorage.property.bronzeBucket"></a>

```typescript
public readonly bronzeBucket: AnalyticsBucket;
```

- *Type:* <a href="#aws-dsf.AnalyticsBucket">AnalyticsBucket</a>

---

##### `dataLakeKey`<sup>Required</sup> <a name="dataLakeKey" id="aws-dsf.DataLakeStorage.property.dataLakeKey"></a>

```typescript
public readonly dataLakeKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `goldBucket`<sup>Required</sup> <a name="goldBucket" id="aws-dsf.DataLakeStorage.property.goldBucket"></a>

```typescript
public readonly goldBucket: AnalyticsBucket;
```

- *Type:* <a href="#aws-dsf.AnalyticsBucket">AnalyticsBucket</a>

---

##### `silverBucket`<sup>Required</sup> <a name="silverBucket" id="aws-dsf.DataLakeStorage.property.silverBucket"></a>

```typescript
public readonly silverBucket: AnalyticsBucket;
```

- *Type:* <a href="#aws-dsf.AnalyticsBucket">AnalyticsBucket</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataLakeStorage.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.DataLakeStorage.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.DataLakeStorage.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.DataLakeStorage.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

### PySparkApplicationPackage <a name="PySparkApplicationPackage" id="aws-dsf.PySparkApplicationPackage"></a>

A construct that takes your PySpark application, packages its virtual environment and uploads it along its entrypoint to an Amazon S3 bucket This construct requires Docker daemon installed locally to run.

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/pyspark-application-package](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/pyspark-application-package)

*Example*

```typescript
let pysparkPacker = new dsf.PySparkApplicationPackage (this, 'pysparkPacker', {
  applicationName: 'my-pyspark',
  entrypointPath: '/Users/my-user/my-spark-job/app/app-pyspark.py',
  dependenciesFolder: '/Users/my-user/my-spark-job/app',
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

let sparkEnvConf: string = `--conf spark.archives=${pysparkPacker.venvArchiveS3Uri} --conf spark.emr-serverless.driverEnv.PYSPARK_DRIVER_PYTHON=./environment/bin/python --conf spark.emr-serverless.driverEnv.PYSPARK_PYTHON=./environment/bin/python --conf spark.emr-serverless.executorEnv.PYSPARK_PYTHON=./environment/bin/python`

new dsf.SparkEmrServerlessJob(this, 'SparkJobServerless', {
  name: 'MyPySpark',
  applicationId: 'xxxxxxxxx',
  executionRoleArn: 'ROLE-ARN',
  executionTimeoutMinutes: 30,
  s3LogUri: 's3://s3-bucket/monitoring-logs',
  cloudWatchLogGroupName: 'my-pyspark-serverless-log',
  sparkSubmitEntryPoint: `${pysparkPacker.entrypointS3Uri}`,
  sparkSubmitParameters: `--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4 ${sparkEnvConf}`,
} as dsf.SparkEmrServerlessJobProps);
```


#### Initializers <a name="Initializers" id="aws-dsf.PySparkApplicationPackage.Initializer"></a>

```typescript
import { PySparkApplicationPackage } from 'aws-dsf'

new PySparkApplicationPackage(scope: Construct, id: string, props: PySparkApplicationPackageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.PySparkApplicationPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#aws-dsf.PySparkApplicationPackage.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#aws-dsf.PySparkApplicationPackage.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.PySparkApplicationPackageProps">PySparkApplicationPackageProps</a></code> | {@link PySparkApplicationPackageProps}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.PySparkApplicationPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.PySparkApplicationPackage.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.PySparkApplicationPackage.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.PySparkApplicationPackageProps">PySparkApplicationPackageProps</a>

{@link PySparkApplicationPackageProps}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.PySparkApplicationPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.PySparkApplicationPackage.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |

---

##### `toString` <a name="toString" id="aws-dsf.PySparkApplicationPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.PySparkApplicationPackage.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.PySparkApplicationPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.PySparkApplicationPackage.isConstruct"></a>

```typescript
import { PySparkApplicationPackage } from 'aws-dsf'

PySparkApplicationPackage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.PySparkApplicationPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.PySparkApplicationPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.PySparkApplicationPackage.property.artifactsBucket">artifactsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket storing the artifacts (entrypoint and virtual environment archive). |
| <code><a href="#aws-dsf.PySparkApplicationPackage.property.assetUploadBucketRole">assetUploadBucketRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the BucketDeployment to upload the artifacts to an s3 bucket. |
| <code><a href="#aws-dsf.PySparkApplicationPackage.property.entrypointS3Uri">entrypointS3Uri</a></code> | <code>string</code> | The S3 location where the entry point is saved in S3. |
| <code><a href="#aws-dsf.PySparkApplicationPackage.property.sparkVenvConf">sparkVenvConf</a></code> | <code>string</code> | The Spark config containing the configuration of virtual environment archive with all dependencies. |
| <code><a href="#aws-dsf.PySparkApplicationPackage.property.venvArchiveS3Uri">venvArchiveS3Uri</a></code> | <code>string</code> | The S3 location where the archive of the Python virtual environment with all dependencies is stored. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.PySparkApplicationPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactsBucket`<sup>Required</sup> <a name="artifactsBucket" id="aws-dsf.PySparkApplicationPackage.property.artifactsBucket"></a>

```typescript
public readonly artifactsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket storing the artifacts (entrypoint and virtual environment archive).

---

##### `assetUploadBucketRole`<sup>Required</sup> <a name="assetUploadBucketRole" id="aws-dsf.PySparkApplicationPackage.property.assetUploadBucketRole"></a>

```typescript
public readonly assetUploadBucketRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the BucketDeployment to upload the artifacts to an s3 bucket.

In case you provide your own bucket for storing the artifacts (entrypoint and virtual environment archive),
you must provide s3 write access to this role to upload the artifacts.

---

##### `entrypointS3Uri`<sup>Required</sup> <a name="entrypointS3Uri" id="aws-dsf.PySparkApplicationPackage.property.entrypointS3Uri"></a>

```typescript
public readonly entrypointS3Uri: string;
```

- *Type:* string

The S3 location where the entry point is saved in S3.

You pass this location to your Spark job.

---

##### `sparkVenvConf`<sup>Optional</sup> <a name="sparkVenvConf" id="aws-dsf.PySparkApplicationPackage.property.sparkVenvConf"></a>

```typescript
public readonly sparkVenvConf: string;
```

- *Type:* string

The Spark config containing the configuration of virtual environment archive with all dependencies.

---

##### `venvArchiveS3Uri`<sup>Optional</sup> <a name="venvArchiveS3Uri" id="aws-dsf.PySparkApplicationPackage.property.venvArchiveS3Uri"></a>

```typescript
public readonly venvArchiveS3Uri: string;
```

- *Type:* string

The S3 location where the archive of the Python virtual environment with all dependencies is stored.

You pass this location to your Spark job.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.PySparkApplicationPackage.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.PySparkApplicationPackage.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.PySparkApplicationPackage.property.ARTIFACTS_PREFIX">ARTIFACTS_PREFIX</a></code> | <code>string</code> | The prefix used to store artifacts on the artifact bucket. |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.PySparkApplicationPackage.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.PySparkApplicationPackage.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

##### `ARTIFACTS_PREFIX`<sup>Required</sup> <a name="ARTIFACTS_PREFIX" id="aws-dsf.PySparkApplicationPackage.property.ARTIFACTS_PREFIX"></a>

```typescript
public readonly ARTIFACTS_PREFIX: string;
```

- *Type:* string

The prefix used to store artifacts on the artifact bucket.

---

### SparkEmrCICDPipeline <a name="SparkEmrCICDPipeline" id="aws-dsf.SparkEmrCICDPipeline"></a>

A CICD Pipeline that tests and deploys a Spark application in cross-account environments using CDK Pipelines.

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-cicd-pipeline](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-cicd-pipeline)

*Example*

```typescript
import { Bucket } from 'aws-cdk-lib/aws-s3';

interface MyApplicationStackProps extends cdk.StackProps {
  readonly stage: dsf.CICDStage;
}

class MyApplicationStack extends cdk.Stack {
  constructor(scope: cdk.Stack, props?: MyApplicationStackProps) {
    super(scope, 'MyApplicationStack');
    const bucket = new Bucket(this, 'TestBucket', {
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    new cdk.CfnOutput(this, 'BucketName', { value: bucket.bucketName });
  }
}

class MyStackFactory implements dsf.ApplicationStackFactory {
  createStack(scope: cdk.Stack, stage: dsf.CICDStage): cdk.Stack {
    return new MyApplicationStack(scope, { stage });
  }
}

class MyCICDStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new dsf.SparkEmrCICDPipeline(this, 'TestConstruct', {
       sparkApplicationName: 'test',
       applicationStackFactory: new MyStackFactory(),
       cdkApplicationPath: 'cdk/',
       sparkApplicationPath: 'spark/',
       sparkImage: dsf.SparkImage.EMR_6_12,
       integTestScript: 'cdk/integ-test.sh',
       integTestEnv: {
         TEST_BUCKET: 'BucketName',
       },
    });
  }
}
```


#### Initializers <a name="Initializers" id="aws-dsf.SparkEmrCICDPipeline.Initializer"></a>

```typescript
import { SparkEmrCICDPipeline } from 'aws-dsf'

new SparkEmrCICDPipeline(scope: Construct, id: string, props: SparkEmrCICDPipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.SparkEmrCICDPipelineProps">SparkEmrCICDPipelineProps</a></code> | the SparkCICDPipelineProps properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.SparkEmrCICDPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.SparkEmrCICDPipeline.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.SparkEmrCICDPipeline.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.SparkEmrCICDPipelineProps">SparkEmrCICDPipelineProps</a>

the SparkCICDPipelineProps properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |

---

##### `toString` <a name="toString" id="aws-dsf.SparkEmrCICDPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.SparkEmrCICDPipeline.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.SparkEmrCICDPipeline.isConstruct"></a>

```typescript
import { SparkEmrCICDPipeline } from 'aws-dsf'

SparkEmrCICDPipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.SparkEmrCICDPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.pipelines.CodePipeline</code> | The CodePipeline created as part of the Spark CICD Pipeline. |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.property.repository">repository</a></code> | <code>aws-cdk-lib.aws_codecommit.Repository</code> | The CodeCommit repository created as part of the Spark CICD Pipeline. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.SparkEmrCICDPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="aws-dsf.SparkEmrCICDPipeline.property.pipeline"></a>

```typescript
public readonly pipeline: CodePipeline;
```

- *Type:* aws-cdk-lib.pipelines.CodePipeline

The CodePipeline created as part of the Spark CICD Pipeline.

---

##### `repository`<sup>Required</sup> <a name="repository" id="aws-dsf.SparkEmrCICDPipeline.property.repository"></a>

```typescript
public readonly repository: Repository;
```

- *Type:* aws-cdk-lib.aws_codecommit.Repository

The CodeCommit repository created as part of the Spark CICD Pipeline.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrCICDPipeline.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.SparkEmrCICDPipeline.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.SparkEmrCICDPipeline.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkEmrContainersRuntime <a name="SparkEmrContainersRuntime" id="aws-dsf.SparkEmrContainersRuntime"></a>

EmrEksCluster Construct packaging all the resources and configuration required to run Amazon EMR on EKS.

Usage example:

*Example*

```typescript
import { ManagedPolicy, PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';

const emrEks: dsf.SparkEmrContainersRuntime = dsf.SparkEmrContainersRuntime.getOrCreate(this, {
  eksAdminRoleArn: "arn:aws:iam::1234567890:role/EksAdmin",
  publicAccessCIDRs: ["1.1.1.1/32"], //change it with your own IP
});

const policy = new ManagedPolicy(this, 'testPolicy', {
  document: new PolicyDocument({
    statements: [
      new PolicyStatement({
        resources: ['arn:aws:s3:::your-bucket/key_name'],
        actions: ['s3:GetObject'],
      }),
    ],
 }),
});

const virtualCluster = emrEks.addEmrVirtualCluster(this, {
  name: "intra-day-jobs",
  createNamespace: true,
  eksNamespace: "data-platform",
});

const role = emrEks.createExecutionRole(this, 'execRole', policy, 'data-platform', 'execRole');

// EMR on EKS virtual cluster ID
new CfnOutput(this, 'VirtualClusterId', { value : virtualCluster.attr_id });
// Job config for each nodegroup
new CfnOutput(this, "CriticalConfig", { value : emrEks.criticalDefaultConfig });
new CfnOutput(this, "SharedConfig", { value : emrEks.sharedDefaultConfig});
// Execution role arn
new CfnOutput(this,'ExecRoleArn', { value : role.roleArn});
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.addEmrVirtualCluster">addEmrVirtualCluster</a></code> | Add a new Amazon EMR Virtual Cluster linked to Amazon EKS Cluster. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.addKarpenterProvisioner">addKarpenterProvisioner</a></code> | Apply the provided manifest and add the CDK dependency on EKS cluster. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.createExecutionRole">createExecutionRole</a></code> | Create and configure a new Amazon IAM Role usable as an execution role. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.uploadPodTemplate">uploadPodTemplate</a></code> | Upload podTemplates to the Amazon S3 location used by the cluster. |

---

##### `toString` <a name="toString" id="aws-dsf.SparkEmrContainersRuntime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addEmrVirtualCluster` <a name="addEmrVirtualCluster" id="aws-dsf.SparkEmrContainersRuntime.addEmrVirtualCluster"></a>

```typescript
public addEmrVirtualCluster(scope: Construct, options: EmrVirtualClusterOptions): CfnVirtualCluster
```

Add a new Amazon EMR Virtual Cluster linked to Amazon EKS Cluster.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.SparkEmrContainersRuntime.addEmrVirtualCluster.parameter.scope"></a>

- *Type:* constructs.Construct

of the stack where virtual cluster is deployed.

---

###### `options`<sup>Required</sup> <a name="options" id="aws-dsf.SparkEmrContainersRuntime.addEmrVirtualCluster.parameter.options"></a>

- *Type:* <a href="#aws-dsf.EmrVirtualClusterOptions">EmrVirtualClusterOptions</a>

the EmrVirtualClusterProps [properties]{@link EmrVirtualClusterProps }.

---

##### `addKarpenterProvisioner` <a name="addKarpenterProvisioner" id="aws-dsf.SparkEmrContainersRuntime.addKarpenterProvisioner"></a>

```typescript
public addKarpenterProvisioner(id: string, manifest: any): any
```

Apply the provided manifest and add the CDK dependency on EKS cluster.

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.SparkEmrContainersRuntime.addKarpenterProvisioner.parameter.id"></a>

- *Type:* string

the unique ID of the CDK resource.

---

###### `manifest`<sup>Required</sup> <a name="manifest" id="aws-dsf.SparkEmrContainersRuntime.addKarpenterProvisioner.parameter.manifest"></a>

- *Type:* any

The manifest to apply.

You can use the Utils class that offers method to read yaml file and load it as a manifest

---

##### `createExecutionRole` <a name="createExecutionRole" id="aws-dsf.SparkEmrContainersRuntime.createExecutionRole"></a>

```typescript
public createExecutionRole(scope: Construct, id: string, policy: IManagedPolicy, namespace: string, name: string): Role
```

Create and configure a new Amazon IAM Role usable as an execution role.

This method makes the created role assumed by the Amazon EKS cluster Open ID Connect provider.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.SparkEmrContainersRuntime.createExecutionRole.parameter.scope"></a>

- *Type:* constructs.Construct

of the IAM role.

---

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.SparkEmrContainersRuntime.createExecutionRole.parameter.id"></a>

- *Type:* string

of the CDK resource to be created, it should be unique across the stack.

---

###### `policy`<sup>Required</sup> <a name="policy" id="aws-dsf.SparkEmrContainersRuntime.createExecutionRole.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

the execution policy to attach to the role.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="aws-dsf.SparkEmrContainersRuntime.createExecutionRole.parameter.namespace"></a>

- *Type:* string

The namespace from which the role is going to be used.

MUST be the same as the namespace of the Virtual Cluster from which the job is submitted

---

###### `name`<sup>Required</sup> <a name="name" id="aws-dsf.SparkEmrContainersRuntime.createExecutionRole.parameter.name"></a>

- *Type:* string

Name to use for the role, required and is used to scope the iam role.

---

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.SparkEmrContainersRuntime.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

##### `uploadPodTemplate` <a name="uploadPodTemplate" id="aws-dsf.SparkEmrContainersRuntime.uploadPodTemplate"></a>

```typescript
public uploadPodTemplate(id: string, filePath: string): void
```

Upload podTemplates to the Amazon S3 location used by the cluster.

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.SparkEmrContainersRuntime.uploadPodTemplate.parameter.id"></a>

- *Type:* string

the unique ID of the CDK resource.

---

###### `filePath`<sup>Required</sup> <a name="filePath" id="aws-dsf.SparkEmrContainersRuntime.uploadPodTemplate.parameter.filePath"></a>

- *Type:* string

The local path of the yaml podTemplate files to upload.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.getOrCreate">getOrCreate</a></code> | Get an existing EmrEksCluster based on the cluster name property or create a new one only one EKS cluster can exist per stack. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.SparkEmrContainersRuntime.isConstruct"></a>

```typescript
import { SparkEmrContainersRuntime } from 'aws-dsf'

SparkEmrContainersRuntime.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.SparkEmrContainersRuntime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `getOrCreate` <a name="getOrCreate" id="aws-dsf.SparkEmrContainersRuntime.getOrCreate"></a>

```typescript
import { SparkEmrContainersRuntime } from 'aws-dsf'

SparkEmrContainersRuntime.getOrCreate(scope: Construct, props: SparkEmrContainersRuntimeProps)
```

Get an existing EmrEksCluster based on the cluster name property or create a new one only one EKS cluster can exist per stack.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.SparkEmrContainersRuntime.getOrCreate.parameter.scope"></a>

- *Type:* constructs.Construct

the CDK scope used to search or create the cluster.

---

###### `props`<sup>Required</sup> <a name="props" id="aws-dsf.SparkEmrContainersRuntime.getOrCreate.parameter.props"></a>

- *Type:* <a href="#aws-dsf.SparkEmrContainersRuntimeProps">SparkEmrContainersRuntimeProps</a>

the EmrEksClusterProps [properties]{@link EmrEksClusterProps } if created.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.assetBucket">assetBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.eksCluster">eksCluster</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.podTemplateLocation">podTemplateLocation</a></code> | <code>aws-cdk-lib.aws_s3.Location</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.criticalDefaultConfig">criticalDefaultConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.notebookDefaultConfig">notebookDefaultConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.sharedDefaultConfig">sharedDefaultConfig</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.SparkEmrContainersRuntime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `assetBucket`<sup>Required</sup> <a name="assetBucket" id="aws-dsf.SparkEmrContainersRuntime.property.assetBucket"></a>

```typescript
public readonly assetBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="aws-dsf.SparkEmrContainersRuntime.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `eksCluster`<sup>Required</sup> <a name="eksCluster" id="aws-dsf.SparkEmrContainersRuntime.property.eksCluster"></a>

```typescript
public readonly eksCluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster

---

##### `podTemplateLocation`<sup>Required</sup> <a name="podTemplateLocation" id="aws-dsf.SparkEmrContainersRuntime.property.podTemplateLocation"></a>

```typescript
public readonly podTemplateLocation: Location;
```

- *Type:* aws-cdk-lib.aws_s3.Location

---

##### `criticalDefaultConfig`<sup>Optional</sup> <a name="criticalDefaultConfig" id="aws-dsf.SparkEmrContainersRuntime.property.criticalDefaultConfig"></a>

```typescript
public readonly criticalDefaultConfig: string;
```

- *Type:* string

---

##### `notebookDefaultConfig`<sup>Optional</sup> <a name="notebookDefaultConfig" id="aws-dsf.SparkEmrContainersRuntime.property.notebookDefaultConfig"></a>

```typescript
public readonly notebookDefaultConfig: string;
```

- *Type:* string

---

##### `sharedDefaultConfig`<sup>Optional</sup> <a name="sharedDefaultConfig" id="aws-dsf.SparkEmrContainersRuntime.property.sharedDefaultConfig"></a>

```typescript
public readonly sharedDefaultConfig: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_CLUSTER_NAME">DEFAULT_CLUSTER_NAME</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_EKS_VERSION">DEFAULT_EKS_VERSION</a></code> | <code>aws-cdk-lib.aws_eks.KubernetesVersion</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_EMR_VERSION">DEFAULT_EMR_VERSION</a></code> | <code><a href="#aws-dsf.EmrRuntimeVersion">EmrRuntimeVersion</a></code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_KARPENTER_VERSION">DEFAULT_KARPENTER_VERSION</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_VPC_CIDR">DEFAULT_VPC_CIDR</a></code> | <code>string</code> | *No description.* |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.SparkEmrContainersRuntime.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.SparkEmrContainersRuntime.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

##### `DEFAULT_CLUSTER_NAME`<sup>Required</sup> <a name="DEFAULT_CLUSTER_NAME" id="aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_CLUSTER_NAME"></a>

```typescript
public readonly DEFAULT_CLUSTER_NAME: string;
```

- *Type:* string

---

##### `DEFAULT_EKS_VERSION`<sup>Required</sup> <a name="DEFAULT_EKS_VERSION" id="aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_EKS_VERSION"></a>

```typescript
public readonly DEFAULT_EKS_VERSION: KubernetesVersion;
```

- *Type:* aws-cdk-lib.aws_eks.KubernetesVersion

---

##### `DEFAULT_EMR_VERSION`<sup>Required</sup> <a name="DEFAULT_EMR_VERSION" id="aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_EMR_VERSION"></a>

```typescript
public readonly DEFAULT_EMR_VERSION: EmrRuntimeVersion;
```

- *Type:* <a href="#aws-dsf.EmrRuntimeVersion">EmrRuntimeVersion</a>

---

##### `DEFAULT_KARPENTER_VERSION`<sup>Required</sup> <a name="DEFAULT_KARPENTER_VERSION" id="aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_KARPENTER_VERSION"></a>

```typescript
public readonly DEFAULT_KARPENTER_VERSION: string;
```

- *Type:* string

---

##### `DEFAULT_VPC_CIDR`<sup>Required</sup> <a name="DEFAULT_VPC_CIDR" id="aws-dsf.SparkEmrContainersRuntime.property.DEFAULT_VPC_CIDR"></a>

```typescript
public readonly DEFAULT_VPC_CIDR: string;
```

- *Type:* string

---

### SparkEmrEksJob <a name="SparkEmrEksJob" id="aws-dsf.SparkEmrEksJob"></a>

A construct to run Spark Jobs using EMR on EKS.

Creates a Step Functions State Machine that orchestrates the Spark Job.

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-job](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-job)

*Example*

```typescript
import { JsonPath } from 'aws-cdk-lib/aws-stepfunctions';

const job = new dsf.SparkEmrEksJob(this, 'SparkJob', {
  jobConfig:{
    "Name": JsonPath.format('ge_profile-{}', JsonPath.uuid()),
    "VirtualClusterId": "virtualClusterId",
    "ExecutionRoleArn": "ROLE-ARN",
    "JobDriver": {
      "SparkSubmit": {
          "EntryPoint": "s3://S3-BUCKET/pi.py",
          "EntryPointArguments": [],
          "SparkSubmitParameters": "--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4"
      },
    }
  }
} as dsf.SparkEmrEksJobApiProps);

new cdk.CfnOutput(this, 'SparkJobStateMachine', {
  value: job.stateMachine!.stateMachineArn,
});
```


#### Initializers <a name="Initializers" id="aws-dsf.SparkEmrEksJob.Initializer"></a>

```typescript
import { SparkEmrEksJob } from 'aws-dsf'

new SparkEmrEksJob(scope: Construct, id: string, props: SparkEmrEksJobApiProps | SparkEmrEksJobProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrEksJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJob.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJob.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.SparkEmrEksJobApiProps">SparkEmrEksJobApiProps</a> \| <a href="#aws-dsf.SparkEmrEksJobProps">SparkEmrEksJobProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.SparkEmrEksJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.SparkEmrEksJob.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.SparkEmrEksJob.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.SparkEmrEksJobApiProps">SparkEmrEksJobApiProps</a> | <a href="#aws-dsf.SparkEmrEksJobProps">SparkEmrEksJobProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrEksJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.SparkEmrEksJob.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |

---

##### `toString` <a name="toString" id="aws-dsf.SparkEmrEksJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.SparkEmrEksJob.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrEksJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.SparkEmrEksJob.isConstruct"></a>

```typescript
import { SparkEmrEksJob } from 'aws-dsf'

SparkEmrEksJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.SparkEmrEksJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrEksJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.SparkEmrEksJob.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | Step Functions StateMachine created to orchestrate the Spark Job. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.SparkEmrEksJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stateMachine`<sup>Optional</sup> <a name="stateMachine" id="aws-dsf.SparkEmrEksJob.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

Step Functions StateMachine created to orchestrate the Spark Job.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrEksJob.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJob.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.SparkEmrEksJob.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.SparkEmrEksJob.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkEmrServerlessJob <a name="SparkEmrServerlessJob" id="aws-dsf.SparkEmrServerlessJob"></a>

A construct to run Spark Jobs using EMR Serverless.

Creates a State Machine that orchestrates the Spark Job.

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-job](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-job)

*Example*

```typescript
import { PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { JsonPath } from 'aws-cdk-lib/aws-stepfunctions';

const myFileSystemPolicy = new PolicyDocument({
  statements: [new PolicyStatement({
    actions: [
      's3:GetObject',
    ],
    resources: ['*'],
  })],
});


const myExecutionRole = dsf.SparkEmrServerlessRuntime.createExecutionRole(this, 'execRole1', myFileSystemPolicy);
const applicationId = "APPLICATION_ID";
const job = new dsf.SparkEmrServerlessJob(this, 'SparkJob', {
  jobConfig:{
    "Name": JsonPath.format('ge_profile-{}', JsonPath.uuid()),
    "ApplicationId": applicationId,
    "ExecutionRoleArn": myExecutionRole.roleArn,
    "JobDriver": {
      "SparkSubmit": {
          "EntryPoint": "s3://S3-BUCKET/pi.py",
          "EntryPointArguments": [],
          "SparkSubmitParameters": "--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4"
      },
    }
  }
} as dsf.SparkEmrServerlessJobApiProps);

new cdk.CfnOutput(this, 'SparkJobStateMachine', {
  value: job.stateMachine!.stateMachineArn,
});
```


#### Initializers <a name="Initializers" id="aws-dsf.SparkEmrServerlessJob.Initializer"></a>

```typescript
import { SparkEmrServerlessJob } from 'aws-dsf'

new SparkEmrServerlessJob(scope: Construct, id: string, props: SparkEmrServerlessJobApiProps | SparkEmrServerlessJobProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.SparkEmrServerlessJobApiProps">SparkEmrServerlessJobApiProps</a> \| <a href="#aws-dsf.SparkEmrServerlessJobProps">SparkEmrServerlessJobProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.SparkEmrServerlessJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.SparkEmrServerlessJob.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.SparkEmrServerlessJob.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.SparkEmrServerlessJobApiProps">SparkEmrServerlessJobApiProps</a> | <a href="#aws-dsf.SparkEmrServerlessJobProps">SparkEmrServerlessJobProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |

---

##### `toString` <a name="toString" id="aws-dsf.SparkEmrServerlessJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.SparkEmrServerlessJob.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.SparkEmrServerlessJob.isConstruct"></a>

```typescript
import { SparkEmrServerlessJob } from 'aws-dsf'

SparkEmrServerlessJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.SparkEmrServerlessJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | Step Functions StateMachine created to orchestrate the Spark Job. |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.property.sparkJobExecutionRole">sparkJobExecutionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Spark Job execution role. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.SparkEmrServerlessJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stateMachine`<sup>Optional</sup> <a name="stateMachine" id="aws-dsf.SparkEmrServerlessJob.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

Step Functions StateMachine created to orchestrate the Spark Job.

---

##### `sparkJobExecutionRole`<sup>Optional</sup> <a name="sparkJobExecutionRole" id="aws-dsf.SparkEmrServerlessJob.property.sparkJobExecutionRole"></a>

```typescript
public readonly sparkJobExecutionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Spark Job execution role.

Use this property to add additional IAM permissions if necessary.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJob.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.SparkEmrServerlessJob.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.SparkEmrServerlessJob.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkEmrServerlessRuntime <a name="SparkEmrServerlessRuntime" id="aws-dsf.SparkEmrServerlessRuntime"></a>

A construct to create a Spark EMR Serverless Application, along with methods to create IAM roles having the least privilege.

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-emr-serverless-runtime](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-emr-serverless-runtime)

#### Initializers <a name="Initializers" id="aws-dsf.SparkEmrServerlessRuntime.Initializer"></a>

```typescript
import { SparkEmrServerlessRuntime } from 'aws-dsf'

new SparkEmrServerlessRuntime(scope: Construct, id: string, props: SparkEmrServerlessRuntimeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps">SparkEmrServerlessRuntimeProps</a></code> | {@link SparkEmrServerlessRuntimeProps}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.SparkEmrServerlessRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.SparkEmrServerlessRuntime.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.SparkEmrServerlessRuntime.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.SparkEmrServerlessRuntimeProps">SparkEmrServerlessRuntimeProps</a>

{@link SparkEmrServerlessRuntimeProps}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.grantStartExecution">grantStartExecution</a></code> | A method which will grant an IAM Role the right to start and monitor a job. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |

---

##### `toString` <a name="toString" id="aws-dsf.SparkEmrServerlessRuntime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `grantStartExecution` <a name="grantStartExecution" id="aws-dsf.SparkEmrServerlessRuntime.grantStartExecution"></a>

```typescript
public grantStartExecution(startJobRole: IRole, executionRoleArn: string): void
```

A method which will grant an IAM Role the right to start and monitor a job.

The method will also attach an iam:PassRole permission to limited to the IAM Job Execution roles passed.
The excution role will be able to submit job to the EMR Serverless application created by the construct.

###### `startJobRole`<sup>Required</sup> <a name="startJobRole" id="aws-dsf.SparkEmrServerlessRuntime.grantStartExecution.parameter.startJobRole"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

the role that will call the start job api and which need to have the iam:PassRole permission.

---

###### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="aws-dsf.SparkEmrServerlessRuntime.grantStartExecution.parameter.executionRoleArn"></a>

- *Type:* string

the role use by EMR Serverless to access resources during the job execution.

---

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.SparkEmrServerlessRuntime.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.createExecutionRole">createExecutionRole</a></code> | A static method which will create an execution IAM role that can be assumed by EMR Serverless The method returns the role it creates. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.grantStartJobExecution">grantStartJobExecution</a></code> | A static method which will grant an IAM Role the right to start and monitor a job. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.SparkEmrServerlessRuntime.isConstruct"></a>

```typescript
import { SparkEmrServerlessRuntime } from 'aws-dsf'

SparkEmrServerlessRuntime.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.SparkEmrServerlessRuntime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `createExecutionRole` <a name="createExecutionRole" id="aws-dsf.SparkEmrServerlessRuntime.createExecutionRole"></a>

```typescript
import { SparkEmrServerlessRuntime } from 'aws-dsf'

SparkEmrServerlessRuntime.createExecutionRole(scope: Construct, id: string, executionRolePolicyDocument?: PolicyDocument, iamPolicyName?: string)
```

A static method which will create an execution IAM role that can be assumed by EMR Serverless The method returns the role it creates.

If no `executionRolePolicyDocument` or `iamPolicyName`
The method will return a role with only a trust policy to EMR Servereless service principal.
You can use this role then to grant access to any resources you control.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.SparkEmrServerlessRuntime.createExecutionRole.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to create the role.

---

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.SparkEmrServerlessRuntime.createExecutionRole.parameter.id"></a>

- *Type:* string

passed to the IAM Role construct object.

---

###### `executionRolePolicyDocument`<sup>Optional</sup> <a name="executionRolePolicyDocument" id="aws-dsf.SparkEmrServerlessRuntime.createExecutionRole.parameter.executionRolePolicyDocument"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

the inline policy document to attach to the role.

These are IAM policies needed by the job.
This parameter is mutually execlusive with iamPolicyName.

---

###### `iamPolicyName`<sup>Optional</sup> <a name="iamPolicyName" id="aws-dsf.SparkEmrServerlessRuntime.createExecutionRole.parameter.iamPolicyName"></a>

- *Type:* string

the IAM policy name to attach to the role, this is mutually execlusive with executionRolePolicyDocument.

---

##### `grantStartJobExecution` <a name="grantStartJobExecution" id="aws-dsf.SparkEmrServerlessRuntime.grantStartJobExecution"></a>

```typescript
import { SparkEmrServerlessRuntime } from 'aws-dsf'

SparkEmrServerlessRuntime.grantStartJobExecution(startJobRole: IRole, executionRoleArn: string[], applicationArns: string[])
```

A static method which will grant an IAM Role the right to start and monitor a job.

The method will also attach an iam:PassRole permission limited to the IAM Job Execution roles passed

###### `startJobRole`<sup>Required</sup> <a name="startJobRole" id="aws-dsf.SparkEmrServerlessRuntime.grantStartJobExecution.parameter.startJobRole"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

the role that will call the start job api and which needs to have the iam:PassRole permission.

---

###### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="aws-dsf.SparkEmrServerlessRuntime.grantStartJobExecution.parameter.executionRoleArn"></a>

- *Type:* string[]

the role used by EMR Serverless to access resources during the job execution.

---

###### `applicationArns`<sup>Required</sup> <a name="applicationArns" id="aws-dsf.SparkEmrServerlessRuntime.grantStartJobExecution.parameter.applicationArns"></a>

- *Type:* string[]

the EMR Serverless aplication ARN, this is used by the method to limit the EMR Serverless applications the role can submit job to.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.property.applicationArn">applicationArn</a></code> | <code>string</code> | The ARN of the EMR Serverless application, such as arn:aws:emr-serverless:us-east-1:123456789012:application/ab4rp1abcs8xz47n3x0example This is used to expose the ARN of the application to the user. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.property.applicationId">applicationId</a></code> | <code>string</code> | The id of the EMR Serverless application, such as ab4rp1abcs8xz47n3x0example This is used to expose the id of the application to the user. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.property.emrApplicationSecurityGroup">emrApplicationSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | If no VPC is provided, one is created by default along with a security group attached to the EMR Serverless Application This attribute is used to expose the security group, if you provide your own security group through the {@link SparkEmrServerlessRuntimeProps} the attribute will be `undefined`. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.property.s3GatewayVpcEndpoint">s3GatewayVpcEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.GatewayVpcEndpoint</code> | If no VPC is provided, one is created by default This attribute is used to expose the Gateway Vpc Endpoint for Amazon S3 The attribute will be undefined if you provided the `networkConfiguration` through the {@link SparkEmrServerlessRuntimeProps}. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | If no VPC is provided, one is created by default This attribute is used to expose the VPC, if you provide your own VPC through the {@link SparkEmrServerlessRuntimeProps} the attribute will be `undefined`. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.SparkEmrServerlessRuntime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="aws-dsf.SparkEmrServerlessRuntime.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

The ARN of the EMR Serverless application, such as arn:aws:emr-serverless:us-east-1:123456789012:application/ab4rp1abcs8xz47n3x0example This is used to expose the ARN of the application to the user.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="aws-dsf.SparkEmrServerlessRuntime.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The id of the EMR Serverless application, such as ab4rp1abcs8xz47n3x0example This is used to expose the id of the application to the user.

---

##### `emrApplicationSecurityGroup`<sup>Optional</sup> <a name="emrApplicationSecurityGroup" id="aws-dsf.SparkEmrServerlessRuntime.property.emrApplicationSecurityGroup"></a>

```typescript
public readonly emrApplicationSecurityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

If no VPC is provided, one is created by default along with a security group attached to the EMR Serverless Application This attribute is used to expose the security group, if you provide your own security group through the {@link SparkEmrServerlessRuntimeProps} the attribute will be `undefined`.

---

##### `s3GatewayVpcEndpoint`<sup>Optional</sup> <a name="s3GatewayVpcEndpoint" id="aws-dsf.SparkEmrServerlessRuntime.property.s3GatewayVpcEndpoint"></a>

```typescript
public readonly s3GatewayVpcEndpoint: GatewayVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.GatewayVpcEndpoint

If no VPC is provided, one is created by default This attribute is used to expose the Gateway Vpc Endpoint for Amazon S3 The attribute will be undefined if you provided the `networkConfiguration` through the {@link SparkEmrServerlessRuntimeProps}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="aws-dsf.SparkEmrServerlessRuntime.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

If no VPC is provided, one is created by default This attribute is used to expose the VPC, if you provide your own VPC through the {@link SparkEmrServerlessRuntimeProps} the attribute will be `undefined`.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntime.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.SparkEmrServerlessRuntime.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.SparkEmrServerlessRuntime.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkJob <a name="SparkJob" id="aws-dsf.SparkJob"></a>

A base construct to run Spark Jobs.

Creates an AWS Step Functions State Machine that orchestrates the Spark Job.

> [https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-job

Available implementations:
* {@link SparkEmrServerlessJob } for Emr Serverless implementation
* {@link SparkEmrEksJob } for EMR On EKS implementation](https://awslabs.github.io/aws-data-solutions-framework/docs/constructs/library/spark-job

Available implementations:
* {@link SparkEmrServerlessJob } for Emr Serverless implementation
* {@link SparkEmrEksJob } for EMR On EKS implementation)

#### Initializers <a name="Initializers" id="aws-dsf.SparkJob.Initializer"></a>

```typescript
import { SparkJob } from 'aws-dsf'

new SparkJob(scope: Construct, id: string, trackingTag: string, props: SparkJobProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#aws-dsf.SparkJob.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#aws-dsf.SparkJob.Initializer.parameter.trackingTag">trackingTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkJob.Initializer.parameter.props">props</a></code> | <code><a href="#aws-dsf.SparkJobProps">SparkJobProps</a></code> | the SparkJobProps properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.SparkJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-dsf.SparkJob.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `trackingTag`<sup>Required</sup> <a name="trackingTag" id="aws-dsf.SparkJob.Initializer.parameter.trackingTag"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-dsf.SparkJob.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-dsf.SparkJobProps">SparkJobProps</a>

the SparkJobProps properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-dsf.SparkJob.retrieveVersion">retrieveVersion</a></code> | Retrieve ADSF package.json version. |

---

##### `toString` <a name="toString" id="aws-dsf.SparkJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="aws-dsf.SparkJob.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve ADSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-dsf.SparkJob.isConstruct"></a>

```typescript
import { SparkJob } from 'aws-dsf'

SparkJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-dsf.SparkJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-dsf.SparkJob.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | Step Functions StateMachine created to orchestrate the Spark Job. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-dsf.SparkJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stateMachine`<sup>Optional</sup> <a name="stateMachine" id="aws-dsf.SparkJob.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

Step Functions StateMachine created to orchestrate the Spark Job.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkJob.property.ADSF_OWNED_TAG">ADSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkJob.property.ADSF_TRACKING_CODE">ADSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `ADSF_OWNED_TAG`<sup>Required</sup> <a name="ADSF_OWNED_TAG" id="aws-dsf.SparkJob.property.ADSF_OWNED_TAG"></a>

```typescript
public readonly ADSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `ADSF_TRACKING_CODE`<sup>Required</sup> <a name="ADSF_TRACKING_CODE" id="aws-dsf.SparkJob.property.ADSF_TRACKING_CODE"></a>

```typescript
public readonly ADSF_TRACKING_CODE: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AnalyticsBucketProps <a name="AnalyticsBucketProps" id="aws-dsf.AnalyticsBucketProps"></a>

Properties of the {@link AnalyticsBucket } construct.

#### Initializer <a name="Initializer" id="aws-dsf.AnalyticsBucketProps.Initializer"></a>

```typescript
import { AnalyticsBucketProps } from 'aws-dsf'

const analyticsBucketProps: AnalyticsBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for bucket encryption. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.accessControl">accessControl</a></code> | <code>aws-cdk-lib.aws_s3.BucketAccessControl</code> | Specifies a canned ACL that grants predefined permissions to the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.autoDeleteObjects">autoDeleteObjects</a></code> | <code>boolean</code> | Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.blockPublicAccess">blockPublicAccess</a></code> | <code>aws-cdk-lib.aws_s3.BlockPublicAccess</code> | The block public access configuration of this bucket. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean</code> | Whether Amazon S3 should use its own intermediary key to generate data keys. Only relevant when using KMS for encryption. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | Physical name of this bucket. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.cors">cors</a></code> | <code>aws-cdk-lib.aws_s3.CorsRule[]</code> | The CORS configuration of this bucket. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.enforceSSL">enforceSSL</a></code> | <code>boolean</code> | Enforces SSL for requests. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.eventBridgeEnabled">eventBridgeEnabled</a></code> | <code>boolean</code> | Whether this bucket should send notifications to Amazon EventBridge or not. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.intelligentTieringConfigurations">intelligentTieringConfigurations</a></code> | <code>aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]</code> | Inteligent Tiering Configurations. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.inventories">inventories</a></code> | <code>aws-cdk-lib.aws_s3.Inventory[]</code> | The inventory configuration of the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Rules that define how Amazon S3 manages objects during their lifetime. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.metrics">metrics</a></code> | <code>aws-cdk-lib.aws_s3.BucketMetrics[]</code> | The metrics configuration of this bucket. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.notificationsHandlerRole">notificationsHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role to be used by the notifications handler. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.objectLockDefaultRetention">objectLockDefaultRetention</a></code> | <code>aws-cdk-lib.aws_s3.ObjectLockRetention</code> | The default retention mode and rules for S3 Object Lock. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean</code> | Enable object lock on the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.objectOwnership">objectOwnership</a></code> | <code>aws-cdk-lib.aws_s3.ObjectOwnership</code> | The objectOwnership of the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.publicReadAccess">publicReadAccess</a></code> | <code>boolean</code> | Grants public read access to all objects in the bucket. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.serverAccessLogsBucket">serverAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Destination bucket for the server access logs. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.serverAccessLogsPrefix">serverAccessLogsPrefix</a></code> | <code>string</code> | Optional log file prefix to use for the bucket's access logs. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.transferAcceleration">transferAcceleration</a></code> | <code>boolean</code> | Whether this bucket should have transfer acceleration turned on or not. |
| <code><a href="#aws-dsf.AnalyticsBucketProps.property.versioned">versioned</a></code> | <code>boolean</code> | Whether this bucket should have versioning turned on or not. |

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="aws-dsf.AnalyticsBucketProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If `encryption` is set to `KMS` and this property is undefined, a new KMS key will be created and associated with this bucket.

External KMS key to use for bucket encryption.

The `encryption` property must be either not specified or set to `KMS` or `DSSE`.
An error will be emitted if `encryption` is set to `UNENCRYPTED` or `S3_MANAGED`.

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="aws-dsf.AnalyticsBucketProps.property.accessControl"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* aws-cdk-lib.aws_s3.BucketAccessControl
- *Default:* BucketAccessControl.PRIVATE

Specifies a canned ACL that grants predefined permissions to the bucket.

---

##### `autoDeleteObjects`<sup>Optional</sup> <a name="autoDeleteObjects" id="aws-dsf.AnalyticsBucketProps.property.autoDeleteObjects"></a>

```typescript
public readonly autoDeleteObjects: boolean;
```

- *Type:* boolean
- *Default:* false

Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.

**Warning** if you have deployed a bucket with `autoDeleteObjects: true`,
switching this to `false` in a CDK version *before* `1.126.0` will lead to
all objects in the bucket being deleted. Be sure to update your bucket resources
by deploying with CDK version `1.126.0` or later **before** switching this value to `false`.

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="blockPublicAccess" id="aws-dsf.AnalyticsBucketProps.property.blockPublicAccess"></a>

```typescript
public readonly blockPublicAccess: BlockPublicAccess;
```

- *Type:* aws-cdk-lib.aws_s3.BlockPublicAccess
- *Default:* CloudFormation defaults will apply. New buckets and objects don't allow public access, but users can modify bucket policies or object permissions to allow public access

The block public access configuration of this bucket.

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="aws-dsf.AnalyticsBucketProps.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether Amazon S3 should use its own intermediary key to generate data keys. Only relevant when using KMS for encryption.

If not enabled, every object GET and PUT will cause an API call to KMS (with the
  attendant cost implications of that).
- If enabled, S3 will use its own time-limited key instead.

Only relevant, when Encryption is set to `BucketEncryption.KMS` or `BucketEncryption.KMS_MANAGED`.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="aws-dsf.AnalyticsBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* `analytics-<AWS_ACCOUNT_ID>-<AWS_REGION>-<UNIQUE_ID>`

Physical name of this bucket.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="aws-dsf.AnalyticsBucketProps.property.cors"></a>

```typescript
public readonly cors: CorsRule[];
```

- *Type:* aws-cdk-lib.aws_s3.CorsRule[]
- *Default:* No CORS configuration.

The CORS configuration of this bucket.

---

##### `enforceSSL`<sup>Optional</sup> <a name="enforceSSL" id="aws-dsf.AnalyticsBucketProps.property.enforceSSL"></a>

```typescript
public readonly enforceSSL: boolean;
```

- *Type:* boolean
- *Default:* false

Enforces SSL for requests.

S3.5 of the AWS Foundational Security Best Practices Regarding S3.

---

##### `eventBridgeEnabled`<sup>Optional</sup> <a name="eventBridgeEnabled" id="aws-dsf.AnalyticsBucketProps.property.eventBridgeEnabled"></a>

```typescript
public readonly eventBridgeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should send notifications to Amazon EventBridge or not.

---

##### `intelligentTieringConfigurations`<sup>Optional</sup> <a name="intelligentTieringConfigurations" id="aws-dsf.AnalyticsBucketProps.property.intelligentTieringConfigurations"></a>

```typescript
public readonly intelligentTieringConfigurations: IntelligentTieringConfiguration[];
```

- *Type:* aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]
- *Default:* No Intelligent Tiiering Configurations.

Inteligent Tiering Configurations.

---

##### `inventories`<sup>Optional</sup> <a name="inventories" id="aws-dsf.AnalyticsBucketProps.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* aws-cdk-lib.aws_s3.Inventory[]
- *Default:* No inventory configuration

The inventory configuration of the bucket.

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="aws-dsf.AnalyticsBucketProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]
- *Default:* No lifecycle rules.

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="aws-dsf.AnalyticsBucketProps.property.metrics"></a>

```typescript
public readonly metrics: BucketMetrics[];
```

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics[]
- *Default:* No metrics configuration.

The metrics configuration of this bucket.

---

##### `notificationsHandlerRole`<sup>Optional</sup> <a name="notificationsHandlerRole" id="aws-dsf.AnalyticsBucketProps.property.notificationsHandlerRole"></a>

```typescript
public readonly notificationsHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role will be created.

The role to be used by the notifications handler.

---

##### `objectLockDefaultRetention`<sup>Optional</sup> <a name="objectLockDefaultRetention" id="aws-dsf.AnalyticsBucketProps.property.objectLockDefaultRetention"></a>

```typescript
public readonly objectLockDefaultRetention: ObjectLockRetention;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectLockRetention
- *Default:* no default retention period

The default retention mode and rules for S3 Object Lock.

Default retention can be configured after a bucket is created if the bucket already
has object lock enabled. Enabling object lock for existing buckets is not supported.

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="aws-dsf.AnalyticsBucketProps.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean;
```

- *Type:* boolean
- *Default:* false, unless objectLockDefaultRetention is set (then, true)

Enable object lock on the bucket.

Enabling object lock for existing buckets is not supported. Object lock must be
enabled when the bucket is created.

---

##### `objectOwnership`<sup>Optional</sup> <a name="objectOwnership" id="aws-dsf.AnalyticsBucketProps.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: ObjectOwnership;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectOwnership
- *Default:* No ObjectOwnership configuration, uploading account will own the object.

The objectOwnership of the bucket.

---

##### `publicReadAccess`<sup>Optional</sup> <a name="publicReadAccess" id="aws-dsf.AnalyticsBucketProps.property.publicReadAccess"></a>

```typescript
public readonly publicReadAccess: boolean;
```

- *Type:* boolean
- *Default:* false

Grants public read access to all objects in the bucket.

Similar to calling `bucket.grantPublicAccess()`

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.AnalyticsBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

Policy to apply when the bucket is removed from this stack.

* @default - RETAIN (The bucket will be orphaned).

---

##### `serverAccessLogsBucket`<sup>Optional</sup> <a name="serverAccessLogsBucket" id="aws-dsf.AnalyticsBucketProps.property.serverAccessLogsBucket"></a>

```typescript
public readonly serverAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* If "serverAccessLogsPrefix" undefined - access logs disabled, otherwise - log to current bucket.

Destination bucket for the server access logs.

---

##### `serverAccessLogsPrefix`<sup>Optional</sup> <a name="serverAccessLogsPrefix" id="aws-dsf.AnalyticsBucketProps.property.serverAccessLogsPrefix"></a>

```typescript
public readonly serverAccessLogsPrefix: string;
```

- *Type:* string
- *Default:* No log file prefix

Optional log file prefix to use for the bucket's access logs.

If defined without "serverAccessLogsBucket", enables access logs to current bucket with this prefix.

---

##### `transferAcceleration`<sup>Optional</sup> <a name="transferAcceleration" id="aws-dsf.AnalyticsBucketProps.property.transferAcceleration"></a>

```typescript
public readonly transferAcceleration: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should have transfer acceleration turned on or not.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="aws-dsf.AnalyticsBucketProps.property.versioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* boolean
- *Default:* false (unless object lock is enabled, then true)

Whether this bucket should have versioning turned on or not.

---

### ApplicationStageProps <a name="ApplicationStageProps" id="aws-dsf.ApplicationStageProps"></a>

Properties for SparkCICDStage class.

#### Initializer <a name="Initializer" id="aws-dsf.ApplicationStageProps.Initializer"></a>

```typescript
import { ApplicationStageProps } from 'aws-dsf'

const applicationStageProps: ApplicationStageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.ApplicationStageProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | Default AWS environment (account/region) for `Stack`s in this `Stage`. |
| <code><a href="#aws-dsf.ApplicationStageProps.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which to emit synthesized artifacts. |
| <code><a href="#aws-dsf.ApplicationStageProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#aws-dsf.ApplicationStageProps.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#aws-dsf.ApplicationStageProps.property.stageName">stageName</a></code> | <code>string</code> | Name of this stage. |
| <code><a href="#aws-dsf.ApplicationStageProps.property.applicationStackFactory">applicationStackFactory</a></code> | <code><a href="#aws-dsf.ApplicationStackFactory">ApplicationStackFactory</a></code> | The application Stack to deploy in the different CDK Pipelines Stages. |
| <code><a href="#aws-dsf.ApplicationStageProps.property.stage">stage</a></code> | <code><a href="#aws-dsf.CICDStage">CICDStage</a></code> | The Stage to deploy the SparkCICDStack in. |
| <code><a href="#aws-dsf.ApplicationStageProps.property.outputsEnv">outputsEnv</a></code> | <code>{[ key: string ]: string}</code> | The list of values to create CfnOutputs. |

---

##### `env`<sup>Optional</sup> <a name="env" id="aws-dsf.ApplicationStageProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environments should be configured on the `Stack`s.

Default AWS environment (account/region) for `Stack`s in this `Stage`.

Stacks defined inside this `Stage` with either `region` or `account` missing
from its env will use the corresponding field given here.

If either `region` or `account`is is not configured for `Stack` (either on
the `Stack` itself or on the containing `Stage`), the Stack will be
*environment-agnostic*.

Environment-agnostic stacks can be deployed to any environment, may not be
able to take advantage of all features of the CDK. For example, they will
not be able to use environmental context lookups, will not automatically
translate Service Principals to the right format based on the environment's
AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this Stage to
new Stage(app, 'Stage1', {
  env: { account: '123456789012', region: 'us-east-1' },
});

// Use the CLI's current credentials to determine the target environment
new Stage(app, 'Stage2', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
```


##### `outdir`<sup>Optional</sup> <a name="outdir" id="aws-dsf.ApplicationStageProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.

The output directory into which to emit synthesized artifacts.

Can only be specified if this stage is the root stage (the app). If this is
specified and this stage is nested within another stage, an error will be
thrown.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="aws-dsf.ApplicationStageProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `policyValidationBeta1`<sup>Optional</sup> <a name="policyValidationBeta1" id="aws-dsf.ApplicationStageProps.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="aws-dsf.ApplicationStageProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string
- *Default:* Derived from the id.

Name of this stage.

---

##### `applicationStackFactory`<sup>Required</sup> <a name="applicationStackFactory" id="aws-dsf.ApplicationStageProps.property.applicationStackFactory"></a>

```typescript
public readonly applicationStackFactory: ApplicationStackFactory;
```

- *Type:* <a href="#aws-dsf.ApplicationStackFactory">ApplicationStackFactory</a>

The application Stack to deploy in the different CDK Pipelines Stages.

---

##### `stage`<sup>Required</sup> <a name="stage" id="aws-dsf.ApplicationStageProps.property.stage"></a>

```typescript
public readonly stage: CICDStage;
```

- *Type:* <a href="#aws-dsf.CICDStage">CICDStage</a>
- *Default:* No stage is passed to the application stack

The Stage to deploy the SparkCICDStack in.

---

##### `outputsEnv`<sup>Optional</sup> <a name="outputsEnv" id="aws-dsf.ApplicationStageProps.property.outputsEnv"></a>

```typescript
public readonly outputsEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No CfnOutputs are created

The list of values to create CfnOutputs.

---

### DataCatalogDatabaseProps <a name="DataCatalogDatabaseProps" id="aws-dsf.DataCatalogDatabaseProps"></a>

The Database catalog properties.

#### Initializer <a name="Initializer" id="aws-dsf.DataCatalogDatabaseProps.Initializer"></a>

```typescript
import { DataCatalogDatabaseProps } from 'aws-dsf'

const dataCatalogDatabaseProps: DataCatalogDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataCatalogDatabaseProps.property.locationBucket">locationBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | S3 bucket where data is stored. |
| <code><a href="#aws-dsf.DataCatalogDatabaseProps.property.locationPrefix">locationPrefix</a></code> | <code>string</code> | Top level location wwhere table data is stored. |
| <code><a href="#aws-dsf.DataCatalogDatabaseProps.property.name">name</a></code> | <code>string</code> | Database name. |
| <code><a href="#aws-dsf.DataCatalogDatabaseProps.property.autoCrawl">autoCrawl</a></code> | <code>boolean</code> | When enabled, this automatically creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter. |
| <code><a href="#aws-dsf.DataCatalogDatabaseProps.property.autoCrawlSchedule">autoCrawlSchedule</a></code> | <code>aws-cdk-lib.aws_glue.CfnCrawler.ScheduleProperty</code> | The schedule when the Crawler would run. |
| <code><a href="#aws-dsf.DataCatalogDatabaseProps.property.crawlerLogEncryptionKey">crawlerLogEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | Encryption key used for Crawler logs. |
| <code><a href="#aws-dsf.DataCatalogDatabaseProps.property.crawlerTableLevelDepth">crawlerTableLevelDepth</a></code> | <code>number</code> | Directory depth where the table folders are located. |
| <code><a href="#aws-dsf.DataCatalogDatabaseProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |

---

##### `locationBucket`<sup>Required</sup> <a name="locationBucket" id="aws-dsf.DataCatalogDatabaseProps.property.locationBucket"></a>

```typescript
public readonly locationBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

S3 bucket where data is stored.

---

##### `locationPrefix`<sup>Required</sup> <a name="locationPrefix" id="aws-dsf.DataCatalogDatabaseProps.property.locationPrefix"></a>

```typescript
public readonly locationPrefix: string;
```

- *Type:* string

Top level location wwhere table data is stored.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-dsf.DataCatalogDatabaseProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Database name.

Construct would add a randomize suffix as part of the name to prevent name collisions.

---

##### `autoCrawl`<sup>Optional</sup> <a name="autoCrawl" id="aws-dsf.DataCatalogDatabaseProps.property.autoCrawl"></a>

```typescript
public readonly autoCrawl: boolean;
```

- *Type:* boolean
- *Default:* True

When enabled, this automatically creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter.

---

##### `autoCrawlSchedule`<sup>Optional</sup> <a name="autoCrawlSchedule" id="aws-dsf.DataCatalogDatabaseProps.property.autoCrawlSchedule"></a>

```typescript
public readonly autoCrawlSchedule: ScheduleProperty;
```

- *Type:* aws-cdk-lib.aws_glue.CfnCrawler.ScheduleProperty
- *Default:* `cron(1 0 * * ? *)`

The schedule when the Crawler would run.

Default is once a day at 00:01h.

---

##### `crawlerLogEncryptionKey`<sup>Optional</sup> <a name="crawlerLogEncryptionKey" id="aws-dsf.DataCatalogDatabaseProps.property.crawlerLogEncryptionKey"></a>

```typescript
public readonly crawlerLogEncryptionKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key
- *Default:* Create a new key if none is provided

Encryption key used for Crawler logs.

---

##### `crawlerTableLevelDepth`<sup>Optional</sup> <a name="crawlerTableLevelDepth" id="aws-dsf.DataCatalogDatabaseProps.property.crawlerTableLevelDepth"></a>

```typescript
public readonly crawlerTableLevelDepth: number;
```

- *Type:* number
- *Default:* calculated based on `locationPrefix`

Directory depth where the table folders are located.

This helps the crawler understand the layout of the folders in S3.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.DataCatalogDatabaseProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

Policy to apply when the bucket is removed from this stack.

* @default - RETAIN (The bucket will be orphaned).

---

### DataLakeCatalogProps <a name="DataLakeCatalogProps" id="aws-dsf.DataLakeCatalogProps"></a>

Properties for the DataLakeCatalog Construct.

#### Initializer <a name="Initializer" id="aws-dsf.DataLakeCatalogProps.Initializer"></a>

```typescript
import { DataLakeCatalogProps } from 'aws-dsf'

const dataLakeCatalogProps: DataLakeCatalogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataLakeCatalogProps.property.dataLakeStorage">dataLakeStorage</a></code> | <code><a href="#aws-dsf.DataLakeStorage">DataLakeStorage</a></code> | Location of data lake files. |
| <code><a href="#aws-dsf.DataLakeCatalogProps.property.autoCrawl">autoCrawl</a></code> | <code>boolean</code> | When enabled, this automatically creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter. |
| <code><a href="#aws-dsf.DataLakeCatalogProps.property.autoCrawlSchedule">autoCrawlSchedule</a></code> | <code>aws-cdk-lib.aws_glue.CfnCrawler.ScheduleProperty</code> | The schedule when the Crawler would run. |
| <code><a href="#aws-dsf.DataLakeCatalogProps.property.crawlerLogEncryptionKey">crawlerLogEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | Encryption key used for Crawler logs. |
| <code><a href="#aws-dsf.DataLakeCatalogProps.property.crawlerTableLevelDepth">crawlerTableLevelDepth</a></code> | <code>number</code> | Directory depth where the table folders are located. |
| <code><a href="#aws-dsf.DataLakeCatalogProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database in the Glue Data Catalog. |
| <code><a href="#aws-dsf.DataLakeCatalogProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |

---

##### `dataLakeStorage`<sup>Required</sup> <a name="dataLakeStorage" id="aws-dsf.DataLakeCatalogProps.property.dataLakeStorage"></a>

```typescript
public readonly dataLakeStorage: DataLakeStorage;
```

- *Type:* <a href="#aws-dsf.DataLakeStorage">DataLakeStorage</a>

Location of data lake files.

---

##### `autoCrawl`<sup>Optional</sup> <a name="autoCrawl" id="aws-dsf.DataLakeCatalogProps.property.autoCrawl"></a>

```typescript
public readonly autoCrawl: boolean;
```

- *Type:* boolean
- *Default:* True

When enabled, this automatically creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter.

---

##### `autoCrawlSchedule`<sup>Optional</sup> <a name="autoCrawlSchedule" id="aws-dsf.DataLakeCatalogProps.property.autoCrawlSchedule"></a>

```typescript
public readonly autoCrawlSchedule: ScheduleProperty;
```

- *Type:* aws-cdk-lib.aws_glue.CfnCrawler.ScheduleProperty
- *Default:* `cron(1 0 * * ? *)`

The schedule when the Crawler would run.

Default is once a day at 00:01h.

---

##### `crawlerLogEncryptionKey`<sup>Optional</sup> <a name="crawlerLogEncryptionKey" id="aws-dsf.DataLakeCatalogProps.property.crawlerLogEncryptionKey"></a>

```typescript
public readonly crawlerLogEncryptionKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key
- *Default:* Create a new key if none is provided

Encryption key used for Crawler logs.

---

##### `crawlerTableLevelDepth`<sup>Optional</sup> <a name="crawlerTableLevelDepth" id="aws-dsf.DataLakeCatalogProps.property.crawlerTableLevelDepth"></a>

```typescript
public readonly crawlerTableLevelDepth: number;
```

- *Type:* number
- *Default:* calculated based on `locationPrefix`

Directory depth where the table folders are located.

This helps the crawler understand the layout of the folders in S3.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="aws-dsf.DataLakeCatalogProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string
- *Default:* Use the bucket name as the database name and / as the prefix

The name of the database in the Glue Data Catalog.

This is also used as the prefix inside the data lake bucket.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.DataLakeCatalogProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

Policy to apply when the bucket is removed from this stack.

* @default - RETAIN (The bucket will be orphaned).

---

### DataLakeStorageProps <a name="DataLakeStorageProps" id="aws-dsf.DataLakeStorageProps"></a>

Properties for the DataLakeStorage Construct.

#### Initializer <a name="Initializer" id="aws-dsf.DataLakeStorageProps.Initializer"></a>

```typescript
import { DataLakeStorageProps } from 'aws-dsf'

const dataLakeStorageProps: DataLakeStorageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.bronzeBucketArchiveDelay">bronzeBucketArchiveDelay</a></code> | <code>number</code> | Delay (in days) before archiving BRONZE data to frozen storage (Glacier storage class). |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.bronzeBucketInfrequentAccessDelay">bronzeBucketInfrequentAccessDelay</a></code> | <code>number</code> | Delay (in days) before moving BRONZE data to cold storage (Infrequent Access storage class). |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.bronzeBucketName">bronzeBucketName</a></code> | <code>string</code> | Name of the Bronze bucket. |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.dataLakeKey">dataLakeKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | The KMS Key used to encrypt all DataLakeStorage S3 buckets. |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.goldBucketArchiveDelay">goldBucketArchiveDelay</a></code> | <code>number</code> | Delay (in days) before archiving GOLD data to frozen storage (Glacier storage class). |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.goldBucketInfrequentAccessDelay">goldBucketInfrequentAccessDelay</a></code> | <code>number</code> | Delay (in days) before moving GOLD data to cold storage (Infrequent Access storage class). |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.goldBucketName">goldBucketName</a></code> | <code>string</code> | Name of the Gold bucket. |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.silverBucketArchiveDelay">silverBucketArchiveDelay</a></code> | <code>number</code> | Delay (in days) before archiving SILVER data to frozen storage (Glacier storage class). |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.silverBucketInfrequentAccessDelay">silverBucketInfrequentAccessDelay</a></code> | <code>number</code> | Delay (in days) before moving SILVER data to cold storage (Infrequent Access storage class). |
| <code><a href="#aws-dsf.DataLakeStorageProps.property.silverBucketName">silverBucketName</a></code> | <code>string</code> | Name of the Silver bucket. |

---

##### `bronzeBucketArchiveDelay`<sup>Optional</sup> <a name="bronzeBucketArchiveDelay" id="aws-dsf.DataLakeStorageProps.property.bronzeBucketArchiveDelay"></a>

```typescript
public readonly bronzeBucketArchiveDelay: number;
```

- *Type:* number
- *Default:* Move objects to Glacier after 90 days.

Delay (in days) before archiving BRONZE data to frozen storage (Glacier storage class).

---

##### `bronzeBucketInfrequentAccessDelay`<sup>Optional</sup> <a name="bronzeBucketInfrequentAccessDelay" id="aws-dsf.DataLakeStorageProps.property.bronzeBucketInfrequentAccessDelay"></a>

```typescript
public readonly bronzeBucketInfrequentAccessDelay: number;
```

- *Type:* number
- *Default:* Move objects to Infrequent Access after 30 days.

Delay (in days) before moving BRONZE data to cold storage (Infrequent Access storage class).

---

##### `bronzeBucketName`<sup>Optional</sup> <a name="bronzeBucketName" id="aws-dsf.DataLakeStorageProps.property.bronzeBucketName"></a>

```typescript
public readonly bronzeBucketName: string;
```

- *Type:* string
- *Default:* `bronze-<ACCOUNT_ID>-<REGION>-<UNIQUE_ID>` will be used.

Name of the Bronze bucket.

Use `BucketUtils.generateUniqueBucketName()` to generate a unique name (recommended).

---

##### `dataLakeKey`<sup>Optional</sup> <a name="dataLakeKey" id="aws-dsf.DataLakeStorageProps.property.dataLakeKey"></a>

```typescript
public readonly dataLakeKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key
- *Default:* A single KMS customer key is created.

The KMS Key used to encrypt all DataLakeStorage S3 buckets.

---

##### `goldBucketArchiveDelay`<sup>Optional</sup> <a name="goldBucketArchiveDelay" id="aws-dsf.DataLakeStorageProps.property.goldBucketArchiveDelay"></a>

```typescript
public readonly goldBucketArchiveDelay: number;
```

- *Type:* number
- *Default:* Objects are not archived to Glacier.

Delay (in days) before archiving GOLD data to frozen storage (Glacier storage class).

---

##### `goldBucketInfrequentAccessDelay`<sup>Optional</sup> <a name="goldBucketInfrequentAccessDelay" id="aws-dsf.DataLakeStorageProps.property.goldBucketInfrequentAccessDelay"></a>

```typescript
public readonly goldBucketInfrequentAccessDelay: number;
```

- *Type:* number
- *Default:* Move objects to Infrequent Access after 90 days.

Delay (in days) before moving GOLD data to cold storage (Infrequent Access storage class).

---

##### `goldBucketName`<sup>Optional</sup> <a name="goldBucketName" id="aws-dsf.DataLakeStorageProps.property.goldBucketName"></a>

```typescript
public readonly goldBucketName: string;
```

- *Type:* string
- *Default:* `gold-<ACCOUNT_ID>-<REGION>-<UNIQUE_ID>` will be used.

Name of the Gold bucket.

Use `BucketUtils.generateUniqueBucketName()` to generate a unique name (recommended).

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.DataLakeStorageProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@aws-data-solutions-framework/removeDataOnDestroy` needs to be set to true.
Otherwise, the removalPolicy is reverted to RETAIN.

---

##### `silverBucketArchiveDelay`<sup>Optional</sup> <a name="silverBucketArchiveDelay" id="aws-dsf.DataLakeStorageProps.property.silverBucketArchiveDelay"></a>

```typescript
public readonly silverBucketArchiveDelay: number;
```

- *Type:* number
- *Default:* Objects are not archived to Glacier.

Delay (in days) before archiving SILVER data to frozen storage (Glacier storage class).

---

##### `silverBucketInfrequentAccessDelay`<sup>Optional</sup> <a name="silverBucketInfrequentAccessDelay" id="aws-dsf.DataLakeStorageProps.property.silverBucketInfrequentAccessDelay"></a>

```typescript
public readonly silverBucketInfrequentAccessDelay: number;
```

- *Type:* number
- *Default:* Move objects to Infrequent Access after 90 days.

Delay (in days) before moving SILVER data to cold storage (Infrequent Access storage class).

---

##### `silverBucketName`<sup>Optional</sup> <a name="silverBucketName" id="aws-dsf.DataLakeStorageProps.property.silverBucketName"></a>

```typescript
public readonly silverBucketName: string;
```

- *Type:* string
- *Default:* `silver-<ACCOUNT_ID>-<REGION>-<UNIQUE_ID>` will be used.

Name of the Silver bucket.

Use `BucketUtils.generateUniqueBucketName()` to generate a unique name (recommended).

---

### EmrVirtualClusterOptions <a name="EmrVirtualClusterOptions" id="aws-dsf.EmrVirtualClusterOptions"></a>

The properties for the EmrVirtualCluster Construct class.

#### Initializer <a name="Initializer" id="aws-dsf.EmrVirtualClusterOptions.Initializer"></a>

```typescript
import { EmrVirtualClusterOptions } from 'aws-dsf'

const emrVirtualClusterOptions: EmrVirtualClusterOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.EmrVirtualClusterOptions.property.name">name</a></code> | <code>string</code> | name of the Amazon Emr virtual cluster to be created. |
| <code><a href="#aws-dsf.EmrVirtualClusterOptions.property.createNamespace">createNamespace</a></code> | <code>boolean</code> | creates Amazon EKS namespace. |
| <code><a href="#aws-dsf.EmrVirtualClusterOptions.property.eksNamespace">eksNamespace</a></code> | <code>string</code> | name of the Amazon EKS namespace to be linked to the Amazon EMR virtual cluster. |

---

##### `name`<sup>Required</sup> <a name="name" id="aws-dsf.EmrVirtualClusterOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

name of the Amazon Emr virtual cluster to be created.

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="aws-dsf.EmrVirtualClusterOptions.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean;
```

- *Type:* boolean
- *Default:* Do not create the namespace

creates Amazon EKS namespace.

---

##### `eksNamespace`<sup>Optional</sup> <a name="eksNamespace" id="aws-dsf.EmrVirtualClusterOptions.property.eksNamespace"></a>

```typescript
public readonly eksNamespace: string;
```

- *Type:* string
- *Default:* Use the default namespace

name of the Amazon EKS namespace to be linked to the Amazon EMR virtual cluster.

---

### PySparkApplicationPackageProps <a name="PySparkApplicationPackageProps" id="aws-dsf.PySparkApplicationPackageProps"></a>

Properties for the {PySparkApplicationPackage} construct.

#### Initializer <a name="Initializer" id="aws-dsf.PySparkApplicationPackageProps.Initializer"></a>

```typescript
import { PySparkApplicationPackageProps } from 'aws-dsf'

const pySparkApplicationPackageProps: PySparkApplicationPackageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.PySparkApplicationPackageProps.property.applicationName">applicationName</a></code> | <code>string</code> | The name of the pyspark application. |
| <code><a href="#aws-dsf.PySparkApplicationPackageProps.property.entrypointPath">entrypointPath</a></code> | <code>string</code> | The source path in your code base where you have the entrypoint stored example `~/my-project/src/entrypoint.py`. |
| <code><a href="#aws-dsf.PySparkApplicationPackageProps.property.artifactsBucket">artifactsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 bucket where to upload the artifacts of the Spark Job This is where the entry point and archive of the virtual environment will be stored. |
| <code><a href="#aws-dsf.PySparkApplicationPackageProps.property.dependenciesFolder">dependenciesFolder</a></code> | <code>string</code> | The source directory where you have `requirements.txt` or `pyproject.toml` that will install external AND internal Python packages. If your PySpark application has more than one Python file, you need to [package your Python project](https://packaging.python.org/en/latest/tutorials/packaging-projects/). This location must also have a `Dockerfile` that will [create a virtual environment and build an archive](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/using-python-libraries.html#building-python-virtual-env) out of it. |
| <code><a href="#aws-dsf.PySparkApplicationPackageProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.PySparkApplicationPackageProps.property.venvArchivePath">venvArchivePath</a></code> | <code>string</code> | The path of the Python virtual environment archive generated in the Docker container. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="aws-dsf.PySparkApplicationPackageProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of the pyspark application.

This name is used as a parent directory in s3 to store the entrypoint as well as virtual environment archive

---

##### `entrypointPath`<sup>Required</sup> <a name="entrypointPath" id="aws-dsf.PySparkApplicationPackageProps.property.entrypointPath"></a>

```typescript
public readonly entrypointPath: string;
```

- *Type:* string

The source path in your code base where you have the entrypoint stored example `~/my-project/src/entrypoint.py`.

---

##### `artifactsBucket`<sup>Optional</sup> <a name="artifactsBucket" id="aws-dsf.PySparkApplicationPackageProps.property.artifactsBucket"></a>

```typescript
public readonly artifactsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* A bucket is created

The S3 bucket where to upload the artifacts of the Spark Job This is where the entry point and archive of the virtual environment will be stored.

---

##### `dependenciesFolder`<sup>Optional</sup> <a name="dependenciesFolder" id="aws-dsf.PySparkApplicationPackageProps.property.dependenciesFolder"></a>

```typescript
public readonly dependenciesFolder: string;
```

- *Type:* string
- *Default:* No dependencies (internal or external) are packaged. Only the entrypoint can be used in the Spark Job.

The source directory where you have `requirements.txt` or `pyproject.toml` that will install external AND internal Python packages. If your PySpark application has more than one Python file, you need to [package your Python project](https://packaging.python.org/en/latest/tutorials/packaging-projects/). This location must also have a `Dockerfile` that will [create a virtual environment and build an archive](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/using-python-libraries.html#building-python-virtual-env) out of it.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.PySparkApplicationPackageProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

Resources like Amazon cloudwatch log or Amazon S3 bucket.
If DESTROY is selected, the context value '@aws-data-solutions-framework/removeDataOnDestroy'
in the 'cdk.json' or 'cdk.context.json' must be set to true.

---

##### `venvArchivePath`<sup>Optional</sup> <a name="venvArchivePath" id="aws-dsf.PySparkApplicationPackageProps.property.venvArchivePath"></a>

```typescript
public readonly venvArchivePath: string;
```

- *Type:* string
- *Default:* No virtual environment archive is packaged. Only the entrypoint can be used in the Spark Job. It is required if the `dependenciesFolder` is provided.

The path of the Python virtual environment archive generated in the Docker container.

This is the output path used in the `venv-pack -o` command in your Dockerfile.

---

### SparkEmrCICDPipelineProps <a name="SparkEmrCICDPipelineProps" id="aws-dsf.SparkEmrCICDPipelineProps"></a>

Properties for SparkEmrCICDPipeline class.

#### Initializer <a name="Initializer" id="aws-dsf.SparkEmrCICDPipelineProps.Initializer"></a>

```typescript
import { SparkEmrCICDPipelineProps } from 'aws-dsf'

const sparkEmrCICDPipelineProps: SparkEmrCICDPipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrCICDPipelineProps.property.applicationStackFactory">applicationStackFactory</a></code> | <code><a href="#aws-dsf.ApplicationStackFactory">ApplicationStackFactory</a></code> | The application Stack to deploy in the different CDK Pipelines Stages. |
| <code><a href="#aws-dsf.SparkEmrCICDPipelineProps.property.sparkApplicationName">sparkApplicationName</a></code> | <code>string</code> | The name of the Spark application to be deployed. |
| <code><a href="#aws-dsf.SparkEmrCICDPipelineProps.property.cdkApplicationPath">cdkApplicationPath</a></code> | <code>string</code> | The path to the folder that contains the CDK Application. |
| <code><a href="#aws-dsf.SparkEmrCICDPipelineProps.property.integTestEnv">integTestEnv</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to create from the Application Stack and to pass to the integration tests. |
| <code><a href="#aws-dsf.SparkEmrCICDPipelineProps.property.integTestPermissions">integTestPermissions</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | The IAM policy statements to add permissions for running the integration tests. |
| <code><a href="#aws-dsf.SparkEmrCICDPipelineProps.property.integTestScript">integTestScript</a></code> | <code>string</code> | The path to the Shell script that contains integration tests. |
| <code><a href="#aws-dsf.SparkEmrCICDPipelineProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.SparkEmrCICDPipelineProps.property.sparkApplicationPath">sparkApplicationPath</a></code> | <code>string</code> | The path to the folder that contains the Spark Application. |
| <code><a href="#aws-dsf.SparkEmrCICDPipelineProps.property.sparkImage">sparkImage</a></code> | <code><a href="#aws-dsf.SparkImage">SparkImage</a></code> | The EMR Spark image to use to run the unit tests. |

---

##### `applicationStackFactory`<sup>Required</sup> <a name="applicationStackFactory" id="aws-dsf.SparkEmrCICDPipelineProps.property.applicationStackFactory"></a>

```typescript
public readonly applicationStackFactory: ApplicationStackFactory;
```

- *Type:* <a href="#aws-dsf.ApplicationStackFactory">ApplicationStackFactory</a>

The application Stack to deploy in the different CDK Pipelines Stages.

---

##### `sparkApplicationName`<sup>Required</sup> <a name="sparkApplicationName" id="aws-dsf.SparkEmrCICDPipelineProps.property.sparkApplicationName"></a>

```typescript
public readonly sparkApplicationName: string;
```

- *Type:* string

The name of the Spark application to be deployed.

---

##### `cdkApplicationPath`<sup>Optional</sup> <a name="cdkApplicationPath" id="aws-dsf.SparkEmrCICDPipelineProps.property.cdkApplicationPath"></a>

```typescript
public readonly cdkApplicationPath: string;
```

- *Type:* string
- *Default:* The root of the repository

The path to the folder that contains the CDK Application.

---

##### `integTestEnv`<sup>Optional</sup> <a name="integTestEnv" id="aws-dsf.SparkEmrCICDPipelineProps.property.integTestEnv"></a>

```typescript
public readonly integTestEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables

The environment variables to create from the Application Stack and to pass to the integration tests.

This is used to interact with resources created by the Application Stack from within the integration tests script.
Key is the name of the environment variable to create. Value is generally a CfnOutput name from the Application Stack.

---

##### `integTestPermissions`<sup>Optional</sup> <a name="integTestPermissions" id="aws-dsf.SparkEmrCICDPipelineProps.property.integTestPermissions"></a>

```typescript
public readonly integTestPermissions: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No permissions

The IAM policy statements to add permissions for running the integration tests.

---

##### `integTestScript`<sup>Optional</sup> <a name="integTestScript" id="aws-dsf.SparkEmrCICDPipelineProps.property.integTestScript"></a>

```typescript
public readonly integTestScript: string;
```

- *Type:* string
- *Default:* No integration tests are run

The path to the Shell script that contains integration tests.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.SparkEmrCICDPipelineProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@aws-data-solutions-framework/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `sparkApplicationPath`<sup>Optional</sup> <a name="sparkApplicationPath" id="aws-dsf.SparkEmrCICDPipelineProps.property.sparkApplicationPath"></a>

```typescript
public readonly sparkApplicationPath: string;
```

- *Type:* string
- *Default:* The root of the repository

The path to the folder that contains the Spark Application.

---

##### `sparkImage`<sup>Optional</sup> <a name="sparkImage" id="aws-dsf.SparkEmrCICDPipelineProps.property.sparkImage"></a>

```typescript
public readonly sparkImage: SparkImage;
```

- *Type:* <a href="#aws-dsf.SparkImage">SparkImage</a>
- *Default:* EMR v6.12 is used

The EMR Spark image to use to run the unit tests.

---

### SparkEmrContainersRuntimeProps <a name="SparkEmrContainersRuntimeProps" id="aws-dsf.SparkEmrContainersRuntimeProps"></a>

The properties for the EmrEksCluster Construct class.

#### Initializer <a name="Initializer" id="aws-dsf.SparkEmrContainersRuntimeProps.Initializer"></a>

```typescript
import { SparkEmrContainersRuntimeProps } from 'aws-dsf'

const sparkEmrContainersRuntimeProps: SparkEmrContainersRuntimeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.eksAdminRoleArn">eksAdminRoleArn</a></code> | <code>string</code> | Amazon IAM Role to be added to Amazon EKS master roles that will give access to kubernetes cluster from AWS console UI. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.kubectlLambdaLayer">kubectlLambdaLayer</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion</code> | Starting k8s 1.22, CDK no longer bundle the kubectl layer with the code due to breaking npm package size. A layer needs to be passed to the Construct. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.publicAccessCIDRs">publicAccessCIDRs</a></code> | <code>string[]</code> | The CIDR blocks that are allowed access to your cluster’s public Kubernetes API server endpoint. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.createEmrOnEksServiceLinkedRole">createEmrOnEksServiceLinkedRole</a></code> | <code>boolean</code> | Wether we need to create an EMR on EKS Service Linked Role. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.defaultNodes">defaultNodes</a></code> | <code>boolean</code> | If set to true, the Construct will create default EKS nodegroups or node provisioners (based on the autoscaler mechanism used). |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.eksCluster">eksCluster</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | The EKS cluster to setup EMR on. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.eksClusterName">eksClusterName</a></code> | <code>string</code> | Name of the Amazon EKS cluster to be created. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.eksVpc">eksVpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC object where to deploy the EKS cluster VPC should have at least two private and public subnets in different Availability Zones All private subnets should have the following tags: 'for-use-with-amazon-emr-managed-policies'='true' 'kubernetes.io/role/internal-elb'='1' All public subnets should have the following tag: 'kubernetes.io/role/elb'='1' Cannot be combined with vpcCidr, if combined vpcCidr takes precedence. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.karpenterVersion">karpenterVersion</a></code> | <code>string</code> | The version of karpenter to pass to Helm. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.kubernetesVersion">kubernetesVersion</a></code> | <code>aws-cdk-lib.aws_eks.KubernetesVersion</code> | Kubernetes version for Amazon EKS cluster that will be created The default is changed as new version version of k8s on EKS becomes available. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.SparkEmrContainersRuntimeProps.property.vpcCidr">vpcCidr</a></code> | <code>string</code> | The CIDR of the VPC to use with EKS. |

---

##### `eksAdminRoleArn`<sup>Required</sup> <a name="eksAdminRoleArn" id="aws-dsf.SparkEmrContainersRuntimeProps.property.eksAdminRoleArn"></a>

```typescript
public readonly eksAdminRoleArn: string;
```

- *Type:* string

Amazon IAM Role to be added to Amazon EKS master roles that will give access to kubernetes cluster from AWS console UI.

An admin role must be passed if `eksCluster` property is not set.
You will use this role to grant other access to and manage EKS cluster

---

##### `kubectlLambdaLayer`<sup>Required</sup> <a name="kubectlLambdaLayer" id="aws-dsf.SparkEmrContainersRuntimeProps.property.kubectlLambdaLayer"></a>

```typescript
public readonly kubectlLambdaLayer: ILayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion
- *Default:* No layer is used and the default CDK layer is used

Starting k8s 1.22, CDK no longer bundle the kubectl layer with the code due to breaking npm package size. A layer needs to be passed to the Construct.

The cdk [documentation] (https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_eks.KubernetesVersion.html#static-v1_22)
contains the libraries that you should add for the right Kubernetes version

---

##### `publicAccessCIDRs`<sup>Required</sup> <a name="publicAccessCIDRs" id="aws-dsf.SparkEmrContainersRuntimeProps.property.publicAccessCIDRs"></a>

```typescript
public readonly publicAccessCIDRs: string[];
```

- *Type:* string[]

The CIDR blocks that are allowed access to your cluster’s public Kubernetes API server endpoint.

---

##### `createEmrOnEksServiceLinkedRole`<sup>Optional</sup> <a name="createEmrOnEksServiceLinkedRole" id="aws-dsf.SparkEmrContainersRuntimeProps.property.createEmrOnEksServiceLinkedRole"></a>

```typescript
public readonly createEmrOnEksServiceLinkedRole: boolean;
```

- *Type:* boolean
- *Default:* true

Wether we need to create an EMR on EKS Service Linked Role.

---

##### `defaultNodes`<sup>Optional</sup> <a name="defaultNodes" id="aws-dsf.SparkEmrContainersRuntimeProps.property.defaultNodes"></a>

```typescript
public readonly defaultNodes: boolean;
```

- *Type:* boolean
- *Default:* true

If set to true, the Construct will create default EKS nodegroups or node provisioners (based on the autoscaler mechanism used).

There are three types of nodes:
 * Nodes for critical jobs which use on-demand instances, high speed disks and workload isolation
 * Nodes for shared worklaods which uses spot instances and no isolation to optimize costs
 * Nodes for notebooks which leverage a cost optimized configuration for running EMR managed endpoints and spark drivers/executors.

---

##### `eksCluster`<sup>Optional</sup> <a name="eksCluster" id="aws-dsf.SparkEmrContainersRuntimeProps.property.eksCluster"></a>

```typescript
public readonly eksCluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster
- *Default:* An EKS Cluster is created

The EKS cluster to setup EMR on.

The cluster needs to be created in the same CDK Stack.
If the EKS cluster is provided, the cluster AddOns and all the controllers (Ingress controller, Cluster Autoscaler or Karpenter...) need to be configured.
When providing an EKS cluster, the methods for adding nodegroups can still be used. They implement the best practices for running Spark on EKS.

---

##### `eksClusterName`<sup>Optional</sup> <a name="eksClusterName" id="aws-dsf.SparkEmrContainersRuntimeProps.property.eksClusterName"></a>

```typescript
public readonly eksClusterName: string;
```

- *Type:* string
- *Default:* The [default cluster name]{@link DEFAULT_CLUSTER_NAME }

Name of the Amazon EKS cluster to be created.

---

##### `eksVpc`<sup>Optional</sup> <a name="eksVpc" id="aws-dsf.SparkEmrContainersRuntimeProps.property.eksVpc"></a>

```typescript
public readonly eksVpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC object where to deploy the EKS cluster VPC should have at least two private and public subnets in different Availability Zones All private subnets should have the following tags: 'for-use-with-amazon-emr-managed-policies'='true' 'kubernetes.io/role/internal-elb'='1' All public subnets should have the following tag: 'kubernetes.io/role/elb'='1' Cannot be combined with vpcCidr, if combined vpcCidr takes precedence.

---

##### `karpenterVersion`<sup>Optional</sup> <a name="karpenterVersion" id="aws-dsf.SparkEmrContainersRuntimeProps.property.karpenterVersion"></a>

```typescript
public readonly karpenterVersion: string;
```

- *Type:* string
- *Default:* The [default Karpenter version]{@link DEFAULT_KARPENTER_VERSION }

The version of karpenter to pass to Helm.

---

##### `kubernetesVersion`<sup>Optional</sup> <a name="kubernetesVersion" id="aws-dsf.SparkEmrContainersRuntimeProps.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: KubernetesVersion;
```

- *Type:* aws-cdk-lib.aws_eks.KubernetesVersion
- *Default:* Kubernetes version {@link DEFAULT_EKS_VERSION }

Kubernetes version for Amazon EKS cluster that will be created The default is changed as new version version of k8s on EKS becomes available.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.SparkEmrContainersRuntimeProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

Resources like Amazon cloudwatch log or Amazon S3 bucket
If DESTROY is selected, context value

---

##### `vpcCidr`<sup>Optional</sup> <a name="vpcCidr" id="aws-dsf.SparkEmrContainersRuntimeProps.property.vpcCidr"></a>

```typescript
public readonly vpcCidr: string;
```

- *Type:* string
- *Default:* A vpc with the following CIDR 10.0.0.0/16 will be used

The CIDR of the VPC to use with EKS.

If provided, a VPC with three public subnets and three private subnets is created
The size of the private subnets is four time the one of the public subnet

---

### SparkEmrEksJobApiProps <a name="SparkEmrEksJobApiProps" id="aws-dsf.SparkEmrEksJobApiProps"></a>

Configuration for the EMR on EKS job.

Use this interface when EmrOnEksSparkJobProps doesn't give you access to the configuration parameters you need.

> [[https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html]]([https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html])

#### Initializer <a name="Initializer" id="aws-dsf.SparkEmrEksJobApiProps.Initializer"></a>

```typescript
import { SparkEmrEksJobApiProps } from 'aws-dsf'

const sparkEmrEksJobApiProps: SparkEmrEksJobApiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrEksJobApiProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.SparkEmrEksJobApiProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Schedule to run the Step Functions state machine. |
| <code><a href="#aws-dsf.SparkEmrEksJobApiProps.property.jobConfig">jobConfig</a></code> | <code>{[ key: string ]: any}</code> | EMR on EKS Job Configuration. |
| <code><a href="#aws-dsf.SparkEmrEksJobApiProps.property.executionTimeoutMinutes">executionTimeoutMinutes</a></code> | <code>number</code> | Job execution timeout in minutes. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.SparkEmrEksJobApiProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@aws-data-solutions-framework/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="aws-dsf.SparkEmrEksJobApiProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

Schedule to run the Step Functions state machine.

> [Schedule](Schedule)

> [[https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html]]([https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html])

---

##### `jobConfig`<sup>Required</sup> <a name="jobConfig" id="aws-dsf.SparkEmrEksJobApiProps.property.jobConfig"></a>

```typescript
public readonly jobConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

EMR on EKS Job Configuration.

> [[https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html]]([https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html])

---

##### `executionTimeoutMinutes`<sup>Optional</sup> <a name="executionTimeoutMinutes" id="aws-dsf.SparkEmrEksJobApiProps.property.executionTimeoutMinutes"></a>

```typescript
public readonly executionTimeoutMinutes: number;
```

- *Type:* number

Job execution timeout in minutes.

@default 30

---

### SparkEmrEksJobProps <a name="SparkEmrEksJobProps" id="aws-dsf.SparkEmrEksJobProps"></a>

Simplified configuration for the EMR Serverless Job.

> [(https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html#emroneks-StartJobRun-request-tags)]((https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html#emroneks-StartJobRun-request-tags))

#### Initializer <a name="Initializer" id="aws-dsf.SparkEmrEksJobProps.Initializer"></a>

```typescript
import { SparkEmrEksJobProps } from 'aws-dsf'

const sparkEmrEksJobProps: SparkEmrEksJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Schedule to run the Step Functions state machine. |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.sparkSubmitEntryPoint">sparkSubmitEntryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.applicationConfiguration">applicationConfiguration</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.cloudWatchLogGroupName">cloudWatchLogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.cloudWatchLogGroupStreamPrefix">cloudWatchLogGroupStreamPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.executionTimeoutMinutes">executionTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.s3LogUri">s3LogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.sparkSubmitEntryPointArguments">sparkSubmitEntryPointArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.sparkSubmitParameters">sparkSubmitParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrEksJobProps.property.tags">tags</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.SparkEmrEksJobProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@aws-data-solutions-framework/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="aws-dsf.SparkEmrEksJobProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

Schedule to run the Step Functions state machine.

> [Schedule](Schedule)

> [[https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html]]([https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html])

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="aws-dsf.SparkEmrEksJobProps.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="aws-dsf.SparkEmrEksJobProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sparkSubmitEntryPoint`<sup>Required</sup> <a name="sparkSubmitEntryPoint" id="aws-dsf.SparkEmrEksJobProps.property.sparkSubmitEntryPoint"></a>

```typescript
public readonly sparkSubmitEntryPoint: string;
```

- *Type:* string

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="aws-dsf.SparkEmrEksJobProps.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

---

##### `applicationConfiguration`<sup>Optional</sup> <a name="applicationConfiguration" id="aws-dsf.SparkEmrEksJobProps.property.applicationConfiguration"></a>

```typescript
public readonly applicationConfiguration: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `cloudWatchLogGroupName`<sup>Optional</sup> <a name="cloudWatchLogGroupName" id="aws-dsf.SparkEmrEksJobProps.property.cloudWatchLogGroupName"></a>

```typescript
public readonly cloudWatchLogGroupName: string;
```

- *Type:* string

---

##### `cloudWatchLogGroupStreamPrefix`<sup>Optional</sup> <a name="cloudWatchLogGroupStreamPrefix" id="aws-dsf.SparkEmrEksJobProps.property.cloudWatchLogGroupStreamPrefix"></a>

```typescript
public readonly cloudWatchLogGroupStreamPrefix: string;
```

- *Type:* string

---

##### `executionTimeoutMinutes`<sup>Optional</sup> <a name="executionTimeoutMinutes" id="aws-dsf.SparkEmrEksJobProps.property.executionTimeoutMinutes"></a>

```typescript
public readonly executionTimeoutMinutes: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="aws-dsf.SparkEmrEksJobProps.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `releaseLabel`<sup>Optional</sup> <a name="releaseLabel" id="aws-dsf.SparkEmrEksJobProps.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

---

##### `s3LogUri`<sup>Optional</sup> <a name="s3LogUri" id="aws-dsf.SparkEmrEksJobProps.property.s3LogUri"></a>

```typescript
public readonly s3LogUri: string;
```

- *Type:* string

---

##### `sparkSubmitEntryPointArguments`<sup>Optional</sup> <a name="sparkSubmitEntryPointArguments" id="aws-dsf.SparkEmrEksJobProps.property.sparkSubmitEntryPointArguments"></a>

```typescript
public readonly sparkSubmitEntryPointArguments: string[];
```

- *Type:* string[]

---

##### `sparkSubmitParameters`<sup>Optional</sup> <a name="sparkSubmitParameters" id="aws-dsf.SparkEmrEksJobProps.property.sparkSubmitParameters"></a>

```typescript
public readonly sparkSubmitParameters: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-dsf.SparkEmrEksJobProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

### SparkEmrServerlessJobApiProps <a name="SparkEmrServerlessJobApiProps" id="aws-dsf.SparkEmrServerlessJobApiProps"></a>

Configuration for the EMR Serverless Job API.

Use this interface when EmrServerlessJobProps doesn't give you access to the configuration parameters you need.

> [[https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html]]([https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html])

#### Initializer <a name="Initializer" id="aws-dsf.SparkEmrServerlessJobApiProps.Initializer"></a>

```typescript
import { SparkEmrServerlessJobApiProps } from 'aws-dsf'

const sparkEmrServerlessJobApiProps: SparkEmrServerlessJobApiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessJobApiProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.SparkEmrServerlessJobApiProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Schedule to run the Step Functions state machine. |
| <code><a href="#aws-dsf.SparkEmrServerlessJobApiProps.property.jobConfig">jobConfig</a></code> | <code>{[ key: string ]: any}</code> | EMR Serverless Job Configuration. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.SparkEmrServerlessJobApiProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@aws-data-solutions-framework/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="aws-dsf.SparkEmrServerlessJobApiProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

Schedule to run the Step Functions state machine.

> [Schedule](Schedule)

> [[https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html]]([https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html])

---

##### `jobConfig`<sup>Required</sup> <a name="jobConfig" id="aws-dsf.SparkEmrServerlessJobApiProps.property.jobConfig"></a>

```typescript
public readonly jobConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

EMR Serverless Job Configuration.

> [[https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html]]([https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html])

---

### SparkEmrServerlessJobProps <a name="SparkEmrServerlessJobProps" id="aws-dsf.SparkEmrServerlessJobProps"></a>

Simplified configuration for the EMR Serverless Job.

> [[https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html]]([https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html])

#### Initializer <a name="Initializer" id="aws-dsf.SparkEmrServerlessJobProps.Initializer"></a>

```typescript
import { SparkEmrServerlessJobProps } from 'aws-dsf'

const sparkEmrServerlessJobProps: SparkEmrServerlessJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Schedule to run the Step Functions state machine. |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.sparkSubmitEntryPoint">sparkSubmitEntryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.applicationConfiguration">applicationConfiguration</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.cloudWatchEncryptionKeyArn">cloudWatchEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.cloudWatchLogGroupName">cloudWatchLogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.cloudWatchLogGroupStreamPrefix">cloudWatchLogGroupStreamPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.cloudWatchLogtypes">cloudWatchLogtypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.executionTimeoutMinutes">executionTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.persistentAppUi">persistentAppUi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.persistentAppUIKeyArn">persistentAppUIKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.s3LogUri">s3LogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.s3LogUriKeyArn">s3LogUriKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.sparkSubmitEntryPointArguments">sparkSubmitEntryPointArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.sparkSubmitParameters">sparkSubmitParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-dsf.SparkEmrServerlessJobProps.property.tags">tags</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.SparkEmrServerlessJobProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@aws-data-solutions-framework/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="aws-dsf.SparkEmrServerlessJobProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

Schedule to run the Step Functions state machine.

> [Schedule](Schedule)

> [[https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html]]([https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html])

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="aws-dsf.SparkEmrServerlessJobProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="aws-dsf.SparkEmrServerlessJobProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sparkSubmitEntryPoint`<sup>Required</sup> <a name="sparkSubmitEntryPoint" id="aws-dsf.SparkEmrServerlessJobProps.property.sparkSubmitEntryPoint"></a>

```typescript
public readonly sparkSubmitEntryPoint: string;
```

- *Type:* string

---

##### `applicationConfiguration`<sup>Optional</sup> <a name="applicationConfiguration" id="aws-dsf.SparkEmrServerlessJobProps.property.applicationConfiguration"></a>

```typescript
public readonly applicationConfiguration: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `cloudWatchEncryptionKeyArn`<sup>Optional</sup> <a name="cloudWatchEncryptionKeyArn" id="aws-dsf.SparkEmrServerlessJobProps.property.cloudWatchEncryptionKeyArn"></a>

```typescript
public readonly cloudWatchEncryptionKeyArn: string;
```

- *Type:* string

---

##### `cloudWatchLogGroupName`<sup>Optional</sup> <a name="cloudWatchLogGroupName" id="aws-dsf.SparkEmrServerlessJobProps.property.cloudWatchLogGroupName"></a>

```typescript
public readonly cloudWatchLogGroupName: string;
```

- *Type:* string

---

##### `cloudWatchLogGroupStreamPrefix`<sup>Optional</sup> <a name="cloudWatchLogGroupStreamPrefix" id="aws-dsf.SparkEmrServerlessJobProps.property.cloudWatchLogGroupStreamPrefix"></a>

```typescript
public readonly cloudWatchLogGroupStreamPrefix: string;
```

- *Type:* string

---

##### `cloudWatchLogtypes`<sup>Optional</sup> <a name="cloudWatchLogtypes" id="aws-dsf.SparkEmrServerlessJobProps.property.cloudWatchLogtypes"></a>

```typescript
public readonly cloudWatchLogtypes: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="aws-dsf.SparkEmrServerlessJobProps.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `executionTimeoutMinutes`<sup>Optional</sup> <a name="executionTimeoutMinutes" id="aws-dsf.SparkEmrServerlessJobProps.property.executionTimeoutMinutes"></a>

```typescript
public readonly executionTimeoutMinutes: number;
```

- *Type:* number

---

##### `persistentAppUi`<sup>Optional</sup> <a name="persistentAppUi" id="aws-dsf.SparkEmrServerlessJobProps.property.persistentAppUi"></a>

```typescript
public readonly persistentAppUi: boolean;
```

- *Type:* boolean

---

##### `persistentAppUIKeyArn`<sup>Optional</sup> <a name="persistentAppUIKeyArn" id="aws-dsf.SparkEmrServerlessJobProps.property.persistentAppUIKeyArn"></a>

```typescript
public readonly persistentAppUIKeyArn: string;
```

- *Type:* string

---

##### `s3LogUri`<sup>Optional</sup> <a name="s3LogUri" id="aws-dsf.SparkEmrServerlessJobProps.property.s3LogUri"></a>

```typescript
public readonly s3LogUri: string;
```

- *Type:* string

---

##### `s3LogUriKeyArn`<sup>Optional</sup> <a name="s3LogUriKeyArn" id="aws-dsf.SparkEmrServerlessJobProps.property.s3LogUriKeyArn"></a>

```typescript
public readonly s3LogUriKeyArn: string;
```

- *Type:* string

---

##### `sparkSubmitEntryPointArguments`<sup>Optional</sup> <a name="sparkSubmitEntryPointArguments" id="aws-dsf.SparkEmrServerlessJobProps.property.sparkSubmitEntryPointArguments"></a>

```typescript
public readonly sparkSubmitEntryPointArguments: string[];
```

- *Type:* string[]

---

##### `sparkSubmitParameters`<sup>Optional</sup> <a name="sparkSubmitParameters" id="aws-dsf.SparkEmrServerlessJobProps.property.sparkSubmitParameters"></a>

```typescript
public readonly sparkSubmitParameters: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-dsf.SparkEmrServerlessJobProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

### SparkEmrServerlessRuntimeProps <a name="SparkEmrServerlessRuntimeProps" id="aws-dsf.SparkEmrServerlessRuntimeProps"></a>

Properties for the {SparkRuntimeServerless} construct.

#### Initializer <a name="Initializer" id="aws-dsf.SparkEmrServerlessRuntimeProps.Initializer"></a>

```typescript
import { SparkEmrServerlessRuntimeProps } from 'aws-dsf'

const sparkEmrServerlessRuntimeProps: SparkEmrServerlessRuntimeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.name">name</a></code> | <code>string</code> | The name of the application. The name must be less than 64 characters. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.architecture">architecture</a></code> | <code><a href="#aws-dsf.Architecture">Architecture</a></code> | The CPU architecture type of the application. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.autoStartConfiguration">autoStartConfiguration</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.AutoStartConfigurationProperty</code> | The configuration for an application to automatically start on job submission. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.autoStopConfiguration">autoStopConfiguration</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.AutoStopConfigurationProperty</code> | The configuration for an application to automatically stop after a certain amount of time being idle. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.imageConfiguration">imageConfiguration</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.ImageConfigurationInputProperty</code> | The image configuration. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.initialCapacity">initialCapacity</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.InitialCapacityConfigKeyValuePairProperty[]</code> | The initial capacity of the application. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.maximumCapacity">maximumCapacity</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.MaximumAllowedResourcesProperty</code> | The maximum capacity of the application. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.networkConfiguration">networkConfiguration</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.NetworkConfigurationProperty</code> | The network configuration for customer VPC connectivity for the application. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.releaseLabel">releaseLabel</a></code> | <code><a href="#aws-dsf.EmrRuntimeVersion">EmrRuntimeVersion</a></code> | The EMR release version associated with the application. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.SparkEmrServerlessRuntimeProps.property.workerTypeSpecifications">workerTypeSpecifications</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.WorkerTypeSpecificationInputProperty}</code> | The container image to use in the application. |

---

##### `name`<sup>Required</sup> <a name="name" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the application. The name must be less than 64 characters.

*Pattern* : `^[A-Za-z0-9._\\/#-]+$`

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* <a href="#aws-dsf.Architecture">Architecture</a>

The CPU architecture type of the application.

---

##### `autoStartConfiguration`<sup>Optional</sup> <a name="autoStartConfiguration" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.autoStartConfiguration"></a>

```typescript
public readonly autoStartConfiguration: IResolvable | AutoStartConfigurationProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.AutoStartConfigurationProperty

The configuration for an application to automatically start on job submission.

---

##### `autoStopConfiguration`<sup>Optional</sup> <a name="autoStopConfiguration" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.autoStopConfiguration"></a>

```typescript
public readonly autoStopConfiguration: IResolvable | AutoStopConfigurationProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.AutoStopConfigurationProperty

The configuration for an application to automatically stop after a certain amount of time being idle.

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.imageConfiguration"></a>

```typescript
public readonly imageConfiguration: IResolvable | ImageConfigurationInputProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.ImageConfigurationInputProperty

The image configuration.

---

##### `initialCapacity`<sup>Optional</sup> <a name="initialCapacity" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.initialCapacity"></a>

```typescript
public readonly initialCapacity: IResolvable | IResolvable | InitialCapacityConfigKeyValuePairProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.InitialCapacityConfigKeyValuePairProperty[]

The initial capacity of the application.

---

##### `maximumCapacity`<sup>Optional</sup> <a name="maximumCapacity" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.maximumCapacity"></a>

```typescript
public readonly maximumCapacity: IResolvable | MaximumAllowedResourcesProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.MaximumAllowedResourcesProperty

The maximum capacity of the application.

This is cumulative across all workers at any given point in time during the lifespan of the application is created. No new resources will be created once any one of the defined limits is hit.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: IResolvable | NetworkConfigurationProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.NetworkConfigurationProperty
- *Default:* a VPC and a security group are created, these are accessed as construct attribute.

The network configuration for customer VPC connectivity for the application.

If no configuration is created, the a VPC with 3 public subnets and 3 private subnets is created
The 3 public subnets and 3 private subnets are each created in an Availability Zone (AZ)
The VPC has one NAT Gateway per AZ and an S3 endpoint

---

##### `releaseLabel`<sup>Optional</sup> <a name="releaseLabel" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: EmrRuntimeVersion;
```

- *Type:* <a href="#aws-dsf.EmrRuntimeVersion">EmrRuntimeVersion</a>

The EMR release version associated with the application.

The EMR release can be found in this [documentation](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-6x.html)

> [EMR_DEFAULT_VERSION](EMR_DEFAULT_VERSION)

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

Resources like Amazon cloudwatch log or Amazon S3 bucket
If DESTROY is selected, context value

---

##### `workerTypeSpecifications`<sup>Optional</sup> <a name="workerTypeSpecifications" id="aws-dsf.SparkEmrServerlessRuntimeProps.property.workerTypeSpecifications"></a>

```typescript
public readonly workerTypeSpecifications: IResolvable | {[ key: string ]: IResolvable | WorkerTypeSpecificationInputProperty};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.WorkerTypeSpecificationInputProperty}

The container image to use in the application.

If none is provided the application will use the base Amazon EMR Serverless image for the specified EMR release.
This is an [example](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/application-custom-image.html) of usage

---

### SparkJobProps <a name="SparkJobProps" id="aws-dsf.SparkJobProps"></a>

Properties for the SparkJob construct.

#### Initializer <a name="Initializer" id="aws-dsf.SparkJobProps.Initializer"></a>

```typescript
import { SparkJobProps } from 'aws-dsf'

const sparkJobProps: SparkJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-dsf.SparkJobProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#aws-dsf.SparkJobProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Schedule to run the Step Functions state machine. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="aws-dsf.SparkJobProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@aws-data-solutions-framework/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="aws-dsf.SparkJobProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

Schedule to run the Step Functions state machine.

> [Schedule](Schedule)

> [[https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html]]([https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.Schedule.html])

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationStackFactory <a name="ApplicationStackFactory" id="aws-dsf.ApplicationStackFactory"></a>

Abstract class that needs to be implemented to pass the application Stack to the CICD pipeline.

*Example*

```typescript
interface MyApplicationStackProps extends cdk.StackProps {
  readonly stage: dsf.CICDStage;
}

class MyApplicationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: MyApplicationStackProps) {
    super(scope, id, props);
    // stack logic goes here... and can be customized using props.stage
  }
}

class MyApplicationStackFactory extends dsf.ApplicationStackFactory {
  createStack(scope: Construct, stage: dsf.CICDStage): cdk.Stack {
    return new MyApplicationStack(scope, 'MyApplication', {
      stage: stage
    } as MyApplicationStackProps);
  }
}
```


#### Initializers <a name="Initializers" id="aws-dsf.ApplicationStackFactory.Initializer"></a>

```typescript
import { ApplicationStackFactory } from 'aws-dsf'

new ApplicationStackFactory()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.ApplicationStackFactory.createStack">createStack</a></code> | Abstract method that needs to be implemented to return the application Stack. |

---

##### `createStack` <a name="createStack" id="aws-dsf.ApplicationStackFactory.createStack"></a>

```typescript
public createStack(scope: Construct, stage: CICDStage): Stack
```

Abstract method that needs to be implemented to return the application Stack.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.ApplicationStackFactory.createStack.parameter.scope"></a>

- *Type:* constructs.Construct

The scope to create the stack in.

---

###### `stage`<sup>Required</sup> <a name="stage" id="aws-dsf.ApplicationStackFactory.createStack.parameter.stage"></a>

- *Type:* <a href="#aws-dsf.CICDStage">CICDStage</a>

The stage of the pipeline.

---




### BucketUtils <a name="BucketUtils" id="aws-dsf.BucketUtils"></a>

Utils for working with Amazon S3 buckets.

#### Initializers <a name="Initializers" id="aws-dsf.BucketUtils.Initializer"></a>

```typescript
import { BucketUtils } from 'aws-dsf'

new BucketUtils()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.BucketUtils.generateUniqueBucketName">generateUniqueBucketName</a></code> | Generate a unique Amazon S3 bucket name based on the provided name, CDK construct ID and CDK construct scope. |

---

##### `generateUniqueBucketName` <a name="generateUniqueBucketName" id="aws-dsf.BucketUtils.generateUniqueBucketName"></a>

```typescript
import { BucketUtils } from 'aws-dsf'

BucketUtils.generateUniqueBucketName(scope: Construct, id: string, name: string)
```

Generate a unique Amazon S3 bucket name based on the provided name, CDK construct ID and CDK construct scope.

The bucket name is suffixed the AWS account ID, the AWS region and a unique 8 characters hash.
The maximum length for name is 26 characters.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-dsf.BucketUtils.generateUniqueBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

the current scope where the construct is created (generally `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="aws-dsf.BucketUtils.generateUniqueBucketName.parameter.id"></a>

- *Type:* string

the CDK ID of the construct.

---

###### `name`<sup>Required</sup> <a name="name" id="aws-dsf.BucketUtils.generateUniqueBucketName.parameter.name"></a>

- *Type:* string

the name of the bucket.

---




## Enums <a name="Enums" id="Enums"></a>

### Architecture <a name="Architecture" id="aws-dsf.Architecture"></a>

Enum defining the CPU architecture type of the application, either  X86_64 or ARM64.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.Architecture.X86_64">X86_64</a></code> | *No description.* |
| <code><a href="#aws-dsf.Architecture.ARM64">ARM64</a></code> | *No description.* |

---

##### `X86_64` <a name="X86_64" id="aws-dsf.Architecture.X86_64"></a>

---


##### `ARM64` <a name="ARM64" id="aws-dsf.Architecture.ARM64"></a>

---


### CICDStage <a name="CICDStage" id="aws-dsf.CICDStage"></a>

The list of CICD Stages to deploy the SparkCICDStack.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.CICDStage.STAGING">STAGING</a></code> | *No description.* |
| <code><a href="#aws-dsf.CICDStage.PROD">PROD</a></code> | *No description.* |

---

##### `STAGING` <a name="STAGING" id="aws-dsf.CICDStage.STAGING"></a>

---


##### `PROD` <a name="PROD" id="aws-dsf.CICDStage.PROD"></a>

---


### EmrRuntimeVersion <a name="EmrRuntimeVersion" id="aws-dsf.EmrRuntimeVersion"></a>

Enum defining the EMR version as defined [here](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-6x.html).

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_12">V6_12</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_11_1">V6_11_1</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_11">V6_11</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_10_1">V6_10_1</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_10">V6_10</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_9">V6_9</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_8">V6_8</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_7">V6_7</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_6">V6_6</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_5">V6_5</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_4">V6_4</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_3">V6_3</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V6_2">V6_2</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V5_33">V5_33</a></code> | *No description.* |
| <code><a href="#aws-dsf.EmrRuntimeVersion.V5_32">V5_32</a></code> | *No description.* |

---

##### `V6_12` <a name="V6_12" id="aws-dsf.EmrRuntimeVersion.V6_12"></a>

---


##### `V6_11_1` <a name="V6_11_1" id="aws-dsf.EmrRuntimeVersion.V6_11_1"></a>

---


##### `V6_11` <a name="V6_11" id="aws-dsf.EmrRuntimeVersion.V6_11"></a>

---


##### `V6_10_1` <a name="V6_10_1" id="aws-dsf.EmrRuntimeVersion.V6_10_1"></a>

---


##### `V6_10` <a name="V6_10" id="aws-dsf.EmrRuntimeVersion.V6_10"></a>

---


##### `V6_9` <a name="V6_9" id="aws-dsf.EmrRuntimeVersion.V6_9"></a>

---


##### `V6_8` <a name="V6_8" id="aws-dsf.EmrRuntimeVersion.V6_8"></a>

---


##### `V6_7` <a name="V6_7" id="aws-dsf.EmrRuntimeVersion.V6_7"></a>

---


##### `V6_6` <a name="V6_6" id="aws-dsf.EmrRuntimeVersion.V6_6"></a>

---


##### `V6_5` <a name="V6_5" id="aws-dsf.EmrRuntimeVersion.V6_5"></a>

---


##### `V6_4` <a name="V6_4" id="aws-dsf.EmrRuntimeVersion.V6_4"></a>

---


##### `V6_3` <a name="V6_3" id="aws-dsf.EmrRuntimeVersion.V6_3"></a>

---


##### `V6_2` <a name="V6_2" id="aws-dsf.EmrRuntimeVersion.V6_2"></a>

---


##### `V5_33` <a name="V5_33" id="aws-dsf.EmrRuntimeVersion.V5_33"></a>

---


##### `V5_32` <a name="V5_32" id="aws-dsf.EmrRuntimeVersion.V5_32"></a>

---


### SparkImage <a name="SparkImage" id="aws-dsf.SparkImage"></a>

The list of supported Spark images to use in the SparkCICDPipeline.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-dsf.SparkImage.EMR_6_12">EMR_6_12</a></code> | *No description.* |
| <code><a href="#aws-dsf.SparkImage.EMR_6_11">EMR_6_11</a></code> | *No description.* |
| <code><a href="#aws-dsf.SparkImage.EMR_6_10">EMR_6_10</a></code> | *No description.* |
| <code><a href="#aws-dsf.SparkImage.EMR_6_9">EMR_6_9</a></code> | *No description.* |

---

##### `EMR_6_12` <a name="EMR_6_12" id="aws-dsf.SparkImage.EMR_6_12"></a>

---


##### `EMR_6_11` <a name="EMR_6_11" id="aws-dsf.SparkImage.EMR_6_11"></a>

---


##### `EMR_6_10` <a name="EMR_6_10" id="aws-dsf.SparkImage.EMR_6_10"></a>

---


##### `EMR_6_9` <a name="EMR_6_9" id="aws-dsf.SparkImage.EMR_6_9"></a>

---

