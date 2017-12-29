import Vue from 'vue';
import Router from 'vue-router';
import Counter from '@/components/Counter.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Counter',
    component: Counter,
  },
];


export default new Router({
  routes,
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
});
