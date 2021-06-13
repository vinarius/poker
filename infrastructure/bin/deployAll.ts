import {exec} from '../lib/utils';
import config from '../config';
const {
  profile
} = config;

async function deployInfrastructure(): Promise<void> {
  try {
    console.log('Attempting deployment');
    await exec(`npm run cdk -- deploy --require-approval never --profile ${profile}`);
    console.log('Deployment has completed successfully');
  } catch (error) {
    console.log('an error has occurred during the deployment');
    console.error(error);
    process.exit(1);
  }
}

if(require.main === module) {
  deployInfrastructure();
}