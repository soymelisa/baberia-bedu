// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
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
window.fbAsyncInit = function () {
  FB.init({
    appId: '1827340830900389',
    xfbml: true,
    version: 'v3.0'
  })
  FB.AppEvents.logPageView()
};

(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) { return }
  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

