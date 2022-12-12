<template lang="pug">
.page-footer.flex.align-start
  .whatwedo.flex.column.align-start
    .title What we do
    .link(
      @click="goPage(d.link)"
      v-for="d in whatWeDo" :key="d.title") {{ d.title }}
  .quick-links.flex.column.align-start
    .title Quick Links
    .link button name
  .join-us.flex.column.align-start
    .title Join us on Social
    .icon-link.flex.align-center
      img(:src="fbImg")
      img(:src="twitterImg")
  .rights Privacy Policy All rights reserved. 2022 AFT
</template>

<script>
import fbImg from '@/assets/icons/facebook.svg';
import twitterImg from '@/assets/icons/twitter.svg';

export default {
  name: 'PageFooter',
  data() {
    return {
      fbImg,
      twitterImg,
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
    };
  },
  methods: {
    goPage(url) {
      if (url) {
        this.$router.push(url);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-footer {
  margin: 60px 88px;
  border-top: 2px solid #D6D6D6;
  gap: 80px;
  padding-top: 60px;
  .whatwedo {
    flex: 0 0 auto;
    gap: 16px;
  }
  .quick-links {
    flex: 0 0 auto;
    gap: 16px;
  }
  .join-us {
    flex: 0 0 auto;
    gap: 16px;
  }
  .rights {
    flex: 0 0 172px;
    color: #8E8E8E;
  }
  .title {
    color: #292929;
  }
  .link {
    color: #9C9C9C;
    cursor: pointer;
  }
  .icon-link {
    gap: 24px;
  }
}
</style>
