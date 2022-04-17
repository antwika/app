import { AppRunner } from '../src/AppRunner';

const app = { start: jest.fn() };
const instantiate = jest.fn(() => app);
const configRegistry = {
  register: jest.fn(),
};

jest.mock('componentsjs', () => ({
  ComponentsManager: {
    build: jest.fn(() => ({
      configRegistry,
      instantiate,
    })),
  }
}));

describe('AppRunner', () => {
  it('can be started and stopped', async () => {
    const appRunner = new AppRunner();
    await appRunner.run(process);
    expect(configRegistry.register).toHaveBeenCalledWith('config/config.jsonld');
    expect(instantiate).toHaveBeenCalledWith('urn:antwika:app:App');
    expect(app.start).toHaveBeenCalledTimes(1);
  });
});
