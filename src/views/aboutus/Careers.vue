<template lang="pug">
.careers
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
    :more-link="data.moreLink",
    :more-text="data.moreText"
  )
</template>

<script>
export default {
  name: 'Careers',
  data() {
    return {
      datas: [
        {
          title: 'Careers at AFTBios',
          desc: [
            'Join Our Mission to Innovate for a Better Tomorrow',
            'We\'re on a quest to create a more resilient food system and to advance healthcare solutions through rigorous scientific innovation. If you\'re passionate, creative, and driven by the desire to make a significant impact, AFTBios is your platform to shine.',
            '● Work With Us: Explore opportunities to contribute your skills and passion to a team that values innovation, collaboration, and sustainability.',
            '● Our Rewards: Discover a rewarding career that offers more than just a salary. We prioritise the well-being, diversity, and development of our employees, providing a comprehensive benefits package designed to meet your needs now and in the future.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 125,
          moreLink: '/about/careers/joinus',
          moreText: 'Lear More About Careers',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
