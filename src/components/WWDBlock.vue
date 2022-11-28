<template lang="pug">
.what-we-do-block(
  :class="{'invert': invert, 'radius': hasRadius, 'no-image': image === undefined}"
  :style="blockStyle"
  )
  .content.flex.column.align-start
    .title {{ title }}
    .desc(v-for="line in desc") {{ line }}
  .image(
    v-if="image !== undefined && image !== ''"
    :style="{'background-image': 'url(/images/whatwedo/'+image}")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: Array,
      default: () => [],
    },
    image: {
      type: String,
      default: undefined,
    },
    invert: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: 'transparent',
    },
    color: {
      type: String,
      default: '',
    },
    hasRadius: {
      type: Boolean,
      default: false,
    },
    radiusType: {
      type: Number,
      default: 0,
    },
    top: {
      tpye: Number,
      default: 0,
    },
    paddingBottom: {
      tpye: Number,
      default: 87,
    },
    paddingTop: {
      tpye: Number,
      default: 87,
    },
    zindex: {
      type: Number,
      default: undefined,
    },
  },
  computed: {
    blockStyle() {
      const ret = {
        background: this.background,
        'margin-top': `${this.top}px`,
        'padding-top': `${this.paddingTop}px`,
        'padding-bottom': `${this.paddingBottom}px`,
      };

      if (this.color && this.color !== '') {
        ret.color = this.color;
      }
      if (this.hasRadius) {
        if (this.radiusType === 1) {
          ret['border-top-left-radius'] = '240px';
        } else if (this.radiusType === 2) {
          ret['border-top-right-radius'] = '240px';
          ret['border-bottom-left-radius'] = '240px';
        }
      }
      if (this.zindex) {
        ret['z-index'] = this.zindex;
      }

      return ret;
    },
  },
};
</script>

<style lang="scss" scoped>
.what-we-do-block {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
  gap: 72px;
  padding: 87px;
  .content {
    grid-column: 1 / 8;
    gap: 40px;
    .title {
      font-weight: 400;
      font-size: 50px;
    }
    .desc {
      font-size: 20px;
    }
  }
  .image {
    grid-column: 8 / 13;
    border-radius: 30px;
    background-size: cover;
    min-height: 484px;
  }
  &.invert {
    .content {
      grid-column: 6 / 13;
      grid-row: 1;
    }
    .image {
      grid-column: 1 / 6;
      grid-row: 1;
    }
  }
  &.no-image {
    .content {
      grid-column: 1 / 13;
    }
  }
}
</style>
