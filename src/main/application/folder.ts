import path from 'path';
import fs from 'fs-extra';
import { app, dialog } from 'electron';
import { Setting } from '@main/setting';

class Folder {
  private static readonly filesPath: string = path.join(
    app.getPath('appData'),
    'browgraph/files/Folder.pdf'
  );

  public static async loadPdf(): Promise<string | undefined> {
    const setting = new Setting();
    const result = await dialog.showOpenDialog({
      filters: [{ name: 'PDF', extensions: ['pdf'] }],
    });

    const pdfPath: string = result.filePaths[0];

    if (result.canceled) {
      return;
    } else {
      this.movePdfFile(pdfPath);
      setting.updateValue('savedFile', this.filesPath);
    }

    return pdfPath;
  }

  public static getPdfPath(): string {
    const setting: Setting = new Setting();
    const { savedFile } = setting.readAppSettingsFile();

    return savedFile;
  }

  private static movePdfFile(currentPath: string): void {
    fs.copyFileSync(currentPath, this.filesPath);
  }
}

export { Folder };
