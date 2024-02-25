<template lang="pug">
.story-purpose
  wwd-banner(
    title="Our Fundamental Purpose: Pioneering Sustainable Solutions for a Healthier Planet",
    image="vaccines.png"
  )
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
</template>

<script>
export default {
  name: 'StoryPurpose',
  data() {
    return {
      datas: [
        {
          title: 'Embarking on a Journey Toward Sustainability and Equity',
          smallTitle: true,
          desc: [
            'At the heart of AFTBios lies a profound commitment to leveraging the bounties of nature, augmented by the precision of artificial intelligence, to forge paths through the pressing challenges of our era. Our inception was motivated by a vision to deliver sustainable, scientifically sound solutions aimed at transforming both food production and healthcare landscapes globally. Through our pioneering RNA-based innovations, we are setting new standards for efficacy, accessibility, and environmental stewardship.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 50,
        },
        {
          title: 'Addressing the Environmental and Social Imperatives',
          smallTitle: true,
          desc: [
            'The environmental crisis and its repercussions on human health and food security necessitate urgent, innovative interventions. Traditional practices in agriculture and pharmaceuticals, while providing short-term solutions, have often exacerbated the planet\'s fragility, leading to degraded ecosystems, polluted waterways, and compromised soil health. Our endeavour is not just a response to these challenges but a comprehensive reimagining of how we interact with our environment and each other.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          ptop: 125,
          pbottom: 87 + 250,
        },
        {
          title: 'Revolutionising with RNA: A New Paradigm',
          smallTitle: true,
          desc: [
            'Our commitment to sustainability is embodied in our approach to biocontrol and therapeutic solutions. By harnessing the specificity and biodegradability of RNA, we offer targeted interventions that minimise ecological footprints while maximising effectiveness. This technology not only addresses the immediate needs of pest control and disease treatment but also aligns with the principles of circular economy, ensuring that our interventions leave no lasting harm on the environment.',
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
          title: 'Empowering Communities for a Sustainable Future',
          smallTitle: true,
          desc: [
            'Our vision extends beyond technological innovation to encompass social equity and community empowerment. We recognize the diverse challenges faced by farmers and healthcare providers, particularly in underrepresented regions. By providing safer, more sustainable, and cost-effective solutions, we aim to uplift communities, ensuring that everyone has access to clean, healthy food and advanced healthcare options.',
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
          title: 'Cultivating Diversity and Inclusion in Science',
          smallTitle: true,
          desc: [
            'At AFTBios, we believe that the richness of diversity fuels innovation. Our commitment to inclusivity is not merely a policy but a principle that guides our operations, research, and collaborations. By embracing diverse perspectives and fostering an environment where every voice is heard, we are building a foundation for equitable and impactful scientific advancements.',
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
          title: 'Join Us in Shaping a Sustainable and Equitable World',
          smallTitle: true,
          desc: [
            'Our core reason for being is deeply rooted in a desire to make a meaningful difference in the world. By integrating the principles of equity, diversity, and sustainability into our DNA, we are not just developing solutions for today but are also paving the way for a healthier, more resilient future for generations to come.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          top: -250,
          ptop: 125,
          pbottom: 87,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
