import Vue from 'vue';
import VueMaterialIcon from 'vue-material-icon';
import AOS from 'aos';
import misc from '@/plugins/misc';
import Banner from '@/components/WWDBanner.vue';
import Block from '@/components/WWDBlock.vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'aos/dist/aos.css';

Vue.component(VueMaterialIcon.name, VueMaterialIcon);

Vue.config.productionTip = false;
Vue.use(misc);
Vue.component('wwd-banner', Banner);
Vue.component('wwd-block', Block);

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount('#app');
