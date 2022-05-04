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

  public readonly value: string;

  constructor(args: IAppArgument) {
    this.shortName = args.shortName;
    this.longName = args.longName;
    this.description = args.description;
    this.value = args.value;
  }
}
