import { AppArguments } from '../src/AppArguments';

describe('AppArguments', () => {
  let originalProcess: NodeJS.Process;

  beforeEach(() => {
    originalProcess = process;
  });

  afterEach(() => {
    // eslint-disable-next-line no-global-assign
    process = originalProcess;
  });

  it('can be instantiated with no arguments', async () => {
    const appArguments = new AppArguments([]);
    expect(appArguments.args).toHaveLength(0);
  });

  it('can be instantiated with with default arguments', async () => {
    const appArguments = new AppArguments([{
      shortName: 't',
      longName: 'text',
      description: 'A text',
      value: 'hello',
    }]);
    expect(appArguments.args).toHaveLength(1);
    expect(appArguments.args[0].value).toBe('hello');
  });

  it('can be instantiated with with default arguments and overridden with environment variables', async () => {
    process.env.t = 'world';
    const appArguments = new AppArguments([{
      shortName: 't',
      longName: 'text',
      description: 'A text',
      value: 'hello',
    }]);
    expect(appArguments.args).toHaveLength(1);
    expect(appArguments.args[0].value).toBe('world');
  });
});
