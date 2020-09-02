import * as cdk from '@aws-cdk/core';
import * as CodePipeline from '@aws-cdk/aws-codepipeline';
import * as CodePipeLineActions from '@aws-cdk/aws-codepipeline-actions';
import * as SecretsManager from '@aws-cdk/aws-secretsmanager';

export class PokerPipelineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sourceOutput: CodePipeline.Artifact = new CodePipeline.Artifact('sourceOutput');

    const pokerPipeline: CodePipeline.Pipeline = new CodePipeline.Pipeline(this, 'poker-pipeline', {
      stages: [
        {
          stageName: 'source',
          actions: [
            new CodePipeLineActions.GitHubSourceAction({
              repo: 'poker',
              branch: 'master',
              owner: 'vinarius',
              actionName: 'source',
              oauthToken: 'somevalue', // follow up on this
              output: sourceOutput
            })
          ]
        }
      ]
    });
  }
}
