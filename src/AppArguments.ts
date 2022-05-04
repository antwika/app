import yargs from 'yargs';
import { AppArgument } from './AppArgument';

export class AppArguments {
  public readonly args: AppArgument[];

  constructor(args: AppArgument[]) {
    this.args = args;

    const y = yargs(process.argv.slice(2)).env('');
    this.args.forEach((arg) => y.option(arg.shortName, {
      alias: arg.longName,
      describe: arg.description,
      default: arg.value,
      type: 'string',
    }));

    // Appears that the y.argv may 'sometimes' be a Promise, it's unclear
    // currently when this is might be, and if it's a problem for the application.
    // See issue on this topic: https://github.com/yargs/yargs/issues/2175
    // TODO: Address issue accordingly to response, e.g.:
    // 1. Utilize yargs parsing in a synchronous way (if possible)
    // 2. Or move the yargs parsing via an async getter function
    const argv = y.argv as any;

    this.args = this.args.map((arg) => ({
      ...arg,
      value: argv[arg.shortName] as string,
    }));
  }
}
