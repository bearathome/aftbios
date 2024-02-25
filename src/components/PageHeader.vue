<template lang="pug">
.page-header.flex.align-center.justify-space-between
  .left.flex.align-center
    .logo(@click="goHome")
  .right.flex.align-center
    .menu.flex.column.clickable.rwd-hide(
      v-for="menu in menus",
      :key="menu.text",
      @click="goMenuPage(menu)"
    )
      .text.flex.align-center {{ menu.text }}
      .hover-bar
      template(v-if="!hideMenu")
        .mega-menu.do.flex.column(v-if="menu.text === 'What we do'")
          .item.flex.align-center.gap-12(v-for="(mega, idx) in whatWeDo")
            .mega-border
            .mega-img(
              :key="idx",
              :style="{ 'background-image': 'url(/images/whatwedo/' + mega.image }",
              :class="{ right: mega.right }"
            )
            .mega-item.flex.column(:key="mega.title", @click="goPage(mega)")
              .title.flex.align-center.gap-12
                .title-text {{ mega.title }}
                vue-material-icon(name="arrow_forward", :size="20")
              .desc {{ mega.desc }}
        .mega-menu.do.flex.column(v-if="menu.text === 'About Us'")
          .item.flex.align-center.gap-12(v-for="(mega, idx) in aboutUs")
            .mega-border
            .mega-img(
              :key="idx",
              :style="{ 'background-image': 'url(/images/aboutus/' + mega.image }",
              :class="{ right: mega.right }"
            )
            .mega-item.flex.column(:key="mega.title", @click="goPage(mega)")
              .title.flex.align-center.gap-12
                .title-text {{ mega.title }}
                vue-material-icon(name="arrow_forward", :size="20")
              .desc {{ mega.desc }}
    .menu-icon.rwd-show.clickable(@click="showSlideMenu")
      vue-material-icon(name="menu", :size="20")
    .rwd-menu-slide.rwd-show(:class="{ show: slideMenuVisible }")
      .overlay-bg
      .rwd-menu.flex.column.align-center
        .close-icon.clickable.flex.align-center.justify-center(
          @click="hideSlideMenu"
        )
          vue-material-icon.clickable(name="close", :size="20")
        template(v-for="menu in menus")
          .menu-row.flex.align-center.justify-center.clickable(
            :key="menu.text",
            @click="goMenuPageRWD(menu)"
          ) {{ menu.text }}
          template(v-if="menu.text === 'What we do'")
            .rwd-mega-menu.do.flex.column(:class="{ show: rwdMegaVisible }")
              .item.flex.align-center.gap-12.clickable(
                v-for="(mega, idx) in whatWeDo"
              )
                .mega-border
                .mega-img(
                  :key="idx",
                  :style="{ 'background-image': 'url(/images/whatwedo/' + mega.image }",
                  :class="{ right: mega.right }"
                )
                .mega-item.flex.column(
                  :key="mega.title",
                  @click="goMenuPageRWD(mega)"
                )
                  .title.flex.align-center.gap-12
                    .title-text {{ mega.title }}
                    vue-material-icon(name="arrow_forward", :size="20")
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
          link: '/news-and-insights',
        },
        {
          text: 'Stakeholders',
          link: '/stakeholders',
        },
      ],
      whatWeDo: [
        {
          title: 'Overview',
          desc: 'Solving important health and agricultural problems facing the world today using next-generation RNA technologie',
          link: '/what-we-do/overview',
          image: 'overview.png',
        },
        {
          title: 'Vaccines and Therapeutics',
          desc: 'mRNA has demonstrated its potential to be a leading vaccine candidate, and we are committed to delivering mRNA vaccines all over the world',
          link: '/what-we-do/vaccines-and-therapeutics',
          image: 'vaccines.jpg',
        },
        {
          title: 'RNA Biocontrols',
          desc: 'RNA is a biological molecule found in almost all living things',
          link: '/what-we-do/RNA-Biocontrol',
          image: 'formulation.png',
          right: true,
        },
        {
          title: 'RNA Formulation strategies',
          desc: 'More efficient RNA vaccine delivery',
          link: '/what-we-do/RNA-Formulation-strategies',
          image: 'RNAcontrol.png',
          right: true,
        },
        {
          title: 'Bioanalytical platform development',
          desc: 'Standalone, simple and programmable device for every user',
          link: '/what-we-do/Bioanalytical-platform-development',
          image: 'bioanalytical.jpg',
        },
        {
          title: 'Molecular diagnostics',
          desc: 'Our low-cost, single-enzyme-based detection method, versatility, compatibility with existing qPCR systems as well as point-of-care-technology devices will rapidly respond to emerging pandemics',
          link: '/what-we-do/Molecular-diagnostics',
          image: 'molecular.png',
        },
      ],
      aboutUs: [
        {
          title: 'Our Story',
          desc: 'Welcome to AFTBios, where we harness nature with AI-driven biotechnology to revolutionise our food system and healthcare.',
          link: '/about/story',
          image: 'story.jpg',
        },
        {
          title: 'Our Team: The Foundation of Our Success',
          desc: 'A compassionate and diverse team of experienced professionals',
          link: '/about/team',
          image: 'team.jpg',
        },
        {
          title: 'Careers at AFTBios',
          desc: 'Join Our Mission to Innovate for a Better Tomorrow',
          link: '/about/careers',
          image: 'career.jpg',
        },
        {
          title: 'Partnering with AFTBios',
          desc: 'Together, We Can Achieve More',
          link: '/about/partnering',
          image: 'partner.jpg',
        },
      ],
      hideMenu: false,

      slideMenuVisible: false,
      rwdMegaVisible: false,
    };
  },
  methods: {
    showSlideMenu() {
      this.slideMenuVisible = true;
    },
    hideSlideMenu() {
      this.slideMenuVisible = false;
      this.rwdMegaVisible = false;
    },
    goPage(mega) {
      this.hideMenu = true;
      setTimeout(() => {
        this.hideMenu = false;
      }, 100);
      if (mega.link) {
        console.log(mega.link);
        this.$router.push(mega.link);
      }
    },
    goHome() {
      this.$router.push('/');
    },
    goMenuPageRWD(menu) {
      if (this.goMenuPage(menu)) {
        this.hideSlideMenu();
      } else {
        this.rwdMegaVisible = !this.rwdMegaVisible;
      }
    },
    goMenuPage(menu) {
      if (menu.link) {
        this.$router.push(menu.link);
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.page-header {
  position: relative;
  height: $header-height;
  width: 100vw;
  background: white;
  box-shadow: 0px 4px 26px 1px rgba(0, 0, 0, 0.12);
  padding: 0 76px;
  z-index: 5;
  @media only screen and (max-width: 600px) {
    padding: 0 30px;
  }

  .logo {
    width: 285px;
    height: 40px;
    cursor: pointer;
    user-select: none;
    background-image: url("/logo.svg");
    background-size: 285px 40px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    @media only screen and (max-width: 600px) {
      width: 200px;
      height: 28px;
      background-size: 200px 28px;
    }
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
      transition: all 0.5s ease-in-out;
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
      border-top: 1px solid #cdcdcd;
      border-bottom: 1px solid #cdcdcd;
    }
  }

  .mega-menu {
    z-index: 10;
    position: absolute;
    width: 100vw;
    top: $header-height;
    left: 0;
    max-height: 0;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.9);

    padding: 0 72px;
    gap: 30px;
    height: auto;
    &.do {
      background: white;
      gap: 30px;
      .item {
        transition: transform 0.1s ease-in-out;
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
        background-size: cover;
        border-radius: 2px;
        &.right {
          background-position: 80% 50%;
        }
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

  .menu-icon {
    display: none;
  }

  .rwd-menu-slide {
    overflow: visible;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;

    .overlay-bg {
      pointer-events: none;
      background: rgba(0, 0, 0, 0.8);
      width: 100vw;
      height: 100vh;
      opacity: 0.01;
      transition: all 0.3s ease-in-out;
    }

    .rwd-menu {
      overflow: scroll;
      overflow: overlay;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 100vw;
      width: 100vw;
      height: 100vh;
      max-width: 350px;
      transition: all 0.3s ease-in-out;
      background: white;
      .close-icon,
      .menu-row {
        flex: 0 0 90px;
      }
    }
    &.show {
      .overlay-bg {
        opacity: 1;
      }
      .rwd-menu {
        pointer-events: all;
        transform: translateX(-100%);
      }
    }
  }

  .rwd-mega-menu {
    overflow: hidden;
    max-height: 0;
    transition: all 0.3s ease-in-out;
    &.show {
      overflow: initial;
      max-height: 1020px;
    }
    &.do {
      gap: 30px;
      .item {
        transition: transform 0.1s ease-in-out;
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
        background-size: cover;
        border-radius: 2px;
        &.right {
          background-position: 80% 50%;
        }
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
