<template lang="pug">
.articles-page.flex.column.align-center
  .page-title.flex.justify-center.align-center.second-title News and Insights
  .articles.flex.column.align-center.gap-24
    .article.flex.column.align-center.justify-end(
      v-for="article in articles",
      :key="article.title",
      @click="goArticle(article)"
    )
      .image(:style="computeArticleStyle(article)")
      .content.flex.column.align-center.gap-6
        .title.flex.column.align-center {{ article.title }}
        .brief {{ article.brief }}
      .blank
</template>

<script>
import axios from 'axios';
import info from '@/article-info.json';

export default {
  data() {
    return {
      info,
      page: 1,
      articles: [],
    };
  },
  methods: {
    async loadPage(page) {
      const rsp = await axios.get(`/news-pages/${page}.json`);
      this.page = page;
      this.articles = rsp.data;
    },
    goArticle(article) {
      this.$router.push(`/article/${this.page}/${article.id}`);
    },
    computeArticleStyle(article) {
      return {
        'background-image': `url('/news-images/${article.image}')`,
      };
    },
  },
  mounted() {
    this.loadPage(1);
  },
};
</script>

<style lang="scss" scoped>
.articles-page {
  .page-title {
    flex: 0 0 200px;
  }

  .articles {
    max-width: 1440px;
    .article {
      cursor: pointer;
      position: relative;
      max-width: 800px;
      flex: 0 0 240px;
      background: rgba(255, 249, 230, 0.9);
      border-radius: 20px;
      overflow: hidden;
      .image {
        top: 0;
        left: 0;
        width: 100%;
        height: 240px;
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
      .content {
        padding: 8px 0;
        padding-bottom: 0;
        background: rgba(208, 124, 63, 0.4);
        z-index: 1;
        text-align: justify;
        .title {
          padding: 0 20px;
          font-size: 20px;
        }
        .brief {
          color: white;
          padding: 0 8px;
          margin: 0;
          max-height: 0;
          overflow: hidden;
          z-index: 1;
          transition: all 0.3s ease-in-out;
          background: rgb(208, 124, 63);
          background: linear-gradient(
            0deg,
            rgba(208, 124, 63, 0.8) 0%,
            rgba(208, 124, 63, 0.8) 30%,
            rgba(208, 124, 63, 0) 100%
          );
        }
      }

      .blank {
        z-index: 1;
        background: rgba(208, 124, 63, 0.8);
        width: 100%;
        flex: 0 0 20px;
        max-height: 0;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        border: 1px solid #d07c3f;
        .content {
          .brief {
            max-height: 78px;
            padding: 0 20px;
            padding-top: 8px;
          }
        }
        .blank {
          max-height: 20px;
        }
      }
    }
  }
}
</style>
