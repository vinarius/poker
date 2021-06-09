import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import {S3ClientHostBucketStack} from '../stacks/s3ClientHostBucket-stack';

// test('Empty Stack', () => {
//     const app = new cdk.App();
//     // WHEN
//     const stack = new S3ClientHostBucketStack(app, 'MyTestStack');
//     // THEN
//     expectCDK(stack).to(matchTemplate({
//       "Resources": {}
//     }, MatchStyle.EXACT))
// });
