import {
  Construct,
  StackProps,
  Stack
} from '@aws-cdk/core';

interface CloudfrontProps extends StackProps {
  profile: string;
  project: string;
}

export class CloudfrontStack extends Stack {
  constructor(scope: Construct, id: string, props: CloudfrontProps) {
    super(scope, id, props);

    
  }
}