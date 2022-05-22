<template>
  <div class="modal" role="dialog">
    <div class="modal__overlay"></div>
    <div
      class="modal__root modal__root--category-manager"
      :class="{
        'modal__root--category-manager-edit': section.includes('edit'),
      }"
    >
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
        <div class="modal__category-manager">
          <div class="modal__options">
            <button
              class="btn modal__btn modal__btn-add-section"
              :class="{ 'active-add-section': section.includes('add') }"
              type="button"
              @click="showSection('add')"
              >Add category</button
            >
            <button
              class="btn modal__btn modal__btn-edit-section"
              :class="{ 'active-manage-section': section.includes('edit') }"
              type="button"
              @click="showSection('edit')"
              >Category management</button
            >
          </div>
          <template v-if="section.includes('add')">
            <ModalCategoryManagerAddSection />
          </template>
          <template v-if="section.includes('edit')">
            <ModalCategoryManagerEditSection />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import ModalCategoryManagerAddSection from './ModalCategoryManagerAddSection.vue';
  import ModalCategoryManagerEditSection from './ModalCategoryManagerEditSection.vue';

  export default {
    name: 'ModalCategoryManager',
    components: {
      ModalCategoryManagerAddSection,
      ModalCategoryManagerEditSection,
    },
    data() {
      return { section: ['add'] };
    },
    methods: {
      showSection(sectionName) {
        if (!this.section.includes(sectionName)) this.section.push(sectionName);
        this.section = this.section.filter((i) => i == sectionName);
      },
      ...mapMutations('modal', { renderModal: 'RENDER_MODAL' }),
    },
  };
</script>
