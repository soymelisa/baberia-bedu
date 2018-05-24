import Vue from 'vue'
import Router from 'vue-router'

import Perfil from '@/components/ProfileComponents/Perfil'
import Login from '@/components/ProfileComponents/Login'
import SignUp from '@/components/ProfileComponents/SignUp'
import Citas from '@/components/ProfileComponents/Citas'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/citas',
      name: 'Citas',
      component: Citas,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('perfil')
  else next()
})

export default router
