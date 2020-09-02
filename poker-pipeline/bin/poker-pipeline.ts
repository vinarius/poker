#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PokerPipelineStack } from '../lib/poker-pipeline-stack';

const app = new cdk.App();
new PokerPipelineStack(app, 'PokerPipelineStack');
