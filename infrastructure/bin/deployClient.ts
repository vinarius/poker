import {
  S3Client,
  
} from '@aws-sdk/client-s3';

import config from '../config';

const {
  profile,
  region
} = config;

process.env.AWS_PROFILE = profile;

const s3 = new S3Client({
  region
});

