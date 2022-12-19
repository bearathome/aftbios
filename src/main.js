import Vue from 'vue';
import VueMaterialIcon from 'vue-material-icon';
import AOS from 'aos';
import App from './App.vue';
import router from './router';
import store from './store';
import 'aos/dist/aos.css';

Vue.component(VueMaterialIcon.name, VueMaterialIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount('#app');
