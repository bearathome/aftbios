<template lang="pug">
.partner-exploring
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
  name: 'PartneringExploring',
  data() {
    return {
      datas: [
        {
          title: 'Exploring Partnership Opportunities with AFTBios',
          desc: [
            'A Unified Vision for a Sustainable Future',
            'Thank you for your interest in exploring partnership opportunities with AFTBios. At present, we are in the process of reviewing and strengthening our partnership strategies to maximise impact and alignment with our core mission of revolutionising food systems and healthcare through scientific innovation.',
            'Why Collaborate with Us?',
            'Our commitment to developing safer, more sustainable food production methods and advancing healthcare solutions is unwavering. We believe in the power of collaboration to amplify our efforts and achieve significant advancements. While we may not be actively seeking new partners at this moment, our mission thrives on the collective strength of academia, industry, and research institutions working towards a common goal.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 125,
        },
        {
          title: 'Stay Engaged for Future Opportunities',
          smallTitle: true,
          desc: [
            'We are continually evaluating new opportunities to grow our network and deepen our impact. If you represent an organisation or institution interested in partnering with AFTBios, we encourage you to stay connected:',
            '● Register Your Interest: Please consider leaving your contact information and a brief overview of your organisation\'s interests and capabilities. We will keep your details on file for future consideration as new opportunities arise.',
            '● Follow Us: Keep up with our latest projects, breakthroughs, and partnership announcements by following us on LinkedIn and our other social media platforms.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: false,
          top: -40,
          ptop: 40,
          pbottom: 40,
          moreLink: '/about/partnering/contact',
          moreText: 'Contact Us',
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
