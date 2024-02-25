<template lang="pug">
.team
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
  name: 'Team',
  data() {
    return {
      datas: [
        {
          title: 'Our Team: The Foundation of Our Success',
          desc: [
            'A compassionate and diverse team of experienced professionals',
            'Our team is our most valuable asset, comprising individuals with deep expertise and a proven track record in biotechnology, artificial intelligence, and sustainable innovation. We are committed to fostering a diverse, inclusive, and supportive workplace where every member is empowered to contribute to our mission.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 125,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
