/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleMap: {},
    articles: undefined,
  },
  mutations: {
    setArticles(s, articles) {
      s.articles = articles;
    },
    setArticleMap: (s, m) => {
      s.articleMap = m;
    },
  },
  actions: {
    async loadArticles(s) {
      const rsp = await axios.get('/news-pages/articles.json');
      const tempMap = {};
      rsp.data.forEach((a) => {
        tempMap[a.id] = a;
      });
      s.commit('setArticles', rsp.data);
      s.commit('setArticleMap', tempMap);
      return rsp.data;
    },
  },
  modules: {
  },
  getters: {
    articleMap: (s) => s.articleMap,
    articles: (s) => s.articles,
  },
});
