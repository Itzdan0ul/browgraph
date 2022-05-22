import './helpers/customPaths';
import '@src/preload';
import { app } from 'electron';
import { initializeWindow } from '@main/window';

app
  .whenReady()
  .then(() => {
    initializeWindow();
  })
  .catch((reason) => {
    throw new Error(reason);
  });

app.on('web-contents-created', (event, contents) => {
  contents.on('will-navigate', (event) => event.preventDefault());
});
