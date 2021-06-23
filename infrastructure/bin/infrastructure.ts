#!/usr/bin/env node
import 'source-map-support/register';
import {App} from '@aws-cdk/core';

// Stacks
import { S3ClientHostBucketStack } from '../stacks/s3ClientHostBucket-stack';
import {CloudfrontStack} from '../stacks/cloudfront-stack';

import config from '../config';
import { Bucket } from '@aws-cdk/aws-s3';
const {
  project
} = config;

const app = new App();

const clientHostBucketId = `kraus-${project}-clienthostbucket`;
const s3HostingBucketStack = new S3ClientHostBucketStack(app, 'S3ClientHostBucketStack', {
  clientHostBucketId
});

new CloudfrontStack(app, 'CloudfrontStack', {
  bucketOrigin: s3HostingBucketStack.node.findChild(`kraus-${project}-clienthostbucket`) as Bucket,
  project
});