import {exec} from '../lib/utils';
import config from '../config';
const {
  profile
} = config;

async function deploy(): Promise<void> {
  try {
    await exec(`npm run cdk -- deploy --require-approval never --profile ${profile}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

if(require.main === module) {
  deploy();
}