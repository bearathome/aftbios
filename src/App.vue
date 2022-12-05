<template lang="pug">
#app
  page-header.header
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
@import "@/assets/styles/global.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  overflow: overlay;
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
    overflow: overlay;
    padding-top: $header-height;
  }
  .header {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
