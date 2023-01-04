<template lang="pug">
.articles-page.flex.column
  banner(
    title="News and Insights",
    desc="We are delivering simple solutions to the problems of humanity.",
    image="insight.png"
  )
  .page-content.flex.align-stretch.justify-start
    .filters.flex.column.align-start.gap-18
      .title Article Categories
      .input-lines.flex.column.align-start.gap-18
        .input-line
          input#all(type="radio", name="category", value="", v-model="showType")
          label(for="all") All
        template(v-for="tag in tags")
          .input-line
            input(
              :id="`tag-${tag}`"
              type="radio",
              name="category",
              :value="tag",
              v-model="showType")
            label(:for="`tag-${tag}`") {{ tag }}
    .articles.flex.column.gap-36
      .article.flex.align-stretch.justify-start(
        v-for="article in showArticles",
        :key="article.title",
        @click="goArticle(article)"
      )
        .image(:style="computeArticleStyle(article)")
        .content.flex.column.justify-space-between
          .title {{ article.title }}
          .bottom-line.flex.justify-space-between
            .tags.flex.gap-12
              .tag(v-for="tag in article.tags", :key="tag") {{ tag }}
            .date {{ article.date }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Banner from '@/components/WWDBanner.vue';
import info from '@/article-info.json';

export default {
  components: {
    banner: Banner,
  },
  data() {
    return {
      info,
      page: 1,
      showType: '',
    };
  },
  watch: {
    showType() {
      this.setArticleTag(this.showType);
    },
  },
  computed: {
    ...mapGetters(['articleMap', 'articles', 'showArticles', 'tags']),
  },
  methods: {
    ...mapActions(['loadArticles', 'setArticleTag']),
    goArticle(article) {
      this.$router.push(`/article/${article.id}`);
    },
    computeArticleStyle(article) {
      return {
        'background-image': `url('/news-images/${article.image}')`,
      };
    },
  },
  mounted() {
    this.loadArticles();
  },
};
</script>

<style lang="scss" scoped>
.articles-page {
  background: #FAF5E6;
  .page-title {
    flex: 0 0 200px;
  }
  .page-content {
    padding: 0 76px;
    margin-top: 120px;

    @media only screen and (max-width: 900px) {
      flex-direction: column;
      align-items: stretch;
      padding: 0 16px;
    }
    .filters {
      flex: 0 1 370px;
      @media only screen and (max-width: 900px) {
        flex: 0 0 auto;
        padding-bottom: 60px;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .input-lines {
        @media only screen and (max-width: 900px) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }
    }

    .articles {
      flex: 0 1 1070px;
      max-width: 1070px;
      padding-bottom: 120px;
      @media only screen and (max-width: 900px) {
        flex: 0 0 auto;
      }
      .article {
        cursor: pointer;
        position: relative;
        flex: 0 0 auto;
        background: white;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09), 0px 4px 35px rgba(0, 0, 0, 0.11);
        transition: all .3s ease-in-out;
        &:hover {
          transform: translate(-5px, -5px);
        }

        @media only screen and (max-width: 720px) {
          flex-direction: column;
        }
        .image {
          top: 0;
          left: 0;
          flex: 0 0 400px;
          height: 210px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          @media only screen and (max-width: 1200px) {
            flex: 0 0 300px;
          }
        }
        .content {
          padding: 30px 20px;
          flex: 1;
          .title {
            font-size: 22px;
          }
          .bottom-line {
            font-size: 14px;
            .tags {
              .tag {
                color: #8B9094;
              }
            }
          }
        }
      }
    }
  }
}
.filters {
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
      position: absolute;
      left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label
  {
      position: relative;
      padding-left: 28px;
      cursor: pointer;
      line-height: 20px;
      display: inline-block;
      color: #666;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      border: 1px solid #ddd;
      border-radius: 100%;
      background: #fff;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
      content: '';
      width: 12px;
      height: 12px;
      background: #D07C3F;
      position: absolute;
      top: 4px;
      left: 4px;
      border-radius: 100%;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
  }
  [type="radio"]:checked + label:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
  }
}
</style>
