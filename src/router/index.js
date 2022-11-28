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
