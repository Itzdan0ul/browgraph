'use strict';

/**
 * @type {Promise<{}>}
 */
const getMessageHandler = () => {
  window.electronAPI.invoke('main:i18n', ['GET_MESSAGE']);
  return new Promise((resolve) => {
    window.electronAPI.once('renderer:i18n:get-message', (message) => {
      resolve(message);
    });
  });
};

/**
 * @type {void}
 * @param {string} locale
 */
const selectLocaleHandler = (locale) => {
  window.electronAPI.invoke('main:i18n', ['SELECT_LOCALE', locale]);
};

/**
 *
 * @type {Promise<string>}
 */

const getCurrentLocaleHandler = () => {
  window.electronAPI.invoke('main:i18n', ['GET_CURRENT_LOCALE']);
  return new Promise((resolve) => {
    window.electronAPI.once('renderer:i18n:get-locale', (locale) => {
      resolve(locale);
    });
  });
};

export { getMessageHandler, selectLocaleHandler, getCurrentLocaleHandler };
