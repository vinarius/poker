import {exec as EXEC} from 'child_process';

export function exec(command: string, logToConsole: boolean = true): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    function stdoutHandler(data: string) {
      if(logToConsole) {
        console.log(data);
      }
    }

    function stderrHandler(data: string) {
      if (logToConsole) {
        console.error(data);
      }
    }

    const child = EXEC(command, (err, results) => {
      if (err) {
        return reject(err);
      }

      resolve(results);
    });

    child.stdout?.on('data', stdoutHandler);
    child.stdout?.on('data', stderrHandler);

    child.once('exit', (code) => {
      if (code !== 0) {
        process.exit(1);
      }

      child.stdout?.removeListener('data', stdoutHandler);
      child.stderr?.removeListener('data', stderrHandler);
    });
  });
}