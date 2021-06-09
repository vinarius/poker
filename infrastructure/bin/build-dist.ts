import {exec} from '../lib/utils';
import {resolve} from 'path';
import {promises as fs} from 'fs';

(async () => {
  const {
    mkdir
  } = fs;

  const distPath = resolve(__dirname, '..', '..', 'dist');
  const clientBuildSource = resolve(__dirname, '..', '..', 'client', 'build');
  const clientBuildDestination = resolve(__dirname, '..', '..', 'dist', 'client');

  await mkdir(distPath, {recursive: true});

  await exec(`cp ${clientBuildSource} ${clientBuildDestination} -r`);
})();