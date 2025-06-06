<template lang="pug">
.what-we-do-block(
  :class="{ invert: invert, radius: hasRadius, 'no-image': image === undefined }",
  :style="blockStyle"
)
  .content.flex.column.align-start
    .title(v-if="title !== ''", :class="{ small: smallTitle }") {{ title }}
    .desc(v-for="line in desc") {{ line }}
    .flex.align-center.gap-12.more-link.clickable.link(
      @click="goMoreLink"
      v-if="moreLink !== ''")
      span {{ moreText }}
      .link-icon.flex.align-center.justify-center(:style="linkItemStyle") >
  .image(
    :class="{'small': smallImage}"
    v-if="image !== undefined && image !== ''",
    :style="{ 'background-image': 'url(/images/whatwedo/' + image }"
  )
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
    smallTitle: {
      type: Boolean,
      default: false,
    },
    smallImage: {
      type: Boolean,
      default: false,
    },
    moreLink: {
      type: String,
      default: '',
    },
    moreText: {
      type: String,
      default: 'Learn More',
    },
  },
  computed: {
    linkItemStyle() {
      const ret = {};
      if (this.color && this.color !== '') {
        ret['border-color'] = `${this.color} !important`;
      }
      return ret;
    },
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
  methods: {
    goMoreLink() {
      if (this.moreLink) {
        this.$router.push(this.moreLink);
      }
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
      &.small {
        font-size: 30px;
      }
    }
    .desc {
      font-size: 20px;
    }
    .link-icon {
      border: 1px solid black;
      border-radius: 19px;
      width: 38px;
      height: 38px;
      flex: 0 0 38px;
    }
  }
  .image {
    grid-column: 8 / 13;
    border-radius: 30px;
    background-size: cover;
    background-position: 50% 50%;
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

  @media only screen and (max-width: 900px) {
    padding: 30px !important;
    border-radius: 0 !important;
    margin: 0 !important;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .content {
      flex: 0 0 auto;
    }
    .image {
      flex: 0 0 50vw;
      min-height: 0;
      background-size: cover;
    }
    &.invert {
      .content {
        flex: 0 0 auto;
      }
      .image {
        flex: 0 0 50vw;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .image {
      flex: 0 0 calc(100vw - 60px);
    }
    &.invert {
      .image {
        flex: 0 0 calc(100vw - 60px);
      }
    }
  }
}
</style>
