import { IServiceArgs, Service } from '@antwika/common';
import { AppArguments } from './AppArguments';

export interface IAppArgs extends IServiceArgs {
  appArguments?: AppArguments;
}

export class App extends Service {
  private readonly appArguments: AppArguments;

  constructor(args: IAppArgs) {
    super(args);
    this.appArguments = args.appArguments || { args: [] };
  }

  async onStart() {
    console.log(`App[${this.name}] starting with arguments: ${JSON.stringify(this.appArguments, null, 2)}`);
  }

  async onStop() {
    console.log(`App[${this.name}] stopping...`);
  }
}
