<template>
  <div class="main__sidebar">
    <h2 class="main__title">
      {{ message['Application settings'].toUpperCase() }}
    </h2>
    <div class="main__menu">
      <button
        class="btn main__section-btn"
        type="button"
        @click="renderSection('appearance')"
      >
        Appearance
      </button>
      <button
        class="btn main__section-btn"
        type="button"
        @click="renderSection('language')"
      >
        Language
      </button>
      <button
        class="btn main__section-btn"
        type="button"
        @click="renderModal('ModalBackup')"
      >
        Backup
      </button>
    </div>
    <div class="main__menu">
      <button class="btn main__section-btn" type="button">
        {{ message['Change history'] }}
      </button>
      <button class="btn main__section-btn" type="button">
        {{ message['Report a problem'] }}
      </button>
    </div>
    <div class="main__menu">
      <button
        class="btn main__section-btn main__section-btn--exit"
        type="button"
      >
        Exit
      </button>
    </div>
    <div class="main__menu main__menu--info">
      <figure class="main__github">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0001 0C4.47791 0 0 4.58454 0 10.2401C0 14.7644 2.86533 18.6028 6.83867 19.9569C7.33844 20.0517 7.52192 19.7347 7.52192 19.4643C7.52192 19.2201 7.51265 18.4134 7.50834 17.5578C4.72631 18.1772 4.13927 16.3496 4.13927 16.3496C3.68437 15.166 3.02894 14.8512 3.02894 14.8512C2.12163 14.2157 3.09733 14.2287 3.09733 14.2287C4.10151 14.301 4.63026 15.284 4.63026 15.284C5.52217 16.8495 6.96965 16.3969 7.5403 16.1352C7.63006 15.4734 7.88922 15.0217 8.1752 14.7659C5.95405 14.507 3.61913 13.629 3.61913 9.70526C3.61913 8.58727 4.00977 7.67379 4.64947 6.95667C4.54564 6.69875 4.20335 5.65725 4.74635 4.24675C4.74635 4.24675 5.58609 3.97153 7.49708 5.2964C8.29476 5.06951 9.15024 4.95573 10.0001 4.95183C10.8499 4.95573 11.7061 5.06951 12.5052 5.2964C14.4139 3.97153 15.2525 4.24675 15.2525 4.24675C15.7968 5.65725 15.4544 6.69875 15.3505 6.95667C15.9917 7.67379 16.3797 8.58727 16.3797 9.70526C16.3797 13.6383 14.0403 14.5043 11.8135 14.7578C12.1722 15.0756 12.4918 15.6988 12.4918 16.6541C12.4918 18.0243 12.4802 19.127 12.4802 19.4643C12.4802 19.7368 12.6602 20.0561 13.1671 19.9555C17.1383 18.6 20 14.7629 20 10.2401C20 4.58454 15.5227 0 10.0001 0ZM3.74536 14.5872C3.72333 14.6381 3.64517 14.6534 3.57396 14.6184C3.50143 14.585 3.46069 14.5157 3.48421 14.4646C3.50574 14.4122 3.58406 14.3976 3.65643 14.4327C3.72913 14.4661 3.77053 14.5362 3.74536 14.5872ZM4.23725 15.0367C4.18956 15.0819 4.09633 15.0609 4.03307 14.9894C3.96766 14.918 3.9554 14.8225 4.00376 14.7765C4.05294 14.7313 4.14336 14.7525 4.20893 14.8238C4.27434 14.8961 4.28709 14.9909 4.23725 15.0367ZM4.57471 15.6117C4.51344 15.6553 4.41325 15.6144 4.35132 15.5234C4.29004 15.4323 4.29004 15.3231 4.35264 15.2793C4.41474 15.2356 4.51344 15.2749 4.5762 15.3653C4.6373 15.4579 4.6373 15.5671 4.57471 15.6117ZM5.14542 16.2777C5.09061 16.3396 4.97386 16.323 4.88841 16.2385C4.80098 16.1559 4.77663 16.0388 4.83161 15.9769C4.88709 15.9148 5.0045 15.9323 5.09061 16.016C5.17738 16.0985 5.20387 16.2165 5.14542 16.2777ZM5.88301 16.5025C5.85883 16.5827 5.74639 16.6192 5.63312 16.5851C5.52002 16.55 5.446 16.4561 5.46885 16.375C5.49237 16.2943 5.6053 16.2563 5.7194 16.2928C5.83234 16.3277 5.90652 16.421 5.88301 16.5025ZM6.72242 16.5979C6.72523 16.6823 6.62919 16.7524 6.51029 16.7539C6.39073 16.7566 6.29402 16.6883 6.29269 16.6052C6.29269 16.5199 6.38659 16.4505 6.50615 16.4485C6.62505 16.4461 6.72242 16.514 6.72242 16.5979ZM7.54704 16.5655C7.56128 16.6479 7.47865 16.7326 7.36058 16.7551C7.2445 16.7768 7.13702 16.7259 7.12229 16.6442C7.10788 16.5598 7.192 16.4751 7.30792 16.4533C7.42616 16.4322 7.53197 16.4818 7.54704 16.5655Z"
            fill="#2E3338"
          />
        </svg>
      </figure>
      <p>Stable 0.0.1-alpha-1</p>
      <p>Windows 10</p>
    </div>
  </div>
  <div class="main__body--settings">
    <template v-if="section.includes('appearance')">
      <MainSettingsAppearance />
    </template>
    <template v-else>
      <MainSettingsLanguage />
    </template>
    <EscButton />
  </div>
</template>

<script>
  import EscButton from './EscButton.vue';
  import { mapState, mapMutations } from 'vuex';
  import MainSettingsLanguage from './MainSettingsLanguage.vue';
  import MainSettingsAppearance from './MainSettingsAppearance.vue';

  export default {
    name: 'MainSettings',
    components: {
      MainSettingsAppearance,
      MainSettingsLanguage,
      EscButton,
    },
    methods: {
      ...mapMutations('settings', { renderSection: 'RENDER_SECTION' }),
      ...mapMutations('modal', { renderModal: 'RENDER_MODAL' }),
    },
    computed: {
      ...mapState('settings', ['section']),
      ...mapState('i18n', ['message']),
    },
  };
</script>
