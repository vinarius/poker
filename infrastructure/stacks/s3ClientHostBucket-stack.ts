import {resolve} from 'path';

import {Construct, StackProps, Stack} from '@aws-cdk/core';
import {Bucket} from '@aws-cdk/aws-s3';

interface clientHostBucketProps extends StackProps {
  project: string;
}

export class S3ClientHostBucketStack extends Stack {
  constructor(scope: Construct, id: string, props: clientHostBucketProps) {
    super(scope, id, props);

    const {
      project
    } = props;

    const clientHostBucket = new Bucket(this, `kraus-${project}-clienthostbucket`, {
      // TODO: look up best practices here
      publicReadAccess: true,
      enforceSSL: true,
      // TODO: create npm run build script
      websiteIndexDocument: resolve(__dirname, '..', 'dist', 'client', 'index.html'),
      bucketName: `kraus-${project}-clienthostbucket`
    });
  }
}
