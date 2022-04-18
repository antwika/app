import { Service } from '@antwika/common';

export class App extends Service {
  async onStart() {
    console.log(`App[${this.name}] starting...`);
  }

  async onStop() {
    console.log(`App[${this.name}] stopping...`);
  }
}
