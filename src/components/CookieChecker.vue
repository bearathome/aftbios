<template lang="pug">
.cookie-checker.flex.column.gap-12(:class="{'show': show}")
  .title.bold This website uses cookies
  .splitter
  .content.flex.column.gap-6.align-start
    span {{ content }}
    a.iubenda-black.iubenda-noiframe.iubenda-embed.iubenda-noiframe(
      href="https://www.iubenda.com/privacy-policy/96550174"
      title="Privacy Policy") Privacy Policy
  .splitter
  .buttons.flex.align-center.justify-end.gap-12
    .button.deny.clickable(@click="gaOptout") Deny
    .button.allow.bold.clickable(@click="gaOptin") Allow
</template>

<script>
export default {
  name: 'cookie-checker',
  data() {
    return {
      content: 'We use cookies to understand how visitors interact with websites by collecting and reporting information anonymously.',
      show: true,
      version: 1,
    };
  },
  methods: {
    gaOptin() {
      const now = new Date();
      const expire = new Date(now.getTime() + 7 * 86400 * 1000);
      document.cookie = `cookieUse=${this.version};expires=${expire.toUTCString()};path=/`;
      window.gaOptin();
      this.checkShow();
    },
    gaOptout() {
      const now = new Date();
      const expire = new Date(now.getTime() + 7 * 86400 * 1000);
      document.cookie = `cookieUse=0;expires=${expire.toUTCString()};path=/`;
      window.gaOptout();
      this.show = false;
    },
    parseCookie(str) {
      return str
        .split(';')
        .map((v) => v.split('='))
        .reduce((acc, v) => {
          if (v.length > 1) {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
          }
          return acc;
        }, {});
    },
    checkShow() {
      // const cookie = this.parseCookie(document?.cookie || '');
      // if (parseInt(cookie.cookieUse, 10) === this.version) {
      //   window.gaOptin();
      //   this.show = false;
      // } else {
      //   this.show = true;
      // }
      // if (this.show) {
      //   this.setupPrivacy();
      // }
      this.setupPrivacy();
    },
    setupPrivacy() {
      const s = document.createElement('script');
      const tag = document.getElementsByTagName('script')[0];
      s.src = 'https://cdn.iubenda.com/iubenda.js';
      tag.parentNode.insertBefore(s, tag);
    },
  },
  mounted() {
    this.checkShow();
  },
};
</script>

<style lang="scss" scoped>
.cookie-checker {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: calc(100vw - 40px);
  max-width: 350px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 20px;
  background: white;
  opacity: 0.01;
  pointer-events: none;
  transition: all .3s ease-in-out;
  z-index: 1000;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
  .splitter {
    background: #ccc;
    flex: 0 0 2px;
  }
  .buttons {
    .button {
      padding: 8px 16px;
      border: 1px solid #ccc;
      &.allow {
        background: #d07c3f;
        color: white;
      }
      &.deny {
        color: #333;
      }

      &:hover {
        filter: brightness(105%);
      }
      &:active {
        filter: brightness(95%);
      }
    }
  }

  @media only screen and (max-width: 500px) {
    left: 50%;
    transform: translateX(-50%);
  }
}

</style>
