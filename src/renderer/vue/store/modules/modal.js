'use strict';

import { RENDER_MODAL, RENDER_FORM } from '../mutation-types.js';

const modal = {
  namespaced: true,
  state() {
    return {
      name: [''],
      forms: ['add'],
    };
  },
  mutations: {
    [RENDER_MODAL](state, modalName) {
      if (!state.name.includes(modalName)) state.name.push(modalName);
      state.name = state.name.filter((i) => i === modalName);
    },
    [RENDER_FORM](state, formName) {
      if (!state.forms.includes(formName)) state.forms.push(formName);
      state.forms = state.forms.filter((i) => i === formName);
    },
  },
};

export { modal };
