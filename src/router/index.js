import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponents/HomeComponent.vue'
import SigninComponent from '@/components/SignupSigninComponents/SigninComponent.vue'
import SignupComponent from '@/components/SignupSigninComponents/SignupComponent.vue'
import ProfileComponent from '@/components/ProfileComponents/ProfileComponent.vue'
import AboutComponent from '@/components/AboutComponents/AboutComponent.vue'
import ServiceComponent from '@/components/ServiceComponents/ServiceComponent.vue'
import BarberShopComponent from '@/components/BarberShopComponents/BarberShopComponent.vue'
import ReservationComponent from '@/components/ReservationComponents/ReservationComponent.vue'
import PromotionComponent from '@/components/PromotionComponents/PromotionComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/signin',
      name: 'Signin',
      component: SigninComponent
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupComponent
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileComponent
    },
    {
      path: '/about',
      name: 'About',
      component: AboutComponent
    },
    {
      path: '/service',
      name: 'Service',
      component: ServiceComponent
    },
    {
      path: '/barber-shop',
      name: 'BarberShop',
      component: BarberShopComponent
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: ReservationComponent
    },
    {
      path: '/promotion',
      name: 'Promotion',
      component: PromotionComponent
    }
  ]
})
