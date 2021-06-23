import {
  Construct,
  CfnOutput,
  StackProps,
  Stack
} from '@aws-cdk/core';
import {CloudFrontWebDistribution} from '@aws-cdk/aws-cloudfront';
import { Bucket } from '@aws-cdk/aws-s3';

interface CloudfrontProps extends StackProps {
  project: string;
  bucketOrigin: Bucket
}

export class CloudfrontStack extends Stack {
  constructor(scope: Construct, id: string, props: CloudfrontProps) {
    super(scope, id, props);

    const {
      bucketOrigin,
      project
    } = props;

    const cloudfrontDistro = new CloudFrontWebDistribution(this, `kraus-${project}-cloudfrontdistro`, {
      comment: `cloudfrontTesting`,
      originConfigs: [
        {
          behaviors: [
            {
              isDefaultBehavior: true
            }
          ],
          s3OriginSource: {
            s3BucketSource: bucketOrigin as Bucket
          }
        }
      ]
    });

    new CfnOutput(this, 'cloudfrontdistroOutput', {
      value: cloudfrontDistro.distributionDomainName,
      description: 'Domain name of the cloudfront distribution'
    });
  }
}