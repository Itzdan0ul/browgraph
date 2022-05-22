<template>
  <div class="header--home">
    <button
      class="btn header__btn"
      type="button"
      @click="renderModal('ModalCategoryManager')"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="header__path"
          d="M18.5834 5.66664L12.3834 15.8C11.7 16.9 12.5 18.3333 13.8 18.3333H26.1834C27.4834 18.3333 28.2833 16.9 27.6 15.8L21.4167 5.66664C20.7667 4.59997 19.2334 4.59997 18.5834 5.66664Z"
          fill="#7A7A7A"
        />
        <path
          class="header__path"
          d="M29.1667 36.6667C33.3088 36.6667 36.6667 33.3088 36.6667 29.1667C36.6667 25.0246 33.3088 21.6667 29.1667 21.6667C25.0246 21.6667 21.6667 25.0246 21.6667 29.1667C21.6667 33.3088 25.0246 36.6667 29.1667 36.6667Z"
          fill="#7A7A7A"
        />
        <path
          class="header__path"
          d="M6.66667 35.8333H16.6667C17.5833 35.8333 18.3333 35.0833 18.3333 34.1667V24.1667C18.3333 23.25 17.5833 22.5 16.6667 22.5H6.66667C5.75 22.5 5 23.25 5 24.1667V34.1667C5 35.0833 5.75 35.8333 6.66667 35.8333Z"
          fill="#7A7A7A"
        />
      </svg>
    </button>
    <select id="category" class="selector header__selector">
      <option value="default">{{ message['Select category'] }}</option>
    </select>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'HeaderHome',
    methods: {
      ...mapMutations('modal', { renderModal: 'RENDER_MODAL' }),
    },
    computed: { ...mapState('i18n', ['message']) },
  };
</script>
