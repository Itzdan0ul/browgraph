<template>
  <div class="radio" role="radio" v-for="scheme in schemes" :key="scheme.id">
    <div class="radio__body">
      <div class="radio__circ"></div>
      <span>{{ message[scheme.text] }}</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'MainSettingsAppearanceRadio',
    data() {
      return {
        schemes: [
          { id: 1, text: 'Light' },
          { id: 2, text: 'Dark' },
          { id: 3, text: 'Synchronize with the computer' },
        ],
      };
    },
    computed: {
      ...mapState('settings', ['section']),
      ...mapState('i18n', ['message']),
    },
  };
</script>
