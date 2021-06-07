import * as cdk from '@aws-cdk/core';
import * as CodePipeline from '@aws-cdk/aws-codepipeline';
import * as CodePipeLineActions from '@aws-cdk/aws-codepipeline-actions';
import * as CodeBuild from '@aws-cdk/aws-codebuild';
import * as S3 from '@aws-cdk/aws-s3';

export class PokerPipelineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    if(process.env['GITHUBTOKEN'] === undefined) {
      console.log('Environment variable "GITHUBTOKEN" is not set and will cause an error fetching source.');
    }

    const githubToken: string = process.env['GITHUBTOKEN'] ?? '';

    const pokerBucket: S3.Bucket = new S3.Bucket(this, 'poker-bucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      encryption: S3.BucketEncryption.UNENCRYPTED
    });

    const uiBuild: CodeBuild.PipelineProject = new CodeBuild.PipelineProject(this, 'uiBuild', {
      buildSpec: CodeBuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            commands: [
              'cd poker-ui',
              'npm i'
            ]
          },
          build: {
            commands: [
              'npm run build'
            ]
          }
        },
        artifacts: {
          'base-directory': 'poker-ui/build',
          files: [
            'static/**/*',
            'index.html'
          ],
        },
        cache: {
          'base-directory': 'poker-ui',
          paths: [
            'node_modules/**/*'
          ]
        }
      }),
      environment: {
        buildImage: CodeBuild.LinuxBuildImage.AMAZON_LINUX_2_3
      }
    });

    const sourceOutput: CodePipeline.Artifact = new CodePipeline.Artifact('sourceOutput');
    const uiBuildOutput: CodePipeline.Artifact = new CodePipeline.Artifact('uiBuildOutput');

    new CodePipeline.Pipeline(this, 'poker-pipeline', {
      stages: [
        {
          stageName: 'Source',
          actions: [
            new CodePipeLineActions.GitHubSourceAction({
              repo: 'poker',
              branch: 'master',
              owner: 'vinarius',
              actionName: 'source',
              oauthToken: cdk.SecretValue.plainText(githubToken),
              output: sourceOutput,
            })
          ]
        },
        {
          stageName: 'Build',
          actions: [
            new CodePipeLineActions.CodeBuildAction({
              actionName: 'ui_build',
              project: uiBuild,
              input: sourceOutput,
              outputs: [uiBuildOutput]
            })
          ]
        },
        {
          stageName: 'Deploy',
          actions: [
            new CodePipeLineActions.S3DeployAction({
              actionName: 'ui_deploy',
              bucket: pokerBucket,
              input: uiBuildOutput
            })
          ]
        }
      ]
    });
  }
}
