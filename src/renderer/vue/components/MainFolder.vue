<template>
  <div class="main__body--folder">
    <embed class="main__embed" :src="pdfPath" type="application/pdf" />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'MainFolder',
    mounted() {
      this.getPdfPath();
    },
    methods: {
      ...mapActions('folder', ['getPdfPath']),
    },
    computed: { ...mapState('folder', ['pdfPath']) },
  };
</script>
