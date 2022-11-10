<template lang="pug">
#app
  page-header
  .main-page
    router-view
    page-footer
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  .main-page {
    margin: 0 auto;
    max-width: 1440px;
    height: calc(100vh - #{$header-height});
    overflow: overlay;
    overflow: auto;
  }
}
</style>
