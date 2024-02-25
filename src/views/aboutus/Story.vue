<template lang="pug">
.story
  .blocks.flex.column
    wwd-block(
      data-aos="fade-up",
      v-for="(data, idx) in datas",
      :key="idx",
      :title="data.title",
      :desc="data.desc",
      :image="data.image",
      :invert="data.invert",
      :background="data.background",
      :has-radius="data.hasRadius",
      :radius-type="data.radiusType",
      :top="data.top",
      :color="data.color",
      :padding-bottom="data.pbottom",
      :padding-top="data.ptop",
      :small-title="data.smallTitle",
      :more-link="data.moreLink"
    )
</template>

<script>
export default {
  name: 'Story',
  data() {
    return {
      datas: [
        {
          title: 'Our Story',
          desc: [
            'Welcome to AFTBios, where we harness nature with AI-driven biotechnology to revolutionise our food system and healthcare. Founded on the principle of using advanced RNA-based biotechnologies, we are committed to developing next-generation biopesticides and RNA-based therapeutics that offer safer, more sustainable, and equitable solutions for global agriculture and medicine.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 125,
        },
        {
          title: 'Our Core Reason for Being',
          desc: [
            'Creating a Safer, More Equitable Food System and Healthcare Solutions',
            'At AFTBios, we\'re driven by the mission to utilise nature\'s own mechanisms, enhanced with artificial intelligence, to address critical challenges in food production and human health. Our innovative RNA-based products are designed to provide farmers and medical professionals around the world with effective, accessible, and environmentally friendly solutions. Through our work, we aim to make food production more resilient and healthcare more personalised and effective, all while respecting and protecting our planet.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          ptop: 125,
          pbottom: 87 + 250,
          moreLink: '/about/story/purpose',
        },
        {
          title: 'At AFTBios',
          smallTitle: true,
          desc: [
            'Committed to Science, Sustainability, and Social Responsibility',
            'We celebrate the synergy of collaboration in tackling humanity\'s most pressing issues, from ensuring global food security to advancing medical treatments. Our culture is one of unity, driven by the shared goal of leveraging scientific discovery for the greater good. Our commitment to Environmental, Social, and Governance (ESG) principles is at the core of our purpose, embodying our dedication to equality, diversity, and inclusion in every aspect of our work.',
          ],
          invert: false,
          background: '#D07C3F',
          hasRadius: true,
          radiusType: 2,
          top: -250,
          color: 'white',
          ptop: 125,
          pbottom: 125,
          moreLink: '/about/story/dedication',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
