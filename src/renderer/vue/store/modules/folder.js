'use strict';

import { LOAD_PDF, GET_PDF_PATH } from '../mutation-types.js';
import {
  loadPdfHandler,
  getPdfPathHandler,
} from '@renderer/javascript/handlers/folder.js';

const folder = {
  namespaced: true,
  state() {
    return {
      pdfPath: undefined,
    };
  },
  mutations: {
    [LOAD_PDF](state, pdfPath) {
      state.pdfPath = pdfPath;
    },
    [GET_PDF_PATH](state, newPdfPath) {
      state.pdfPath = newPdfPath;
    },
  },
  actions: {
    async loadPdf({ commit }) {
      const pdfPath = await loadPdfHandler();
      commit('LOAD_PDF', pdfPath);
    },
    async getPdfPath({ commit }) {
      const newPdfPath = await getPdfPathHandler();
      commit('GET_PDF_PATH', newPdfPath);
    },
  },
};

export { folder };
