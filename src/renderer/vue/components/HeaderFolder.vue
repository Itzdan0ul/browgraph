<template>
  <div class="header--folder">
    <button
      class="btn header__btn header__btn--file"
      type="button"
      @click="loadPdf()"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.41 7.41L14.58 2.58C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.41ZM14.8 15H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V15H9.21C8.76 15 8.54 14.46 8.86 14.15L11.66 11.36C11.86 11.17 12.17 11.17 12.37 11.36L15.16 14.15C15.46 14.46 15.24 15 14.8 15ZM14 9C13.45 9 13 8.55 13 8V3.5L18.5 9H14Z"
          fill="white"
        />
      </svg>
    </button>
    <div class="header__body">
      <span>{{ headerText }}</span>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'HeaderFolder',
    methods: {
      ...mapActions('folder', ['loadPdf']),
    },
    computed: {
      headerText() {
        if (this.pdfPath !== undefined && this.pdfPath !== '') {
          let absoluteUrl = this.pdfPath;
          let name = absoluteUrl.lastIndexOf('\\');

          return absoluteUrl.substring(name + '\\'.length, absoluteUrl.length);
        } else {
          return this.message['Select a file to view'];
        }
      },
      ...mapState('i18n', ['message']),
      ...mapState('folder', ['pdfPath']),
    },
  };
</script>
