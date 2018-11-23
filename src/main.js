// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import * as firebase from 'firebase'
Vue.use(VueResource)
Vue.use(VeeValidate)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAxInzJZe6RGWZihUCiuk3IPagsPtTPywc',
      authDomain: 'myproject-62d2f.firebaseapp.com',
      databaseURL: 'https://myproject-62d2f.firebaseio.com',
      projectId: 'myproject-62d2f',
      storageBucket: ''
    })
  },
  template: '<App/>'
})
