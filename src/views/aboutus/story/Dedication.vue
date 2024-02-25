<template lang="pug">
.story-purpose
  wwd-banner(
    title="Our Dedication to Advancing Science, Sustainability, and Social Equity",
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
          title: 'At the Forefront of Ethical Innovation: AFTBios',
          smallTitle: true,
          desc: [
            'AFTBios stands at the convergence of scientific excellence and ethical responsibility, committed to pioneering solutions that not only address but also anticipate the needs of a rapidly evolving world. Our core ethos is built upon a steadfast commitment to Environmental, Social, and Governance (ESG) principles, ensuring that every breakthrough we achieve contributes positively to both society and the environment.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 50,
        },
        {
          title: 'A Harmonious Blend of Science and Social Responsibility',
          smallTitle: true,
          desc: [
            'Our journey is marked by a relentless pursuit of innovation, with our initiatives extending beyond mere technological advancement to embody a deeper, more holistic approach to global challenges. From securing global food supplies through RNA-based biopesticides to developing groundbreaking medical treatments, our efforts are underpinned by a dedication to sustainability and social responsibility.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
          ptop: 125,
          pbottom: 87 + 250,
        },
        {
          title: 'Embracing the Power of RNA Technology',
          smallTitle: true,
          desc: [
            'Our advanced RNA platform is the backbone of our mission, enabling us to swiftly and efficiently forge a path through the complex landscape of contemporary issues. Whether it\'s crafting vaccines for global health threats, designing gene therapies for inherited diseases, or developing bio-solutions for agriculture, our work is testament to the transformative potential of RNA technology.',
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
          title: 'Sustainability: The Core of Our Innovation',
          smallTitle: true,
          desc: [
            'Our commitment to the environment is unwavering, with our research and development processes designed to minimize ecological impact. Our agricultural solutions, for example, are tailored to offer targeted, effective pest control while safeguarding the ecosystem. This precision ensures that our biocontrols degrade rapidly in nature, avoiding any long-term harm to soil, water, or biodiversity.',
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
          title: 'Equity and Access: Prioritising Global Health Security',
          smallTitle: true,
          desc: [
            'The Covid-19 pandemic underscored the critical need for equitable access to healthcare solutions worldwide. Our messenger RNA platform is at the forefront of addressing this challenge, aiming to democratise access to vaccines and therapies. By developing scalable, cost-effective solutions, we endeavour to meet the medical needs of communities globally, especially those in remote or underprivileged areas.',
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
          title: 'A Public Benefit Corporation with a Global Vision',
          smallTitle: true,
          desc: [
            'As a public benefit corporation, our governance structure prioritises the welfare of communities, employees, partners, and the broader society alongside our shareholders. Our operations and ambitions are aligned with the Sustainable Development Goals (SDGs), reflecting our comprehensive approach to contributing to a healthier planet and a more equitable society.',
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
          title: 'Join Us on Our Mission',
          smallTitle: true,
          desc: [
            'AFTBios invites you to delve deeper into our journey towards creating a sustainable and equitable future. Learn how our commitment to science, sustainability, and social responsibility is driving us to tackle some of humanity\'s greatest challenges head-on, with innovative, responsible, and effective solutions.',
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
};
</script>

<style lang="scss" scoped>

</style>
