// eslint-disable-next-line max-classes-per-file
import yargs from 'yargs';

export interface IAppArgument {
  shortName: string;
  longName: string;
  description: string;
  value: string;
}

export class AppArgument implements IAppArgument {
  public readonly shortName: string;

  public readonly longName: string;

  public readonly description: string;

  public readonly value: any;

  constructor(args: IAppArgument) {
    this.shortName = args.shortName;
    this.longName = args.longName;
    this.description = args.description;
    this.value = args.value;
  }
}

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

    this.args = this.args.map((arg) => {
      if (y.argv[arg.shortName]) {
        return { ...arg, value: y.argv[arg.shortName] };
      }
      return arg;
    });
  }
}
