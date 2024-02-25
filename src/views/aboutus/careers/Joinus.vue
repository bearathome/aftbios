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
      :more-link="data.moreLink"
    )
    .block(data-aos="fade-up")
      span.clickable.link-text(@click="goOpenPositionPage") Open Positions at AFTBios
      span &nbsp;and discover how you can make your mark on the future of food sustainability and healthcare innovation.
</template>

<script>
export default {
  name: 'StoryPurpose',
  data() {
    return {
      datas: [
        {
          title: 'Join Us',
          desc: [
            'Shaping the Future with Passion and Precision',
            'At AFTBios, we stand at the forefront of scientific exploration, committed to transforming the landscape of food sustainability and healthcare through our pioneering RNA technology. Our mission is ambitious, seeking not only to innovate but to revolutionise the way we approach global challenges. If your heart beats for impactful work, and your mind thrives on creative problem-solving, we offer you a stage to let your talents flourish.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 50,
        },
        {
          title: 'Collaborate, Innovate, and Grow with Us',
          smallTitle: true,
          desc: [
            'We\'re on the lookout for individuals who are not just looking for a job but are driven by the opportunity to contribute to something greater than themselves. At AFTBios, you will join a collaborative ecosystem where innovation is the language we speak, and sustainability is the goal we aim for. Here, your work directly contributes to building a more resilient food system and advancing healthcare solutions that can change the world.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          ptop: 125,
          pbottom: 87 + 250,
        },
        {
          title: 'A Rewarding Journey Awaits',
          smallTitle: true,
          desc: [
            'Choosing a career with us means more than joining an industry-leading team; it means being part of a family that nurtures growth, embraces diversity, and rewards creativity. We understand the value of our employees and offer a comprehensive benefits package that reflects this. From competitive salaries to health benefits and opportunities for professional development, we ensure our team members are supported not just in their careers but in their lives outside work.',
          ],
          invert: false,
          background: 'white',
          hasRadius: true,
          radiusType: 2,
          top: -250,
          ptop: 125,
          pbottom: 87 + 250,
        },
        {
          title: 'Inclusion at the Heart of Innovation',
          smallTitle: true,
          desc: [
            'Diversity is not just a buzzword for us; it\'s a cornerstone of our identity. We believe that the best solutions come from a melting pot of ideas, cultures, and perspectives. By fostering an inclusive environment, we aim to unlock the full potential of our team, empowering each member to contribute their unique insights and skills towards our shared goals. Whether you\'re a biologist, chemist, engineer, or bring expertise from a different field, your contribution is valued here.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          top: -250,
          ptop: 125,
          pbottom: 87 + 250,
        },
        {
          title: 'Your Skills Can Propel Us Forward',
          smallTitle: true,
          desc: [
            'Our quest to develop accessible and affordable mRNA solutions is both challenging and crucial. It demands a team of the highest calibre—individuals who are not only at the top of their fields but also share a commitment to making a tangible difference in the world. We are calling for innovators who are ready to tackle the pressing issues of our time, from ensuring global food security to advancing public health, with courage, creativity, and collaboration.',
          ],
          invert: false,
          background: 'white',
          hasRadius: true,
          radiusType: 2,
          top: -250,
          ptop: 125,
          pbottom: 87 + 250,
        },
        {
          title: 'Join Our Visionary Team',
          smallTitle: true,
          desc: [
            'Your journey with AFTBios is not just about what you can offer us, but also about how we can grow together towards achieving a sustainable future for all. If you\'re ready to be part of a team that values the common good, challenges the status quo, and works tirelessly to bring about real change, we want to hear from you.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          top: -250,
          ptop: 125,
          pbottom: 87 + 250,
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
