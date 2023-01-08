<template lang="pug">
.what-we-do-rna-control.flex.column(v-if="ready")
  banner(
    title="RNA Formulation strategies (non-viral RNA delivery)",
    :desc="desc",
    image="RNAcontrol.png"
  )
  breadcrumb(page="RNA Formulation strategies")
  .blocks.flex.column
    block(
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
      desc: 'Our RNA technologies are here to solve problems',
      ready: false,
      datas: [
        {
          desc: [
            'RNA is unstable – the active ingredient of RNA therapeutics, messenger RNA, is even less stable than double-stranded species used in pesticides. However, both still need effective delivery strategies to reach the target cells. Lipid nanoparticles are the industry\'s most preferred strategy for RNA delivery due to their relatively higher safety profile.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 40,
        },
        {
          desc: [
            'We are developing safer and more affordable nanoparticles. We are also improving and simplifying processes for large-scale production of these critical products.',
          ],
          image: 'formulation.jpg',
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          ptop: 125,
          pbottom: 125,
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
