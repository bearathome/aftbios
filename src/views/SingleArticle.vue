<template lang="pug">
.article.flex.column.align-center
  .title.flex.column.align-center.justify-center.gap-12
    .date.third-title {{ article.date }}
    .second-title {{ article.title }}
  .image
    img(:src="`/news-images/${article.image}`")
  .blocks.flex.column.gap-30
    .block.flex.column.gap-12(v-for="block in article.blocks")
      .block-title {{ block.title }}
      .block-content.flex.column.gap-12
        .paragraph(v-for="text in block.text") {{ text }}
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      article: {},
    };
  },
  methods: {
    async loadPage(page) {
      const rsp = await axios.get(`/news-pages/${page}.json`);
      return rsp.data;
    },
    async getArticle(page, id) {
      const articles = await this.loadPage(page);

      for (let i = 0; i < articles.length; i += 1) {
        if (articles[i].id === id) {
          return articles[i];
        }
      }
      return {};
    },
    async loadData() {
      const page = parseInt(this.$route.params.page, 10);
      const id = parseInt(this.$route.params.id, 10);

      const data = await this.getArticle(page, id);
      this.article = data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.article {
  .title {
    max-width: 60vw;
    flex: 0 0 200px;
  }
  .image {
    img {
      width: 60vw;
      max-width: 800px;
    }
  }
  .blocks {
    max-width: 800px;
    .block {
      .block-title {
        font-weight: bold;
        font-size: 20px;
      }
      .block-content {
        .paragraph {
          text-align: justify;
        }
      }
    }
  }
}
</style>
