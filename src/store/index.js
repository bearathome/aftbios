/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleMap: {},
    tag: '',
    tags: [],
    articles: undefined,
  },
  mutations: {
    setArticles(s, articles) {
      s.articles = articles;
    },
    setArticleMap: (s, m) => {
      s.articleMap = m;
    },
    setArticleTag: (s, tag) => {
      s.tag = tag;
    },
    setTags: (s, tags) => {
      s.tags = tags;
    },
  },
  actions: {
    async loadArticles(s) {
      const rsp = await axios.get('/news-pages/articles.json');
      const tempMap = {};

      const tagMap = {};
      rsp.data.forEach((a) => {
        tempMap[a.id] = a;
        a.tags.forEach((t) => {
          tagMap[t] = true;
        });
      });

      s.commit('setTags', Object.keys(tagMap));
      s.commit('setArticles', rsp.data);
      s.commit('setArticleMap', tempMap);
      return rsp.data;
    },
    setArticleTag(s, tag) {
      s.commit('setArticleTag', tag);
    },
  },
  modules: {
  },
  getters: {
    articleMap: (s) => s.articleMap,
    articles: (s) => s.articles,
    showArticles: (s) => {
      if (s.tag === '') {
        return s.articles;
      }
      return s.articles.filter((a) => a.tags.indexOf(s.tag) >= 0);
    },
    tags: (s) => s.tags,
  },
});
