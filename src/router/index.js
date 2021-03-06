import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import profile from '@/components/user/profile'
import signin from '@/components/user/signin'
import signup from '@/components/user/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    }
  ],
  mode: 'history'
})
