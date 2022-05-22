import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  invoke: (channel: string, data: any): void => {
    const channels: string[] = ['main:i18n', 'main:folder'];

    if (channels.includes(channel)) {
      ipcRenderer.invoke(channel, data);
    }
  },
  once: (channel: string, func: Function): void => {
    const channels: string[] = [
      'renderer:i18n:get-message',
      'renderer:i18n:get-locale',
      'renderer:folder:load-pdf',
      'renderer:folder:get-pdf',
    ];

    if (channels.includes(channel)) {
      ipcRenderer.once(
        channel,
        (event: Electron.IpcRendererEvent, ...args: any) => func(...args)
      );
    }
  },
  on: (channel: string, func: Function): void => {
    let channels: string[] = [];

    if (channels.includes(channel)) {
      ipcRenderer.on(
        channel,
        (event: Electron.IpcRendererEvent, ...args: any) => func(...args)
      );
    }
  },
});
