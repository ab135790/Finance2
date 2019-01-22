import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('pages/home')
    },
    {
      path: '/make',
      name: 'Make',
      component: () => import('pages/make')
    },
    {
      path: '/borrow',
      name: 'Borrow',
      component: () => import('pages/borrow')
    },
    {
      path: '/save',
      name: 'Save',
      component: () => import('pages/save')
    },
    {
      path: '/member',
      name: 'Member',
      component: () => import('pages/member')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
