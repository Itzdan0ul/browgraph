<template>
  <main class="main" :class="{ 'main--settings': active.includes('settings') }">
    <template v-if="active.includes('home')">
      <MainHome />
    </template>
    <template v-else-if="active.includes('folder')">
      <MainFolder />
    </template>
    <template v-else>
      <MainSettings />
    </template>
  </main>
</template>

<script>
  import { mapState } from 'vuex';
  import MainHome from './MainHome.vue';
  import MainFolder from './MainFolder.vue';
  import MainSettings from './MainSettings.vue';

  export default {
    name: 'TheMain',
    components: {
      MainHome,
      MainFolder,
      MainSettings,
    },
    computed: { ...mapState('page', ['active']) },
  };
</script>
