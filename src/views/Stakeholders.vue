<template lang="pug">
.stakeholder
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
  name: 'Stakeholders',
  data() {
    return {
      datas: [
        {
          title: 'Stakeholders of AFTBios',
          desc: [
            'AFTBios engages with a diverse group of stakeholders, each playing a crucial role in our mission to revolutionise food systems and healthcare through scientific innovation. Understanding the needs, expectations, and impact of our actions on these stakeholders is fundamental to our strategy, operations, and pursuit of sustainability. Here\'s an overview of our key stakeholders:',
            '1. Employees and Team Members',
            'Our employees are the backbone of AFTBios, driving our research, development, and innovation. We are committed to fostering a diverse, inclusive, and supportive workplace where every individual can thrive and contribute to our shared goals.',
            '2. Customers and End-Users',
            'This group includes farmers, healthcare professionals, and consumers who rely on our RNA-based biopesticides and therapeutics. Ensuring the safety, efficacy, and accessibility of our products for these users is paramount to our operational ethos.',
            '3. Investors and Shareholders',
            'Investors and shareholders provide the capital necessary for our research, development, and expansion projects. Transparent communication and delivering sustainable value are key to maintaining their trust and support.',
            '4. Academic and Research Institutions',
            'Collaboration with universities and research institutions enriches our scientific exploration and innovation. These partnerships help in advancing our understanding and application of RNA technology for societal benefit.',
            '5. Industry Partners',
            'Our industry partners, including biotechnology firms, agricultural companies, and healthcare organisations, play a critical role in scaling and distributing our solutions. Collaborative efforts aim to enhance our product offerings and reach.',
            '6. Regulatory Bodies and Government Agencies',
            'Compliance with regulations and maintaining productive relationships with government agencies ensure that our products meet safety and efficacy standards. These entities are essential in navigating the legal and ethical aspects of biotechnological innovation.',
            '7. Local Communities and Society',
            'The broader community and society are both impacted by and beneficiaries of our work. From contributing to food security and environmental sustainability to improving healthcare outcomes, our goal is to generate positive social value.',
            '8. Non-Governmental Organisations (NGOs) and Advocacy Groups',
            'NGOs and advocacy groups focusing on environmental protection, health, and sustainability are important stakeholders. Their insights and feedback help guide our corporate social responsibility (CSR) initiatives and community engagement strategies.',
            '9. Suppliers and Vendors',
            'Suppliers and vendors provide the materials and services essential for our research and product development. Building strong, ethical, and sustainable supply chains is crucial for our operational integrity and environmental impact.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 50,
        },
        {
          title: 'Engagement and Communication',
          smallTitle: true,
          desc: [
            'Effective stakeholder engagement involves ongoing dialogue to understand their perspectives, address concerns, and identify opportunities for collaboration. We are committed to transparent communication and constructive engagement with all our stakeholders to achieve our vision of a healthier, more sustainable future.',
            'Through strategic partnerships, ethical business practices, and a commitment to innovation and sustainability, AFTBios aims to create value for all stakeholders involved in our journey towards transforming food systems and healthcare.',
          ],
          invert: true,
          background: '#FCFAF3',
          hasRadius: true,
          radiusType: 1,
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
