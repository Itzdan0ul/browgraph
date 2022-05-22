'use strict';

import { RENDER_SECTION, SET_FONT } from '../mutation-types.js';

const settings = {
  namespaced: true,
  state() {
    return {
      section: ['appearance'],
      font: 16,
      zoom: 100,
    };
  },
  mutations: {
    [RENDER_SECTION](state, section) {
      if (!state.section.includes(section)) state.section.push(section);
      state.section = state.section.filter((i) => i === section);
    },
    [SET_FONT](state, fontSize) {
      state.font = fontSize;
    },
  },
};

export { settings };
