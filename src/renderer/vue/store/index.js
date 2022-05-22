'use strict';

import { createStore } from 'vuex';
import { form } from './modules/form.js';
import { page } from './modules/page.js';
import { modal } from './modules/modal.js';
import { i18n } from './modules/i18n.js';
import { settings } from './modules/settings.js';
import { folder } from './modules/folder.js';

const store = createStore({
  strict: true,
  modules: {
    page,
    settings,
    modal,
    form,
    i18n,
    folder,
  },
});

export { store };
