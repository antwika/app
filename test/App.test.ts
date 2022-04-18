import { App } from '../src/App';

describe('App', () => {
  // eslint-disable-next-line jest/expect-expect
  it('can be started and stopped', async () => {
    const app = new App({ name: 'Test app', services: [] });
    await app.start();
    await app.stop();
  });
});
