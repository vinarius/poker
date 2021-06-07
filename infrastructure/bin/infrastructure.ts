#!/usr/bin/env node
import 'source-map-support/register';
import {App} from '@aws-cdk/core';
import { InfrastructureStack } from '../lib/infrastructure-stack';
process.env.AWS_PROFILE='vf-team7';

const app = new App();
new InfrastructureStack(app, 'InfrastructureStack');
