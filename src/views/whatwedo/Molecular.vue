<template lang="pug">
.what-we-do-rna-control.flex.column(v-if="ready")
  banner(
    title="Molecular diagnostics",
    :desc="desc"
    image="molecular.png")
  breadcrumb(page="Molecular diagnostics")
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
      desc: 'Our low-cost, single-enzyme-based detection method, versatility, compatibility with existing qPCR systems as well as point-of-care-technology devices will rapidly respond to emerging pandemics',
      ready: false,
      datas: [
        {
          desc: [
            'Unlike antibody-based diagnostics, this nucleic acid-based diagnostic can be readily adapted and utilized in diagnosing a variety of animal and plant pathogens with the same kit by substituting only designed “oligonucleotide primers” for the target pathogen without the need to optimize the method further.',
          ],
          image: 'vaccines1.png',
          invert: true,
          background: 'transparent',
          hasRadius: false,
          ptop: 40,
          pbottom: 40,
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
