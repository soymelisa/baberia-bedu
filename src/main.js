// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
let app
let config = {
  apiKey: 'AIzaSyCm_GiZT5kC-VBxFpPRB2F-X1uZemOHHRY',
  authDomain: 'barberia-6dfab.firebaseapp.com',
  databaseURL: 'https://barberia-6dfab.firebaseio.com',
  projectId: 'barberia-6dfab',
  storageBucket: 'barberia-6dfab.appspot.com',
  messagingSenderId: '50399763158'
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
})

