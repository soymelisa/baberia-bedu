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
export default {
  name: 'citas',
  data: function () {
    return {}
  }
}
</script>
<style lang="sass">

</style>
