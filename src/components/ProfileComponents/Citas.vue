<template lang="pug">
 .container
    hr
    b-nav(fill='')
      b-nav-item Perfil
      b-nav-item Citas
      b-nav-item(v-on:click='logout') Logout
    hr
    h1 Reserva tu Cita
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'citas',
  data: function () {
    return {}
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
<style lang="sass">

</style>
