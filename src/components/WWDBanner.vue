<template lang="pug">
.wwd-banner.flex.column.justify-center.align-start(:style="bgStyle")
  .title(data-aos="fade-up") {{ title }}
  .seperator
  .desc(data-aos="fade-up") {{ desc }}
</template>

<script>
export default {
  name: 'wwd-banner',
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    bgStyle() {
      return {
        'background-image': `url(/images/whatwedo/${this.image})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.wwd-banner {
  flex: 0 0 36vw;
  width: 100vw;
  max-height: 525px;
  min-height: 360px;
  max-width: 1440px;
  padding-left: 84px;
  border-bottom-right-radius: 300px;
  background-size: cover;
  @media only screen and (max-width: 900px) {
    border-bottom-right-radius: 20%;
    padding-left: 27px;
  }
  .title {
    color: white;
    font-size: 50px;
    margin-bottom: 20px;
    @media only screen and (max-width: 900px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 500px) {
      font-size: 30px;
    }
  }
  .seperator {
    background: white;
    flex: 0 0 4px;
    width: 80px;
    @media only screen and (max-width: 900px) {
      margin-bottom: 20px;
    }
  }
  .desc {
    margin-top: 50px;
    color: white;
    font-size: 26px;
    @media only screen and (max-width: 900px) {
      font-size: 20px;
      margin-top: 0;
    }
  }
}
</style>
