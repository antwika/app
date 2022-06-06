import { ComponentsManager } from 'componentsjs';
import { App } from './App';

export class AppRunner {
  async run(process: NodeJS.Process) {
    const manager = await ComponentsManager.build({
      mainModulePath: process.cwd(),
    });

    const keys = Object.keys(process.env).filter((key) => key.startsWith('APP_'));
    const variables = keys.reduce((acc, key) => {
      acc[`urn:antwika:app:args:${key}`] = process.env[key] as string;
      return acc;
    }, {} as Record<string, string>);

    await manager.configRegistry.register('config/config.jsonld');

    const myApp: App = await manager.instantiate('urn:antwika:app:App', { variables });
    await myApp.start();
  }
}
