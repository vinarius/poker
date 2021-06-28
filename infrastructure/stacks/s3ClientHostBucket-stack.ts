// import {resolve} from 'path';

import {
  Construct,
  RemovalPolicy,
  StackProps,
  Stack
} from '@aws-cdk/core';
import {Bucket} from '@aws-cdk/aws-s3';

interface ClientHostBucketProps extends StackProps {
  clientHostBucketId: string;
}

export class S3ClientHostBucketStack extends Stack {
  constructor(scope: Construct, id: string, props: ClientHostBucketProps) {
    super(scope, id, props);

    const {
      clientHostBucketId
    } = props;

    new Bucket(this, clientHostBucketId, {
      // TODO: look up best practices here
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
      publicReadAccess: true,
      enforceSSL: true,
      websiteIndexDocument: 'index.html',
      bucketName: clientHostBucketId
    });
  }
}
