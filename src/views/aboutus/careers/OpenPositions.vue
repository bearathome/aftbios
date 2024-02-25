<template lang="pug">
.story-purpose
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
      :more-link="data.moreLink",
      :more-text="data.moreText",
    )
</template>

<script>
export default {
  name: 'StoryPurpose',
  data() {
    return {
      datas: [
        {
          title: 'Open Positions at AFTBios: Currently Unavailable',
          desc: [
            'We appreciate your interest in joining the team at AFTBios. Currently, there are no open positions available within our organisation. However, we are always eager to connect with passionate and innovative individuals who share our commitment to transforming the future of food sustainability and healthcare through scientific innovation.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 50,
        },
        {
          title: 'Stay Connected',
          smallTitle: true,
          desc: [
            'We encourage you to check back regularly for updates on job openings. Our team is continually evolving, and new opportunities may arise as we expand our projects and initiatives.',
            'Join Our Talent Community',
            'If you\'re inspired by our mission and would like to be considered for future positions, we invite you to submit your CV and a brief introduction about yourself to our Talent Community. By doing so, you\'ll be among the first to be informed when a new opportunity matches your skills and interests.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          ptop: 125,
          pbottom: 87 + 250,
          moreLink: '/about/partnering/contact',
          moreText: 'Contact Us',
        },
        {
          title: 'Follow Us',
          smallTitle: true,
          desc: [
            'Additionally, follow us on our LinkedIn page and other social media platforms for the latest news, insights, and updates from AFTBios. This is a great way to learn more about our work, our impact, and how you might fit into future opportunities.',
            'Thank You for Your Interest',
            'Your enthusiasm for making a difference in the world through science and innovation is what drives us forward. We look forward to the possibility of having you join our team in the future and making a significant impact together.',
            'AFTBios Team',
          ],
          invert: false,
          background: 'white',
          hasRadius: true,
          radiusType: 2,
          top: -250,
          ptop: 125,
          pbottom: 87,
        },
      ],
    };
  },
  methods: {
    goOpenPositionPage() {
      this.$router.push('/about/careers/open-positions');
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  margin-top: -250px;
  min-height: 250px;
  background: white;
  border-top-right-radius: 240px;
  padding: 87px;
  font-size: 20px;
}
</style>
