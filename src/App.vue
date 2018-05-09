<template>
  <div class="m-0 p-0" id="app">
    <header-component></header-component>
    <router-view></router-view>
    <nav-component class="nav-footer"></nav-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/global/HeaderComponent.vue'
import NavComponent from '@/components/global/NavComponent.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    NavComponent
  }
}
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}
#app {
  height: 100vh;
  width: 100vw;
}
.nav-footer {
  position: absolute;
  bottom: 0;
}
</style>
