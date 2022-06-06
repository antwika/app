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
  },
}));

describe('AppRunner', () => {
  const originalProcessEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalProcessEnv };
  });

  afterEach(() => {
    jest.clearAllMocks();
    process.env = originalProcessEnv;
  });

  it('can be started and stopped', async () => {
    const appRunner = new AppRunner();
    await appRunner.run(process);
    expect(configRegistry.register).toHaveBeenCalledWith('config/config.jsonld');
    expect(instantiate).toHaveBeenCalledWith('urn:antwika:app:App', { variables: {} });
    expect(app.start).toHaveBeenCalledTimes(1);
  });

  it('can be started with environment variables', async () => {
    const appRunner = new AppRunner();
    process.env.APP_VARIABLE = '123';
    await appRunner.run(process);
    expect(configRegistry.register).toHaveBeenCalledWith('config/config.jsonld');
    expect(instantiate).toHaveBeenCalledWith('urn:antwika:app:App', { variables: { 'urn:antwika:app:args:APP_VARIABLE': '123' } });
    expect(app.start).toHaveBeenCalledTimes(1);
  });
});
