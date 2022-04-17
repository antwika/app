#!/usr/bin/env node

const { AppRunner } = require('../dist/AppRunner');

const appRunner = new AppRunner();

(async () => {
  await appRunner.run(process);
})();
