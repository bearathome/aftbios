<template lang="pug">
.partnering
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
  name: 'Partnering',
  data() {
    return {
      datas: [
        {
          title: 'Partnering with AFTBios',
          desc: [
            'Together, We Can Achieve More',
            'Success in revolutionising food systems and healthcare requires collaboration. We partner with leading universities, corporations, and research institutions worldwide, benefiting from a network of support that accelerates our mission.',
            '● Why Partner With Us? Join us in developing products that enable safer, more sustainable food production and innovative healthcare solutions. Our collaborative efforts aim to protect crops, enhance food security, and advance medical treatments.',
            '● Become a Partner: We\'re always looking to expand our network with new partners in academia, industry, and beyond. Help us grow our technology, intellectual property, and team to create a lasting positive impact on our world.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 125,
          moreLink: '/about/partnering/exploring',
          moreText: 'Lear More About Partnership Opportunities',
        },
        {
          desc: [
            'For more information about AFTBios, our products, services, or partnership opportunities, please reach out. We\'re excited to hear from you and explore how we can work together for a sustainable and healthy future.',
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
};
</script>

<style lang="scss" scoped>

</style>
