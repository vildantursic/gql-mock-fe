import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/votes',
      name: 'votes',
      // route level code-splitting
      // this generates a separate chunk (votes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "votes" */ './views/Votes.vue'),
    },
  ],
});
