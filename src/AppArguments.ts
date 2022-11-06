import yargs from 'yargs';
import { AppArgument } from './AppArgument';

export class AppArguments {
  public readonly args: AppArgument[];

  constructor(args: AppArgument[]) {
    console.warn('Deprecated: Do not use "appArguments" anymore, instead use environment variables starting with prefix APP_');
    this.args = args;

    const y = yargs(process.argv.slice(2)).env('');
    this.args.forEach((arg) => y.option(arg.shortName, {
      alias: arg.longName,
      describe: arg.description,
      default: arg.value,
      type: 'string',
    }));

    const argv = y.parseSync();
    this.args = this.args.map((arg) => ({
      ...arg,
      value: argv[arg.shortName] as string,
    }));
  }
}
