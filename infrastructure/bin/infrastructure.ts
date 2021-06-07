#!/usr/bin/env node
import 'source-map-support/register';
import {App} from '@aws-cdk/core';
import { S3ClientHostBucketStack } from '../lib/s3ClientHostBucket-stack';

import config from '../config';
const {
  project,
  profile
} = config;

process.env.AWS_PROFILE=profile;

const app = new App();
new S3ClientHostBucketStack(app, 'S3ClientHostBucketStack', {
  project
});
