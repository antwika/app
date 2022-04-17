import { IServiceArgs, Service } from '@antwika/common';

export class App extends Service {
  constructor(args: IServiceArgs) {
    super(args);
  }

  async onStart() {
    console.log(`App[${this.name}] starting...`);
  }

  async onStop() {
    console.log(`App[${this.name}] stopping...`);
  }
}
