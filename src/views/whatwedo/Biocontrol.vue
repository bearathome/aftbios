<template lang="pug">
.what-we-do-rna-control.flex.column(v-if="ready")
  banner(
    title="RNA Biocontrol",
    :desc="desc"
    image="formulation.png")
  breadcrumb(page="RNA Biocontrol")
  .blocks.flex.column
    block(
      data-aos="fade-up"
      v-for="(data, idx) in datas"
      :key="idx"
      :title="data.title"
      :desc="data.desc"
      :image="data.image"
      :invert="data.invert"
      :background="data.background"
      :has-radius="data.hasRadius"
      :radius-type="data.radiusType"
      :top="data.top"
      :color="data.color"
      :padding-bottom="data.pbottom"
      :padding-top="data.ptop"
      :zindex="data.zindex"
    )
</template>

<script>
import Banner from '@/components/WWDBanner.vue';
import breadcrumb from '@/components/WWDBreadcrumb.vue';
import Block from '@/components/WWDBlock.vue';

export default {
  components: {
    banner: Banner,
    breadcrumb,
    Block,
  },
  data() {
    return {
      desc: 'We are developing a high-yield and sustainable production platform for RNA pesticides which can help save hundreds of thousands of crops in fields',
      ready: false,
      datas: [
        {
          desc: [
            'RNA technology can help protect our crops against pests and diseases safely and sustainably. RNA are molecules found in most, if not all, living organisms and, like all organic matter, are readily recyclable. Unlike inorganic pesticides that persist long in our environment, RNA will degrade and have a low environmental impact.',
          ],
          image: 'vaccines1.png',
          invert: true,
          background: 'transparent',
          hasRadius: false,
          ptop: 48,
          pbottom: 0,
          zindex: 2,
        },
        {
          desc: [
            'Most pesticides are hazardous, killing insects and organisms beneficial to our ecosystem – RNA pesticides are designed to target only pests of interest and not harm any other insect. However, substantially challenge the deployment of this technology so that people all over the world can access them.',
          ],
          image: 'vaccines1.png',
          invert: false,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          ptop: 200,
          pbottom: 60,
          top: -100,
          zindex: 1,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.ready = true;
    }, 10);
  },
};
</script>

<style lang="scss" scoped>
.what-we-do-rna-control {
  gap: 40px;
}
</style>
