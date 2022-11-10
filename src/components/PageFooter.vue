<template lang="pug">
.page-footer.flex.align-start
  .whatwedo.flex.column.align-start
    .title What we do
    .link Overview
    .link Vaccines and therapeutics
    .link RNA Biocontrols
    .link RNA Formulation strategies
    .link Bioanalytical platform development
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
    };
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
  }
  .icon-link {
    gap: 24px;
  }
}
</style>
