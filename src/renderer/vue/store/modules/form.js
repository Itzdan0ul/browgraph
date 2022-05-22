'use strict';

import { RENDER_FORM } from '../mutation-types.js';

const form = {
  namespaced: true,
  state() {
    return {
      forms: ['add'],
    };
  },
  mutations: {
    [RENDER_FORM](state, formName) {
      if (!state.forms.includes(formName)) state.forms.push(formName);
      state.forms = state.forms.filter((i) => i === formName);
    },
  },
};

export { form };
