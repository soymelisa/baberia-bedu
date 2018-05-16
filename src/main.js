import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
// import firebase from 'firebase/app'

import App from './App'
import router from './router'
// import config from './config/config'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

// firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
