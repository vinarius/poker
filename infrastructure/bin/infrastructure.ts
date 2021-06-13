#!/usr/bin/env node
import 'source-map-support/register';
import {App} from '@aws-cdk/core';

// Stacks
import { S3ClientHostBucketStack } from '../stacks/s3ClientHostBucket-stack';
import {CloudfrontStack} from '../stacks/cloudfront-stack';

import config from '../config';
import { Bucket } from '@aws-cdk/aws-s3';
const {
  project,
  profile
} = config;

process.env.AWS_PROFILE=profile;

const app = new App();
const s3HostingBucketStack = new S3ClientHostBucketStack(app, 'S3ClientHostBucketStack', {
  project
});

new CloudfrontStack(app, 'CloudfrontStack', {
  bucketOrigin: s3HostingBucketStack.node.findChild(`kraus-${project}-clienthostbucket`) as Bucket,
  project
});