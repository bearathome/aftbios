<template lang="pug">
.article.flex.column.align-center
  .title.flex.column.align-center.justify-center.gap-12
    .date.third-title {{ article?.date }}
    .second-title {{ article?.title }}
  .image(v-if="article")
    img(:src="`/news-images/${article.image}`")
  vue-markdown.markdown(v-if="content !== ''") {{ content }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import VueMarkdown from 'vue-markdown';

export default {
  data() {
    return {
      id: 0,
      content: '',
    };
  },
  components: {
    VueMarkdown,
  },
  computed: {
    ...mapGetters(['articleMap']),
    article() {
      return this.articleMap[this.id];
    },
    mdPath() {
      return this.article?.file;
    },
  },
  watch: {
    mdPath() {
      this.loadArticle();
    },
  },
  methods: {
    ...mapActions(['loadArticles']),
    async loadArticle() {
      if (this.mdPath) {
        const rsp = await axios.get(`/news-pages/articles/${this.mdPath}`);
        this.content = rsp.data;
      }
    },
    async loadData() {
      this.id = parseInt(this.$route.params.id, 10);
      if (!this.article) {
        this.loadArticles();
      }
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
    margin-top: 32px;
    max-width: 60vw;
    flex: 0 0 200px;
  }
  .image {
    img {
      width: 60vw;
      max-width: 800px;
    }
  }
  .markdown {
    max-width: 800px;
  }
}
</style>
