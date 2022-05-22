'use strict';

import {
  GET_MESSAGE,
  SELECT_LOCALE,
  GET_CURRENT_LOCALE,
} from '../mutation-types.js';
import {
  getMessageHandler,
  selectLocaleHandler,
  getCurrentLocaleHandler,
} from '@renderer/javascript/handlers/i18n.js';

const i18n = {
  namespaced: true,
  state() {
    return {
      locale: [],
      message: {},
    };
  },
  mutations: {
    [GET_MESSAGE](state, data) {
      const { message } = data;
      state.message = message;
    },
    [SELECT_LOCALE](state, locale) {
      if (!state.locale.includes(locale)) state.locale.push(locale);
      state.locale = state.locale.filter((i) => i === locale);

      selectLocaleHandler(state.locale[0].toString());
    },
    [GET_CURRENT_LOCALE](state, data) {
      state.locale = [data];
    },
  },
  actions: {
    async getMessage({ commit }) {
      const data = await getMessageHandler();
      commit('GET_MESSAGE', data);
    },
    async getCurrentLocale({ commit }) {
      const data = await getCurrentLocaleHandler();
      commit('GET_CURRENT_LOCALE', data);
    },
  },
};

export { i18n };
