<template lang="pug">
.what-we-do-vaccines.flex.column(v-if="ready")
  banner(
    title="Vaccines and therapeutics ",
    desc="Our RNA technologies are here to solve problems"
    image="vaccines.png")
  breadcrumb(page="Vaccines and therapeutics ")
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
      :small-title="data.smallTitle"
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
      ready: false,
      datas: [
        {
          title: 'What are mRNA vaccines, and how do they work?',
          desc: [
            'Most vaccines help prevent infection from foreign substances (such as bacteria, viruses, and other pathogens) by introducing inactivated or weakened pieces of a pathogen into our bodies to elicit an immune response that produces antibodies.',
            'However, mRNA vaccines do not rely on introducing pathogen particles into recipients. They contain the genetic material – the blueprint of the viral, bacteria or pathogen protein that can initiate an immune response. Once delivered into cells, the mRNA starts making the protein, eliciting the desired immune response. An attractive feature of this vaccine type is that mRNA is degraded once protein is made – just like another cellular mRNA. Moreover, mRNA is translated at the cytoplasm – away from the host’s nucleus – thereby minimising the risk of mRNA altering the host genome.',
          ],
          image: 'vaccines1.png',
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 48,
        },
        {
          desc: [
            'There are three significant challenges to ensuring equitable and global access to mRNA vaccines. One of them is the cost of reagents needed to make them. The other is the complex processes involved in making them. And the third one is the lack of consolidated analytical methods for characterising them.',
            'At AFT, we have developed and continue to improve on our novel solutions to these three problems. We want to ensure that these technologies reach all parts of the world. We recognise that for greater access and utility, technology needs to be tailored to the needs of the people that will use them. We are committed to making our technology easy to use so that these vaccines can be produced anywhere in the world. We believe that is the only way to solve the problem of inequality in the distribution of vaccines.',
          ],
          image: 'vaccines2.png',
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          ptop: 125,
          pbottom: 87 + 250,
        },
        {
          title: 'mRNA vaccines provide a safe and long-lasting immune response in animal models and humans',
          smallTitle: true,
          desc: [
            'RNA vaccines have the potential to become powerful tools against infectious diseases in humans, animals and even plants. However, most RNA production methods largely depend on in vitro synthesis, which is hugely expensive. Our expertise and exclusive technology will help deploy cost-effective, high-efficacy RNA-based vaccines to the most remote areas.',
          ],
          image: 'vaccines3.png',
          invert: false,
          background: '#D07C3F',
          hasRadius: true,
          radiusType: 2,
          top: -250,
          color: 'white',
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
.what-we-do-vaccines {
  gap: 40px;
}
</style>
