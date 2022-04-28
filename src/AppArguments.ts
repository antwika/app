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

    this.args = this.args.map((arg) => ({ ...arg, value: y.argv[arg.shortName] }));
  }
}
