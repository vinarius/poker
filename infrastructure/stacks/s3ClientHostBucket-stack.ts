// import {resolve} from 'path';

import {
  Construct,
  RemovalPolicy,
  StackProps,
  Stack
} from '@aws-cdk/core';
import {Bucket} from '@aws-cdk/aws-s3';

interface ClientHostBucketProps extends StackProps {
  project: string;
}

export class S3ClientHostBucketStack extends Stack {
  constructor(scope: Construct, id: string, props: ClientHostBucketProps) {
    super(scope, id, props);

    const {
      project
    } = props;

    new Bucket(this, `kraus-${project}-clienthostbucket`, {
      // TODO: look up best practices here
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
      publicReadAccess: true,
      // TODO: set to true once hooked up to cloudfront
      enforceSSL: false,
      // TODO: cdk expects index.html to be available in the bucket - throws an error on stack create
      // Not sure how to create bucket and put build on stack initialize
      // websiteIndexDocument: resolve(__dirname, '..', '..', 'dist', 'client', 'index.html'),
      websiteIndexDocument: 'index.html',
      bucketName: `kraus-${project}-clienthostbucket`
    });
  }
}
