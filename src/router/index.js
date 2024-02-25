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
    path: '/about/story',
    name: 'About-Story',
    component: () => import('../views/aboutus/Story.vue'),
  },
  {
    path: '/about/story/purpose',
    name: 'About-Story-Purpose',
    component: () => import('../views/aboutus/story/Purpose.vue'),
  },
  {
    path: '/about/story/dedication',
    name: 'About-Story-Dedication',
    component: () => import('../views/aboutus/story/Dedication.vue'),
  },
  {
    path: '/about/team',
    name: 'About-Team',
    component: () => import('../views/aboutus/Team.vue'),
  },
  {
    path: '/about/team',
    name: 'About-Team',
    component: () => import('../views/aboutus/Team.vue'),
  },
  {
    path: '/about/careers',
    name: 'About-Careers',
    component: () => import('../views/aboutus/Careers.vue'),
  },
  {
    path: '/about/careers/joinus',
    name: 'About-Careers-JoinUs',
    component: () => import('../views/aboutus/careers/Joinus.vue'),
  },
  {
    path: '/about/careers/open-positions',
    name: 'About-Careers-OpenPositions',
    component: () => import('../views/aboutus/careers/OpenPositions.vue'),
  },
  {
    path: '/about/partnering',
    name: 'About-Partnering',
    component: () => import('../views/aboutus/Partnering.vue'),
  },
  {
    path: '/about/partnering/exploring',
    name: 'About-Partnering-Exploring',
    component: () => import('../views/aboutus/partnering/Exploring.vue'),
  },
  {
    path: '/about/partnering/contact',
    name: 'About-Partnering-Contact',
    component: () => import('../views/aboutus/partnering/Contact.vue'),
  },
  {
    path: '/news-and-insights',
    name: 'NewsAndInsight',
    component: () => import('../views/Articles.vue'),
  },
  {
    path: '/stakeholders',
    name: 'Stakeholders',
    component: () => import('../views/Stakeholders.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue'),
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/SingleArticle.vue'),
    params: true,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
