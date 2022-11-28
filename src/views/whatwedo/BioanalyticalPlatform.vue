<template lang="pug">
.what-we-do-rna-control.flex.column(v-if="ready")
  banner(
    title="Bioanalytical platform development",
    :desc="desc"
    image="bioanalytical.png")
  breadcrumb(page="RNA Formulation strategies")
  .blocks.flex.column
    block(
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
      desc: 'Our diagnostic technologies are designed for everyone, no matter where you are',
      ready: false,
      datas: [
        {
          desc: [
            'We have designed a comprehensive platform for developing easy-to-use and adaptive point-of-care technologies. The developed technologies will enable early detection of existing and emerging disease threats. Our design imperative is simplicity – so that our developed platform and technologies would suit everyone’s needs, novice or professional.',
          ],
          image: 'vaccines1.png',
          invert: true,
          background: 'transparent',
          hasRadius: false,
          ptop: 40,
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
