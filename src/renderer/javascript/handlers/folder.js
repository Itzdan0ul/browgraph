'use strict';

/**
 * @type {Promise<string>}
 */
const loadPdfHandler = () => {
  window.electronAPI.invoke('main:folder', ['LOAD_PDF']);
  return new Promise((resolve) => {
    window.electronAPI.once('renderer:folder:load-pdf', (pdfPath) => {
      if (pdfPath !== undefined) resolve(pdfPath);
    });
  });
};

/**
 * @type {Promise<string>}
 */
const getPdfPathHandler = () => {
  window.electronAPI.invoke('main:folder', ['GET_PDF_PATH']);
  return new Promise((resolve) => {
    window.electronAPI.once('renderer:folder:get-pdf', (pdfPath) => {
      resolve(pdfPath);
    });
  });
};

export { loadPdfHandler, getPdfPathHandler };
