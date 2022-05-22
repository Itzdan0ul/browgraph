<template>
  <div
    class="layout"
    :class="{ 'layout--settings': active.includes('settings') }"
  >
    <template v-if="!active.includes('settings')">
      <TheHeader />
      <TheMain />
      <TheSidebar />
    </template>
    <template v-else>
      <TheMain />
      <TheSidebar />
    </template>
    <Transition
      name="modal-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <ModalCategoryManager v-show="name.includes('ModalCategoryManager')" />
    </Transition>
    <Transition
      name="modal-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <ModalMaterialForm v-show="name.includes('ModalMaterialForm')" />
    </Transition>
    <ModalRemoveAlert v-show="name.includes('ModalRemoveAlert')" />
    <Transition
      name="modal-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <ModalBackup v-show="name.includes('ModalBackup')" />
    </Transition>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import TheMain from './components/TheMain.vue';
  import TheHeader from './components/TheHeader.vue';
  import TheSidebar from './components/TheSidebar.vue';
  import ModalBackup from './components/ModalBackup.vue';
  import ModalRemoveAlert from './components/ModalRemoveAlert.vue';
  import ModalMaterialForm from './components/ModalMaterialForm.vue';
  import ModalCategoryManager from './components/ModalCategoryManager.vue';

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheMain,
      TheSidebar,
      ModalCategoryManager,
      ModalMaterialForm,
      ModalRemoveAlert,
      ModalBackup,
    },
    mounted() {
      this.getMessage();
      this.getCurrentLocale();
    },
    methods: {
      ...mapActions('i18n', ['getMessage']),
      ...mapActions('i18n', ['getCurrentLocale']),
    },
    computed: {
      ...mapState('page', ['active']),
      ...mapState('modal', ['name']),
    },
  };
</script>
