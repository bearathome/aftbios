<template lang="pug">
.page-header.flex.align-center.justify-space-between
  .left.flex.align-center
    .logo AFTBios
  .right.flex.align-center
    .menu.flex.column.clickable(v-for="menu in menus", :key="menu.text")
      .text.flex.align-center {{ menu.text }}
      .hover-bar
      template(v-if="!hideMenu")
        .mega-menu.home.flex(v-if="menu.text === 'Home'")
          .mega-item.flex.column(
            v-for="mega in homeMega", :key="mega.title"
            @click="goPage(mega)")
            .title {{ mega.title }}
            .desc {{ mega.desc }}
          .mega-item.blank
        .mega-menu.do.flex.column(v-if="menu.text === 'What we do'")
          .mega-item.flex.column(
            v-for="mega in whatWeDo", :key="mega.title"
            @click="goPage(mega)")
            .title.flex.align-center.gap-12
              .title-text {{ mega.title }}
              vue-material-icon(name="arrow_forward" :size="20")
            .desc {{ mega.desc }}
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      menus: [
        {
          text: 'Home',
        },
        {
          text: 'What we do',
        },
        {
          text: 'About Us',
        },
        {
          text: 'News and Insights',
        },
        {
          text: 'Stakeholders',
        },
      ],
      homeMega: [
        {
          title: 'Overview',
          desc: 'Solving important health and agricultural problems facing the world today using next-generation RNA technologie',
        },
        {
          title: 'Vaccines and Therapeutics',
          desc: 'mRNA has demonstrated its potential to be a leading vaccine candidate, and we are committed to delivering mRNA vaccines all over the world',
        },
        {
          title: 'RNA Biocontrols',
          desc: 'RNA is a biological molecule found in almost all living things',
        },
        {
          title: 'RNA Formulation strategies',
          desc: 'More efficient RNA vaccine delivery',
        },
        {
          title: 'Bioanalytical platform development',
          desc: 'Standalone, simple and programmable device for every user',
        },
      ],
      whatWeDo: [
        {
          title: 'Overview',
          desc: 'Solving important health and agricultural problems facing the world today using next-generation RNA technologie',
        },
        {
          title: 'Vaccines and Therapeutics',
          desc: 'mRNA has demonstrated its potential to be a leading vaccine candidate, and we are committed to delivering mRNA vaccines all over the world',
        },
        {
          title: 'RNA Biocontrols',
          desc: 'RNA is a biological molecule found in almost all living things',
        },
        {
          title: 'RNA Formulation strategies',
          desc: 'More efficient RNA vaccine delivery',
        },
        {
          title: 'Bioanalytical platform development',
          desc: 'Standalone, simple and programmable device for every user',
        },
      ],
      hideMenu: false,
    };
  },
  methods: {
    goPage() {
      this.hideMenu = true;
      setTimeout(() => {
        this.hideMenu = false;
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.page-header {
  position: relative;
  height: $header-height;
  width: 100vw;
  background: white;
  box-shadow: 0px 4px 26px 1px rgba(0, 0, 0, 0.12);
  padding: 0 76px;
  z-index: 5;

  .menu {
    height: $header-height;

    .text {
      padding: 0 32px;
      text-align: center;
      vertical-align: middle;
      flex: 1;
    }

    .hover-bar {
      flex: 0 0 4px;
      background-color: $color-main;
      max-width: 0;
      transition: all .5s ease-in-out;
      position: relative;
      left: 50%;
    }
    &:hover > .hover-bar {
      max-width: 100%;
      left: 0;
    }
    &:hover > .mega-menu {
      max-height: 100vh;
      height: calc(100vh - #{$header-height});
      padding: 72px;
      z-index: 11;
    }
  }

  .mega-menu {
    z-index: 10;
    position: absolute;
    width: 100vw;
    top: $header-height;
    left: 0;
    max-height: 0;
    transition: all .5s ease-in-out;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.9);

    padding: 0 72px;
    gap: 30px;
    height: auto;
    &.home {
      flex-wrap: wrap;
      justify-content: center;
      .mega-item {
        background: #FCFAF3;
        flex: 0 1 618px;
        height: 212px;
        padding: 30px;
        border-radius: 16px;
        border-bottom-left-radius: 1px;
        .title {
          color: $color-main;
        }
        &.blank {
          background: transparent;
        }
      }
    }
    &.do {
      background: white;
      gap: 30px;
      .mega-item {
        border-left: 4px solid $color-main;
        padding: 0 24px;
        .title {
          .title-text {
            color: $color-main;
          }
        }
      }
    }
  }
}
</style>
