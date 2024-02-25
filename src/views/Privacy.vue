<template lang="pug">
.privacy
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
  name: 'Privacy',
  data() {
    return {
      datas: [
        {
          title: 'Privacy and Cookies Policy for AFTBios',
          desc: [
            'Last Updated: 22/02/2024',
            'At AFTBios, we are committed to safeguarding the privacy of our website visitors and service users. This policy applies to information collected by us on our website and through other digital platforms associated with AFTBios.',
            '1. Information We Collect',
            'a. Personal Information: We may collect personal information such as your name, email address, phone number, and any other information you choose to provide when you fill out forms on our website, subscribe to our newsletters, or participate in our surveys and feedback mechanisms.',
            'b. Non-Personal Information: We automatically collect non-personal information such as browser type, operating system, IP address, and website usage information through cookies and other tracking technologies.',
            '2. Use of Your Information',
            'The information we collect is used to:',
            '● Provide, operate, and maintain our website and services',
            '● Improve, personalise, and expand our website and services',
            '● Understand and analyse how you use our website and services',
            '● Develop new products, services, features, and functionality',
            '● Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes',
            '● Send you emails and newsletters',
            '● Find and prevent fraud',
            '3. Cookies and Tracking Technologies',
            'We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.',
            '4. Sharing Your Information',
            'We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.',
            '5. Security of Your Information',
            'The security of your personal information is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.',
            '6. Your Rights',
            'You have the right to access, correct, update, or request deletion of your personal information. You can also object to processing your personal data, ask us to restrict processing of your personal data, or request portability of your personal data. If we have collected and processed your personal information with your consent, then you can withdraw your consent at any time.',
            '7. Links to Other Sites',
            'Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy of every site you visit.',
            '8. Changes to This Privacy Policy',
            'We may update our Privacy and Cookies Policy from time to time. We will notify you of any changes by posting the new Privacy and Cookies Policy on this page. You are advised to review this Privacy and Cookies Policy periodically for any changes.',
            '9. Contact Us',
            'If you have any questions about this Privacy and Cookies Policy, please contact us:',
            'Email: contact@aftbios.com',
            'Address: AFTBios, 200 Giovanni Avenue, Suite 2000, London, EC ENV, United Kingdom',
            'Your privacy is of paramount importance to AFTBios, and we are committed to protecting it through our compliance with this policy.',
          ],
          invert: false,
          background: 'transparent',
          hasRadius: false,
          ptop: 50,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.privacy {
  background: white;
}
</style>
