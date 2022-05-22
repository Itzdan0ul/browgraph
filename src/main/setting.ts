import path from 'path';
import fs from 'fs-extra';
import { app } from 'electron';

class Setting {
  private readonly pathFile: string = path.join(
    app.getPath('appData'),
    'browgraph/settings.json'
  );
  private customSettings: any = {
    colorScheme: 'light',
    savedFile: '',
    fontScale: 16,
    locale: 'en-US',
  };

  public constructor() {
    if (!fs.existsSync(this.pathFile)) {
      fs.writeJSONSync(this.pathFile, this.customSettings, {
        encoding: 'utf8',
        spaces: 2,
      });
    }
  }

  public readAppSettingsFile(): any {
    return fs.readJSONSync(this.pathFile, { encoding: 'utf8' });
  }

  public updateValue(option: string, data: any): void {
    let customSettings = this.readAppSettingsFile();

    switch (option) {
      case 'colorScheme':
        customSettings.colorScheme = data;
        break;
      case 'savedFile':
        customSettings.savedFile = data;
        break;
      case 'fontScale':
        customSettings.fontScale = data;
        break;
      case 'locale':
        customSettings.locale = data;
      default:
    }

    fs.writeJSONSync(this.pathFile, customSettings, {
      encoding: 'utf8',
      spaces: 2,
    });
  }
}

export { Setting };
