import path from 'path';
import { platform } from 'os';
import { Setting } from '@main/setting';
import { Extension } from '@main/lib/icon';
import { ColorScheme } from './colorScheme';
import { BrowserWindow, app, screen, nativeTheme } from 'electron';

class MainWindow implements ColorScheme {
  public async createWindow(): Promise<void> {
    const { height, width } = screen.getPrimaryDisplay().workAreaSize;
    const win: BrowserWindow = new BrowserWindow({
      show: false,
      height,
      width,
      webPreferences: {
        preload: path.join(__dirname, '../preload.js'),
        contextIsolation: true,
      },
    });

    if (process.env.NODE_ENV === 'development') {
      win.webContents.openDevTools();
    }

    win.once('ready-to-show', (): void => {
      win.show();
    });
    win.on('closed', (): void => {
      app.quit();
    });

    win.maximize();
    win.removeMenu();
    win.setIcon(this.loadIcon());
    win.loadFile(this.renderHtmlFile());

    this.loadAppSettings();
  }

  public setAppColorScheme(scheme: string): void {
    nativeTheme.themeSource = <any>scheme;
  }

  private loadIcon(): string {
    const { ico, png } = Extension;
    const iconPath: string = path.join(
      __dirname,
      '../../renderer/assets/images'
    );

    return path.join(
      iconPath,
      `browgraph.${platform() === 'win32' ? ico : png}`
    );
  }

  private renderHtmlFile(): string {
    return path.join(__dirname, '../../renderer/index.html');
  }

  private async loadAppSettings(): Promise<void> {
    const setting: Setting = new Setting();
    const { colorScheme } = setting.readAppSettingsFile();

    this.setAppColorScheme(colorScheme);
  }
}

export { MainWindow };
