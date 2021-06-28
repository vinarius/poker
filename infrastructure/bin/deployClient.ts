import {
  ListBucketsCommand,
  // ListBucketsCommandOutput,
  S3Client
} from '@aws-sdk/client-s3';

const s3 = new S3Client({});

export async function deployClient(): Promise<void> {
  const listBucketsCommand = new ListBucketsCommand({});
  const buckets = await s3.send(listBucketsCommand);
  console.log('bucketsOutput:', buckets);
}