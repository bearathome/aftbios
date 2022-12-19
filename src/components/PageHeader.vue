<template lang="pug">
.page-header.flex.align-center.justify-space-between
  .left.flex.align-center
    .logo(@click="goHome") AFTBios
  .right.flex.align-center
    .menu.flex.column.clickable(
      v-for="menu in menus", :key="menu.text"
      @click="goMenuPage(menu)")
      .text.flex.align-center {{ menu.text }}
      .hover-bar
      template(v-if="!hideMenu")
        .mega-menu.do.flex.column(v-if="menu.text === 'What we do'")
          .item.flex.align-center.gap-12(v-for="(mega, idx) in whatWeDo")
            .mega-border
            .mega-img(:key="idx")
            .mega-item.flex.column(
              :key="mega.title"
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
          link: '/',
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
          link: '/what-we-do/overview',
        },
        {
          title: 'Vaccines and Therapeutics',
          desc: 'mRNA has demonstrated its potential to be a leading vaccine candidate, and we are committed to delivering mRNA vaccines all over the world',
          link: '/what-we-do/vaccines-and-therapeutics',
        },
        {
          title: 'RNA Biocontrols',
          desc: 'RNA is a biological molecule found in almost all living things',
          link: '/what-we-do/RNA-Biocontrol',
        },
        {
          title: 'RNA Formulation strategies',
          desc: 'More efficient RNA vaccine delivery',
          link: '/what-we-do/RNA-Formulation-strategies',
        },
        {
          title: 'Bioanalytical platform development',
          desc: 'Standalone, simple and programmable device for every user',
          link: '/what-we-do/Bioanalytical-platform-development',
        },
        {
          title: 'Molecular diagnostics',
          desc: 'Our low-cost, single-enzyme-based detection method, versatility, compatibility with existing qPCR systems as well as point-of-care-technology devices will rapidly respond to emerging pandemics',
          link: '/what-we-do/Molecular-diagnostics',
        },
      ],
      whatWeDo: [
        {
          title: 'Overview',
          desc: 'Solving important health and agricultural problems facing the world today using next-generation RNA technologie',
          link: '/what-we-do/overview',
        },
        {
          title: 'Vaccines and Therapeutics',
          desc: 'mRNA has demonstrated its potential to be a leading vaccine candidate, and we are committed to delivering mRNA vaccines all over the world',
          link: '/what-we-do/vaccines-and-therapeutics',
        },
        {
          title: 'RNA Biocontrols',
          desc: 'RNA is a biological molecule found in almost all living things',
          link: '/what-we-do/RNA-Biocontrol',
        },
        {
          title: 'RNA Formulation strategies',
          desc: 'More efficient RNA vaccine delivery',
          link: '/what-we-do/RNA-Formulation-strategies',
        },
        {
          title: 'Bioanalytical platform development',
          desc: 'Standalone, simple and programmable device for every user',
          link: '/what-we-do/Bioanalytical-platform-development',
        },
        {
          title: 'Molecular diagnostics',
          desc: 'Our low-cost, single-enzyme-based detection method, versatility, compatibility with existing qPCR systems as well as point-of-care-technology devices will rapidly respond to emerging pandemics',
          link: '/what-we-do/Molecular-diagnostics',
        },
      ],
      hideMenu: false,
    };
  },
  methods: {
    goPage(mega) {
      this.hideMenu = true;
      setTimeout(() => {
        this.hideMenu = false;
      }, 100);
      if (mega.link) {
        this.$router.push(mega.link);
      }
    },
    goHome() {
      this.$router.push('/');
    },
    goMenuPage(menu) {
      if (menu.link) {
        this.$router.push(menu.link);
      }
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

  .logo {
    cursor: pointer;
    user-select: none;
  }

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
      border-top: 1px solid #CDCDCD;
      border-bottom: 1px solid #CDCDCD;
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
      .item {
        transition: transform .1s ease-in-out;
        &:hover {
          transform: translate(-4px, -4px);
        }
      }
      .mega-border {
        // border-left: 4px solid $color-main;
        height: 40px;
      }
      .mega-img {
        flex: 0 0 40px;
        height: 40px;
        background: #ccc;
      }
      .mega-item {
        padding: 0 24px;
        padding-left: 0px;
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
