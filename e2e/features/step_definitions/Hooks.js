import {Before, BeforeAll, AfterAll} from '@cucumber/cucumber';
import {init, cleanup} from 'detox/internals';
import {device} from 'detox';

BeforeAll(async () => {
  await init();
});

Before(async () => {
  await device.launchApp({newInstance: true});
});

AfterAll(async () => {
  await cleanup();
});
