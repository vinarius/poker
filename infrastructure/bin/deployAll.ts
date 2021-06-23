// import {exec} from '../lib/utils';
// import config from '../config';
// const {
//   profile
// } = config;
import {deployClient} from './deployClient';

async function deployInfrastructure(): Promise<void> {
  try {
    console.log('Attempting deployments');
    // const stackName = process.env.STACK ?? '--all';
    // await exec(`npm run cdk -- deploy ${stackName} --require-approval never --profile ${profile}`);
    await deployClient();
    console.log('All deployments have completed successfully');
  } catch (error) {
    console.log('an error has occurred during the deployment');
    console.error(error);
    process.exit(1);
  }
}

if(require.main === module) {
  deployInfrastructure();
}