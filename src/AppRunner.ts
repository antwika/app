import { ComponentsManager } from 'componentsjs';
import { App } from './App';

export class AppRunner {
  async run(process: NodeJS.Process) {
    const manager = await ComponentsManager.build({
      mainModulePath: process.cwd(),
    });

    await manager.configRegistry.register('config/config.jsonld');

    const myApp: App = await manager.instantiate('urn:antwika:app:App');
    await myApp.start();
  }
}
