<template>
  <div class="range" role="slider">
    <div class="range__body">
      <span class="range__text">{{ text }} {{ fontScale }}px</span>
      <input
        id="range-font-scale"
        class="range__input"
        type="range"
        min="14"
        max="20"
        step="2"
        v-model="fontScale"
        @change="changeFontScale()"
      />
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'MainSettingsAppearanceRangeFontScale',
    data() {
      return {
        text: 'Font scale',
      };
    },
    mounted() {
      this.changeFontScale();
    },
    methods: {
      changeFontScale() {
        const rangeFontScale = document.getElementById('range-font-scale');
        let scale = parseInt(this.fontScale);

        if (scale === 20) rangeFontScale.style.setProperty('--value', 100);
        if (scale === 18) rangeFontScale.style.setProperty('--value', 66.66);
        if (scale === 16) rangeFontScale.style.setProperty('--value', 33.33);
        if (scale === 14) rangeFontScale.style.setProperty('--value', 0);

        document.body.style.fontSize = scale + 'px';
      },
      ...mapMutations('settings', { setFont: 'SET_FONT' }),
    },
    computed: {
      fontScale: {
        get() {
          return this.font;
        },
        set(value) {
          this.setFont(value);
        },
      },
      ...mapState('settings', ['font']),
    },
  };
</script>
