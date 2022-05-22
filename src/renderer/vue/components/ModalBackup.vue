<template>
  <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__root modal__root--backup">
      <div class="modal__header">
        <button
          class="btn modal__close-btn"
          type="button"
          @click="renderModal('')"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.725 4.28248C13.4325 3.98998 12.96 3.98998 12.6675 4.28248L9.00004 7.94248L5.33254 4.27498C5.04004 3.98248 4.56754 3.98248 4.27504 4.27498C3.98254 4.56748 3.98254 5.03998 4.27504 5.33248L7.94254 8.99998L4.27504 12.6675C3.98254 12.96 3.98254 13.4325 4.27504 13.725C4.56754 14.0175 5.04004 14.0175 5.33254 13.725L9.00004 10.0575L12.6675 13.725C12.96 14.0175 13.4325 14.0175 13.725 13.725C14.0175 13.4325 14.0175 12.96 13.725 12.6675L10.0575 8.99998L13.725 5.33248C14.01 5.04748 14.01 4.56748 13.725 4.28248Z"
              fill="#C1C1C1"
            />
          </svg>
        </button>
      </div>
      <div class="modal__body">
        <div class="modal__titles">
          <h2 class="modal__title">BACKUP COPY</h2>
          <p class="modal__description modal__description--backup"
            >Don't be afraid of losing your records, just make a backup copy and
            you will have absolute confidence that they will still be there. If
            you have a backup file you can upload it.</p
          >
        </div>
      </div>
      <div class="modal__options modal__options--backup">
        <button class="btn modal__btn--create" type="button">
          <span>CREATE COPY</span>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.6 26.7734C49.7867 17.5734 41.7067 10.6667 32 10.6667C24.2933 10.6667 17.6 15.0401 14.2667 21.4401C6.24 22.2934 0 29.0934 0 37.3334C0 46.1601 7.17333 53.3334 16 53.3334H50.6667C58.0267 53.3334 64 47.3601 64 40.0001C64 32.9601 58.5333 27.2534 51.6 26.7734ZM50.6667 48.0001H16C10.1067 48.0001 5.33333 43.2267 5.33333 37.3334C5.33333 31.8667 9.41333 27.3067 14.8267 26.7467L17.68 26.4534L19.0133 23.9201C21.5467 19.0401 26.5067 16.0001 32 16.0001C38.9867 16.0001 45.0133 20.9601 46.3733 27.8134L47.1733 31.8134L51.2533 32.1067C55.4133 32.3734 58.6667 35.8667 58.6667 40.0001C58.6667 44.4001 55.0667 48.0001 50.6667 48.0001ZM21.3333 34.6667H28.1333V42.6667H35.8667V34.6667H42.6667L32 24.0001L21.3333 34.6667Z"
              fill="white"
            />
          </svg>
        </button>
        <button class="btn modal__btn--upload" type="button">
          <span>UPLOAD COPY</span>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.3333 32C37.3333 29.0667 34.9333 26.6667 32 26.6667C29.0667 26.6667 26.6667 29.0667 26.6667 32C26.6667 34.9333 29.0667 37.3333 32 37.3333C34.9333 37.3333 37.3333 34.9333 37.3333 32ZM32 8C18.7467 8 8 18.7467 8 32H0L10.6667 42.6667L21.3333 32H13.3333C13.3333 21.68 21.68 13.3333 32 13.3333C42.32 13.3333 50.6667 21.68 50.6667 32C50.6667 42.32 42.32 50.6667 32 50.6667C27.9733 50.6667 24.24 49.36 21.1733 47.2L17.3867 51.04C21.44 54.1333 26.5067 56 32 56C45.2533 56 56 45.2533 56 32C56 18.7467 45.2533 8 32 8Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'ModalBackup',
    methods: { ...mapMutations('modal', { renderModal: 'RENDER_MODAL' }) },
  };
</script>
