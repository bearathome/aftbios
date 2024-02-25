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
          title: 'Contact AFTBios',
          desc: [
            'Join Us in Shaping a Healthier, More Sustainable Future',
            'We are dedicated to leveraging the power of RNA technology and artificial intelligence to address some of the most pressing issues facing our planet today. From advancing healthcare solutions to creating more resilient food systems, our mission is to improve the health of people and our planet. Your interest and support play a crucial role in our journey.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 125,
        },
        {
          smallTitle: true,
          desc: [
            'Media Inquiries',
            'Our team is available to provide insights into our groundbreaking work with RNA technology and the impact of our initiatives. For press releases, interviews with our subject matter experts, or more information about our projects:',
            '● Press Contact: media@aftbios.com',
            'Investment Opportunities',
            'Learn more about AFTBios’ progress, developments, and how you can contribute to our mission through investment. For detailed information on investment opportunities and SEC filings:',
            '● Investor Relations: invest@aftbios.com',
            'Partnership Opportunities',
            'We are on the lookout for new partners in academia, industry, and scientific communities to help us expand our technology, intellectual property, and team. Together, we can make a significant impact:',
            '● Partner with Us: partnerships@aftbios.com',
            'Career Opportunities',
            'Become a part of our team and contribute to safeguarding the health of people and our planet. Explore current vacancies and find out how your skills can make a difference:',
            '● See Vacancies: Join Our Team',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: false,
          top: -40,
          ptop: 40,
          pbottom: 60 + 250,
        },
        {
          title: 'Our Headquarters',
          smallTitle: true,
          desc: [
            'AFTBios\n128 City Road\nLondon, EC1V 2NX\nUnited Kingdom',
            'Phone',
            'For general inquiries, please call us at:\n+44-77000000000',
            'Email',
            'For any other information, questions, or feedback:\ncontact@aftbios.com',
            'Connect With Us',
            'Your questions, feedback, and ideas are important to us. Whether you\'re interested in collaborating, investing, or simply learning more about our work, we\'re here to provide the information you need. Together, we can achieve a healthier and more sustainable future for all.',
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
