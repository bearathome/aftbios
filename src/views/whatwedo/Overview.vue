<template lang="pug">
.what-we-do-overview.flex.column(v-if="ready")
  banner(
    title="Overview",
    desc="Our RNA technologies are here to solve problems",
    image="overview.png"
  )
  breadcrumb(page="Overview")
  .content.flex.row.align-start
    .content-img
    .content-title.flex.row(data-aos="fade-right")
      .dot
      .txt What we do
    .blocks.flex.column
      .block.flex.column(
        v-for="block in datas",
        data-aos="fade-left",
        @click="goPage(block)"
      )
        .title {{ block.title }}
        .splitter
        .desc(v-for="line in block.desc") {{ line }}
        .link.flex.align-center.gap-18
          .txt Learn More
          .link-icon.flex.align-center.justify-center >
</template>

<script>
import Banner from '@/components/WWDBanner.vue';
import breadcrumb from '@/components/WWDBreadcrumb.vue';

export default {
  components: {
    banner: Banner,
    breadcrumb,
  },
  data() {
    return {
      ready: false,
      datas: [
        {
          title: 'Vaccines and Therapeutics ',
          desc: [
            'mRNA vaccines provide a safe and long-lasting immune response in animal models and humans',
            '(e.g. Affordable platforms for mRNA vaccines…)',
          ],
          link: '/what-we-do/vaccines-and-therapeutics',
        },
        {
          title: 'RNA Biocontrols',
          desc: [
            'By implementing our engineered novel RNA biocontrol platform, we can save hundreds of thousands of crops in fields',
          ],
          link: '/what-we-do/RNA-Biocontrol',
        },
        {
          title: 'RNA Formulation strategies',
          desc: [
            'Formulation strategies for delivery of mRNA therapeutics and dsRNA pesticide is in the pipeline',
          ],
          link: '/what-we-do/RNA-Formulation-strategies',
        },
        {
          title: 'Bioanalytical platform development',
          desc: [
            'Our diagnostic technologies are designed for everyone, no matter where you are',
          ],
          link: '/what-we-do/Bioanalytical-platform-development',
        },
        {
          title: 'Molecular diagnostics',
          desc: [
            'Our low-cost, single-enzyme-based detection method, versatility, compatibility with existing qPCR systems as well as point-of-care-technology devices will rapidly respond to emerging pandemics',
          ],
          link: '/what-we-do/Molecular-diagnostics',
        },
      ],
    };
  },
  methods: {
    goPage(block) {
      if (block.link) {
        this.$router.push(block.link);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.ready = true;
    }, 10);
  },
};
</script>

<style lang="scss" scoped>
.what-we-do-overview {
  background-color: #fcfaf3;
  gap: 40px;
  .content {
    position: relative;
    overflow: hidden;
    @media only screen and (max-width: 1080px) {
      flex-direction: column;
      align-items: stretch;
    }
    .content-title {
      margin-left: 60px;
      flex: 0 0 400px;
      @media only screen and (max-width: 1080px) {
        flex: 0 0 auto;
        margin-bottom: 80px;
      }
      @media only screen and (max-width: 600px) {
        margin-left: 20px;
        margin-bottom: 60px;
      }
      .dot {
        background: #f8da4f;
        width: 68px;
        height: 68px;
        flex: 0 0 68px;
        border-radius: 34px;
        @media only screen and (max-width: 600px) {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
        }
      }
      .txt {
        font-size: 50px;
        font-weight: 400;
        margin-left: -30px;
        margin-top: 20px;
        @media only screen and (max-width: 600px) {
          font-size: 28px;
        }
      }
    }
    .blocks {
      flex: 1;
      gap: 60px;
      padding-bottom: 160px;
      z-index: 5;
      @media only screen and (max-width: 1080px) {
        padding-left: 30px;
      }
      @media only screen and (max-width: 600px) {
        gap: 30px;
        padding-left: 20px;
      }
      .block {
        padding: 50px;
        gap: 20px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;

        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          &:nth-child(2n) {
            margin-left: -8px;
          }
          &:nth-child(2n + 1) {
            margin-left: 100px;
          }
        }
        @media only screen and (max-width: 600px) {
          padding: 20px;
        }

        &:nth-child(2n + 1) {
          margin-left: 108px;
          background: white;
          @media only screen and (max-width: 1080px) {
            margin-left: 82px;
          }
          @media only screen and (max-width: 600px) {
            margin-left: 0;
          }
          .title {
            color: #d07c3f;
          }
          .splitter {
            background: #d3a271;
          }
          .link {
            color: #d07c3f;
            .link-icon {
              border: 1px solid #d07c3f;
            }
          }
        }

        &:nth-child(2n) {
          background: #d07c3f;
          color: white;
          .splitter {
            background: white;
          }
          .link {
            .link-icon {
              border: 1px solid white;
            }
          }
        }

        .title {
          font-size: 30px;
          @media only screen and (max-width: 600px) {
            font-size: 20px;
          }
        }
        .splitter {
          width: 80px;
          flex: 0 0 4px;
        }
        .desc {
          max-width: 700px;
        }
        .link {
          cursor: pointer;
          user-select: none;
          .link-icon {
            border-radius: 19px;
            width: 38px;
            height: 38px;
            flex: 0 0 38px;
          }
        }
      }
    }
    .content-img {
      position: absolute;
      width: 100vw;
      left: -30vw;
      bottom: -30vw;
      height: 100vw;
      max-width: 1440px;
      max-height: 1440px;
      border-radius: 50vw;
      background-image: url("/images/whatwedo/overview2.png");
      background-size: cover;
      z-index: 0;
      opacity: 0.8;
      @media only screen and (max-width: 900px) {
        display: none;
      }
    }
  }
}
</style>
