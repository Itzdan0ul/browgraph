import path from 'path';
import fs from 'fs-extra';
import { Setting } from '@main/setting';

class I18n {
  public static get availableLocales(): Array<string> {
    return ['en-US', 'es-MX'];
  }

  public static getMessage(): {} {
    const localesPathFile: string = path.join(__dirname, '../../../locales/');
    const message: any = fs.readJSONSync(
      localesPathFile + `${this.getCurrentLocale()}.json`
    );

    return { message };
  }

  public static selectLocale(selectedLocale: string): void {
    const setting: Setting = new Setting();
    setting.updateValue('locale', selectedLocale);
  }

  public static getCurrentLocale(): string {
    const setting: Setting = new Setting();
    const { locale } = setting.readAppSettingsFile();

    return locale;
  }
}

export { I18n };
