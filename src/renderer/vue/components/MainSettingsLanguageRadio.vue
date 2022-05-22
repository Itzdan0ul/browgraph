<template>
  <div
    class="radio"
    role="radio"
    v-for="language in languages"
    :key="language.id"
    @click="translate(language.country.slice(0, 5))"
  >
    <div class="radio__body">
      <div
        class="radio__circ"
        :class="{
          'radio__circ--checked': locale.includes(language.country.slice(0, 5)),
        }"
      ></div>
      <span>{{ language.text }}</span>
    </div>
    <div class="radio__country">
      <span>{{ language.country }}</span>
      <img :src="language.flag" width="30" height="30" />
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'MainSettingsLanguageRadio',
    data() {
      return {
        languages: [
          {
            id: 1,
            text: 'English',
            country: 'en-US (United States)',
            flag: './assets/images/us_flag.png',
          },
          {
            id: 2,
            text: 'Español',
            country: 'es-MX (México)',
            flag: './assets/images/mexico_flag.png',
          },
        ],
      };
    },
    methods: {
      translate(locale) {
        this.selectLocale(locale);
        this.getMessage();
      },
      ...mapActions('i18n', ['getMessage']),
      ...mapMutations('i18n', { selectLocale: 'SELECT_LOCALE' }),
    },
    computed: {
      ...mapState('settings', ['section']),
      ...mapState('i18n', ['locale']),
    },
  };
</script>
