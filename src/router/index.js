import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/what-we-do/overview',
    name: 'Overview',
    component: () => import('../views/whatwedo/Overview.vue'),
  },
  {
    path: '/what-we-do/vaccines-and-therapeutics',
    name: 'vaccines-and-therapeutics',
    component: () => import('../views/whatwedo/Vaccines.vue'),
  },
  {
    path: '/what-we-do/RNA-Biocontrol',
    name: 'RNA-Biocontrol',
    component: () => import('../views/whatwedo/Biocontrol.vue'),
  },
  {
    path: '/what-we-do/RNA-Formulation-strategies',
    name: 'RNA-Formulation-strategies',
    component: () => import('../views/whatwedo/RNAFormulation.vue'),
  },
  {
    path: '/what-we-do/Bioanalytical-platform-development',
    name: 'Bioanalytical-platform-development',
    component: () => import('../views/whatwedo/BioanalyticalPlatform.vue'),
  },
  {
    path: '/what-we-do/Molecular-diagnostics',
    name: 'Molecular-diagnostics',
    component: () => import('../views/whatwedo/Molecular.vue'),
  },
  {
    path: '/news-and-insights',
    name: 'NewsAndInsight',
    component: () => import('../views/Articles.vue'),
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/SingleArticle.vue'),
    params: true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
