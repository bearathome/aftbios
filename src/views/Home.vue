<template lang="pug">
.home(@click="test")
  .mission.flex.column
    .brief.flex.column.align-start.justify-end(data-aos="fade-up")
      .title AFT
      .splitter
      .desc.flex.align-center.justify-start
        span We are delivering simple solutions to the problems of humanity.
      .image-container.flex.align-center.justify-center
        .image
    .mission.flex.align-start(data-aos="fade-up")
      .title Our Mission
      .desc
        span We are passionate about providing simple,&nbsp;
        span effective and affordable solutions to help make RNA-based&nbsp;
        span products accessible to all corners of the world.&nbsp;
        span We will deliver innovative and low-resource RNA&nbsp;
        span technologies and approaches to help solve some of&nbsp;
        span the most significant health and food challenges.&nbsp;
    .vision-container.flex.alitn-start
      .left-image(data-aos="fade-right")
      .right-section.flex.column.align-stretch
        .vision.flex.column.align-start
          .title(data-aos="fade-left") Our Vision
          .desc.flex.column.align-stretch(data-aos="fade-left")
            .underline AFT’s vision is to make safe and affordable RNA technologies through developing efficient RNA biomanufacturing and analytical platforms.
            br
            span We aim to achieve this through our unique platforms&nbsp;
            span for RNA designs, production, purification and analytics&nbsp;
            span to enable the delivery of RNA technologies worldwide.&nbsp;
        .detail(data-aos="fade-left")
          span RNA technologies promise to solve many of humanity’s&nbsp;
          span most significant challenges, from RNA biocontrol for&nbsp;
          span delivery of safe and nutritious food to RNA with low&nbsp;
          span environmental impact to RNA biologics for protecting&nbsp;
          span human and animal health.&nbsp;
          br
          br
          span Despite technological advances in nucleic acid technologies, gaps still&nbsp;
          span exist as many RNA-based technologies require expensive raw materials and&nbsp;
          span lab infrastructure to manufacture – resources not readily available,&nbsp;
          span especially in countries with low resources. Moreover, traditional&nbsp;
          span methods for production, purification and analysis of biologics are not&nbsp;
          span optimised for RNA processes. We are mindful that inefficient manufacturing&nbsp;
          span processes render products unaffordable to much of the world’s population&nbsp;
          span and impose a significant energy burden that has an enormous impact on the&nbsp;
          span environment. We believe this does not have to be so and can help.&nbsp;
          span Our focus is to deliver affordable and practical solutions compatible&nbsp;
          span with rich countries and low-resource settings while reducing the environmental&nbsp;
          span impact.
          br
          br
          br
          span Building on our expertise in developing biomanufacturing and analytical platforms&nbsp;
          span and working with partners, we are tackling complex problems of humanity, from&nbsp;
          span building platforms for safe RNA vaccines, therapeutics, pesticides, and&nbsp;
          span molecular diagnostics to developing analytical tools that will enable the&nbsp;
          span deployment of these products.
</template>

<script>
import AOS from 'aos';

export default {
  name: 'Home',
  methods: {
    test() {
      AOS.refresh();
      console.log('test');
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .mission {
    background: #fcfaf3;
    .brief {
      position: relative;
      background: white;
      height: 36vw;
      max-height: 525px;
      min-height: 318px;
      border-bottom-right-radius: 300px;
      overflow: hidden;
      padding-left: 84px;
      padding-bottom: 100px;
      padding-right: 55%;
      @media only screen and (max-width: 900px) {
        padding-right: 45%;
        border-bottom-right-radius: 20%;
        padding-left: 27px;
        padding-bottom: 10%;
      }
      @media only screen and (max-width: 500px) {
        padding-right: 45%;
        border-bottom-right-radius: 20%;
        padding-left: 27px;
        padding-bottom: 20px;
      }
      .title {
        font-size: 100px;
        @media only screen and (max-width: 900px) {
          font-size: 50px;
        }
      }
      .splitter {
        background: #4e8b43;
        width: 80px;
        height: 4px;
        margin-bottom: 28px;
        @media only screen and (max-width: 900px) {
          margin-bottom: 20px;
        }
      }
      .desc {
        font-size: 26px;
        @media only screen and (max-width: 900px) {
          font-size: 20px;
        }
      }

      .image-container {
        position: absolute;
        background: #eddfbb;
        max-width: 711px;
        max-height: 711px;
        min-width: 200px;
        min-height: 200px;
        width: 49.375vw;
        height: 49.375vw;
        flex: 0 0 49.375vw;
        border-radius: 50%;
        right: -32px;
        // top: -72px;
        bottom: -20%;
        @media only screen and (max-width: 900px) {
        bottom: -10%;
        }
        .image {
          flex: 0 0 calc(49.375vw - 50px);
          height: calc(49.375vw - 50px);
          max-height: 661px;
          max-width: 661px;
          min-width: 180px;
          min-height: 180px;
          background: gray;
          border-radius: 50%;
          background-image: url("/images/home/image1.png");
          background-size: cover;
          background-position: center;
        }
      }
    }
    .mission {
      margin-top: 172px;
      margin-bottom: 64px;
      padding: 0 84px;
      @media only screen and (max-width: 900px) {
        margin-top: 80px;
        padding: 0 30px;
      }
      @media only screen and (max-width: 500px) {
        flex-direction: column;
      }

      .title {
        flex: 0 0 420px;
        font-weight: bold;
        font-size: 40px;
        color: #d07c3f;
        @media only screen and (max-width: 900px) {
          flex: 0 0 225px;
          font-size: 24px;
        }
        @media only screen and (max-width: 500px) {
          flex: 0 0 auto;
        }
      }
      .desc {
        font-size: 26px;
        @media only screen and (max-width: 900px) {
          font-size: 20px;
        }
      }
    }
    .vision-container {
      width: 100vw;
      max-width: 1440px;
      background: rgb(252, 250, 243);
      background: linear-gradient(
        180deg,
        rgba(252, 250, 243, 1) 0%,
        rgba(255, 255, 255, 1) 50%
      );
      position: relative;
      .left-image {
        position: relative;
        left: 0;
        top: 0;
        flex: 0 1 592px;
        width: 592px;
        height: 1428px;
        border-top-right-radius: 80px;
        border-bottom-left-radius: 280px;
        background-image: url("/images/home/image2.png");
        @media only screen and (max-width: 900px) {
          flex: 0 0 324px;
        }
        @media only screen and (max-width: 500px) {
          flex: 0 0 100%;
        }
      }
      .right-section {
        border-top-left-radius: 80px;
        // position: absolute;
        flex: 0 1 1024px;
        margin-left: -180px;
        margin-top: 96px;
        z-index: 1;
        right: 0;
        background: rgba(255, 249, 230, 0.9);
        padding: 72px 108px 0px 108px;
        @media only screen and (max-width: 500px) {
          margin-left: -100%;
          margin-top: 120px;
          padding: 72px;
          padding-bottom: 0;
        }
        .vision {
          .title {
            font-weight: bold;
            font-size: 40px;
            color: #d07c3f;
            margin-bottom: 40px;
            @media only screen and (max-width: 900px) {
              font-size: 26px;
              transform: none !important;
            }
          }
          .desc {
            font-size: 26px;
            .underline {
              position: relative;
              text-decoration-line: line-through;
              text-decoration-color: rgba(80, 144, 69, 0.2);
              text-decoration-thickness: 10px;
            }
            @media only screen and (max-width: 900px) {
              font-size: 20px;
            }
          }
        }
        .detail {
          font-size: 26px;
          background: #d07c3f;
          padding: 76px 98px 76px 216px;
          border-top-left-radius: 64px;
          color: white;
          margin-left: -216px;
          margin-right: -108px;
          margin-top: 64px;
          @media only screen and (max-width: 900px) {
            font-size: 20px;
          }
          @media only screen and (max-width: 500px) {
            margin-left: -72px;
            margin-right: -72px;
            padding: 72px;
          }
        }
      }
    }
  }
}
</style>
