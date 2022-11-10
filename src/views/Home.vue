<template lang="pug">
.home
  .mission.flex.column
    .brief.flex.column.align-start.justify-end
      .title AFT
      .splitter
      .desc.flex.align-center.justify-start
        span We are delivering simple solutions to the problems of humanity.
      .image-container.flex.align-center.justify-center
        .image
    .mission.flex.align-start
      .title Our Mission
      .desc
        span We are passionate about providing simple,&nbsp;
        span effective and affordable solutions to help make RNA-based&nbsp;
        span products accessible to all corners of the world.&nbsp;
        span We will deliver innovative and low-resource RNA&nbsp;
        span technologies and approaches to help solve some of&nbsp;
        span the most significant health and food challenges.&nbsp;
    .vision-container.flex.alitn-start
      .left-image
      .right-section.flex.column.align-stretch
        .vision.flex.column.align-start
          .title Our Vision
          .desc.flex.column.align-stretch
            .underline AFT’s vision is to make safe and affordable RNA technologies through
            .underline developing efficient RNA biomanufacturing and analytical platforms.
            br
            span We aim to achieve this through our unique platforms&nbsp;
            span for RNA designs, production, purification and analytics&nbsp;
            span to enable the delivery of RNA technologies worldwide.&nbsp;
        .detail
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
          Building on our expertise in developing biomanufacturing and analytical platforms&nbsp;
          span and working with partners, we are tackling complex problems of humanity, from&nbsp;
          span building platforms for safe RNA vaccines, therapeutics, pesticides, and&nbsp;
          span molecular diagnostics to developing analytical tools that will enable the&nbsp;
          span deployment of these products.
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  .mission {
    background: #FCFAF3;
    .brief {
      position: relative;
      background: white;
      height: 525px;
      border-bottom-right-radius: 300px;
      overflow: hidden;
      padding-left: 84px;
      padding-bottom: 100px;
      padding-right: 880px;
      .title {
        font-size: 100px;
      }
      .splitter {
        background: #4E8B43;
        width: 80px;
        height: 4px;
        margin-bottom: 28px;
      }
      .desc {
        font-size: 26px;
      }

      .image-container {
        position: absolute;
        background: #EDDFBB;
        width: 711px;
        height: 711px;
        flex: 0 0 711px;
        border-radius: 50%;
        right: -32px;
        top: -72px;
        .image {
          flex: 0 0 661px;
          height: 661px;
          background: gray;
          border-radius: 50%;
          background-image: url('/images/home/image1.png');
        }
      }
    }
    .mission {
      margin-top: 172px;
      margin-bottom: 64px;
      padding: 0 84px;

      .title {
        flex: 0 0 420px;
        font-weight: bold;
        font-size: 40px;
        color: #D07C3F;
      }
      .desc {
        font-size: 26px;
      }
    }
    .vision-container {
      width: 100vw;
      max-width: 1440px;
      background: rgb(252,250,243);
      background: linear-gradient(180deg, rgba(252,250,243,1) 0%, rgba(255,255,255,1) 50%);
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
        background-image: url('/images/home/image2.png');
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
        .vision {
          .title {
            font-weight: bold;
            font-size: 40px;
            color: #D07C3F;
            margin-bottom: 40px;
          }
          .desc {
            font-size: 26px;
            .underline {
              position: relative;
              &::after {
                content: ' ';
                width: 100%;
                height: 10px;
                background-color: rgba(80, 144, 69, 0.2);
                border-radius: 5px;
                bottom: 4px;
                left: 0;
                position: absolute;
              }
            }
          }
        }
        .detail {
          font-size: 26px;
          background: #D07C3F;
          padding: 76px 98px 76px 216px;
          border-top-left-radius: 64px;
          color: white;
          margin-left: -216px;
          margin-right: -108px;
          margin-top: 64px;
        }
      }
    }
  }
}
</style>
