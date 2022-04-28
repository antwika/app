import { AppArgument } from '../src/AppArgument';

describe('AppArgument', () => {
  it('can be instantiated', async () => {
    const appArgument = new AppArgument({
      shortName: 't',
      longName: 'text',
      description: 'A text',
      value: 'hello',
    });

    expect(appArgument.shortName).toBe('t');
    expect(appArgument.longName).toBe('text');
    expect(appArgument.description).toBe('A text');
    expect(appArgument.value).toBe('hello');
  });
});
