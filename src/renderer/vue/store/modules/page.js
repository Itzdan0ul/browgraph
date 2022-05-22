'use strict';

import { RENDER_PAGE } from '../mutation-types.js';

const page = {
  namespaced: true,
  state() {
    return {
      active: ['home'],
    };
  },
  mutations: {
    [RENDER_PAGE](state, page) {
      if (!state.active.includes(page)) state.active.push(page);
      state.active = state.active.filter((i) => i === page);
    },
  },
};

export { page };
