import { ipcMain } from 'electron';
import { Folder } from '@main/application';

ipcMain.handle(
  'main:folder',
  async (event: Electron.IpcMainInvokeEvent, args: any) => {
    switch (args[0]) {
      case 'LOAD_PDF':
        event.sender.send('renderer:folder:load-pdf', await loadPdfHandler());
        break;
      case 'GET_PDF_PATH':
        event.sender.send('renderer:folder:get-pdf', getPdfPathHandler());
        break;
      default:
    }
  }
);

const loadPdfHandler = async (): Promise<string | undefined> => {
  return await Folder.loadPdf();
};

const getPdfPathHandler = (): string => {
  return Folder.getPdfPath();
};
