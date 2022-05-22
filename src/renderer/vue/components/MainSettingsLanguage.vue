<template>
  <section class="main__language-section">
    <div class="section__header--language">
      <h2 class="section__title--language">{{ message['Language'] }}</h2>
    </div>
    <div class="section__title--language">
      <h3 class="section__theme-title--language">{{
        message['Choose a language']
      }}</h3>
      <div class="section__options--language">
        <MainSettingsLanguageRadio />
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  import MainSettingsLanguageRadio from './MainSettingsLanguageRadio.vue';

  export default {
    name: 'MainSettingsLanguage',
    components: {
      MainSettingsLanguageRadio,
    },
    computed: { ...mapState('i18n', ['message']) },
  };
</script>
