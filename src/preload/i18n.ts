import { ipcMain } from 'electron';
import { I18n } from '@main/window/i18n';

ipcMain.handle(
  'main:i18n',
  async (event: Electron.IpcMainInvokeEvent, args: any) => {
    switch (args[0]) {
      case 'GET_MESSAGE':
        event.sender.send(
          'renderer:i18n:get-message',
          await getMessageHandler()
        );
        break;
      case 'SELECT_LOCALE':
        selectLocaleHandler(args[1]);
        break;
      case 'GET_CURRENT_LOCALE':
        event.sender.send(
          'renderer:i18n:get-locale',
          getCurrentLocaleHandler()
        );
        break;
      default:
    }
  }
);

const getMessageHandler = async (): Promise<{}> => {
  return I18n.getMessage();
};

const selectLocaleHandler = (data: string): void => {
  I18n.selectLocale(data);
};

const getCurrentLocaleHandler = (): string => {
  return I18n.getCurrentLocale();
};
