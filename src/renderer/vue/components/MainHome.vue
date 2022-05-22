<template>
  <div class="main__header">
    <button
      class="btn main__btn main__btn--add"
      type="button"
      @click="renderComponents('ModalMaterialForm', 'add')"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
          fill="white"
        />
      </svg>
    </button>
    <div class="main__search-bar">
      <input
        class="input main__input"
        type="search"
        placeholder="Type the title you are looking for"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.4999 14H14.7099L14.4299 13.73C15.6299 12.33 16.2499 10.42 15.9099 8.39002C15.4399 5.61002 13.1199 3.39002 10.3199 3.05002C6.08989 2.53002 2.52989 6.09001 3.04989 10.32C3.38989 13.12 5.60989 15.44 8.38989 15.91C10.4199 16.25 12.3299 15.63 13.7299 14.43L13.9999 14.71V15.5L18.2499 19.75C18.6599 20.16 19.3299 20.16 19.7399 19.75C20.1499 19.34 20.1499 18.67 19.7399 18.26L15.4999 14ZM9.49989 14C7.00989 14 4.99989 11.99 4.99989 9.50002C4.99989 7.01002 7.00989 5.00002 9.49989 5.00002C11.9899 5.00002 13.9999 7.01002 13.9999 9.50002C13.9999 11.99 11.9899 14 9.49989 14Z"
          fill="#C1C1C1"
        />
      </svg>
    </div>
  </div>
  <div class="main__body--home">
    <table class="table main__table">
      <thead>
        <tr class="main__tr--th">
          <th>#</th>
          <th>Folio</th>
          <th>Publisher</th>
          <th>Title</th>
          <th>Locker</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="main__tr--td">
          <td>1</td>
          <td>1280</td>
          <td>Lucas</td>
          <td>Lorem ipsum dolor sit</td>
          <td>18</td>
          <td>
            <div class="main__btn-group">
              <button
                class="btn main__btn main__btn--edit"
                type="button"
                @click="renderComponents('ModalMaterialForm', 'edit')"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                class="btn main__btn main__btn--remove"
                type="button"
                @click="renderModal('ModalRemoveAlert')"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99992 12.6667C3.99992 13.4 4.59992 14 5.33325 14H10.6666C11.3999 14 11.9999 13.4 11.9999 12.6667V6C11.9999 5.26667 11.3999 4.66667 10.6666 4.66667H5.33325C4.59992 4.66667 3.99992 5.26667 3.99992 6V12.6667ZM11.9999 2.66667H10.3333L9.85992 2.19333C9.73992 2.07333 9.56659 2 9.39325 2H6.60659C6.43325 2 6.25992 2.07333 6.13992 2.19333L5.66659 2.66667H3.99992C3.63325 2.66667 3.33325 2.96667 3.33325 3.33333C3.33325 3.7 3.63325 4 3.99992 4H11.9999C12.3666 4 12.6666 3.7 12.6666 3.33333C12.6666 2.96667 12.3666 2.66667 11.9999 2.66667Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'MainHome',
    methods: {
      renderComponents(modal, form = '') {
        this.renderModal(modal);
        this.renderForm(form);
      },
      ...mapMutations('modal', { renderModal: 'RENDER_MODAL' }),
      ...mapMutations('form', { renderForm: 'RENDER_FORM' }),
    },
  };
</script>
