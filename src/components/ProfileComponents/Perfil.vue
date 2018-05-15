<template lang="pug">
  .container
    hr
    b-nav(fill='')
      b-nav-item Home
      b-nav-item Citas
      b-nav-item Perfil
      b-nav-item(v-on:click='logout') Logout
    hr
  
    form#perfil(@submit='checkForm', method='post')
      p(v-if='errors.length')
        b Por favor complete los siguientes campos:
        ul
          li(v-for='error in errors') {{ error }}
      p
        //- label(for='nombre') Nombre
        input#nombre(type='text', name='nombre', v-model='nombre', placeholder='Nombre')
      p
        //- label(for='apellidos') Apellidos
        input#apellidos(type='text', name='apellidos', v-model='apellidos', placeholder='Apellidos')
      p
        //- label(for='edad') Edad
        input#age(type='number', name='edad', v-model='edad', min='0', placeholder='Edad')
      p
        input#correo(type='email', name='correo', v-model='correo', placeholder='Correo Eléctronico')
      p
        input#telefono(type='text', name='telefono', v-model='telefono', placeholder='Teléfono')
      p
        input.boton(type='submit', value='Submit')
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'perfil',
  data: function () {
    return {
      errors: [],
      nombre: null,
      apellidos: null,
      edad: null,
      correo: null,
      telefono: null
    }
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) return true
      this.errors = []
      if (!this.nombre) this.errors.push('Nombre.')
      if (!this.correo) this.errors.push('Contacto.')
      if (!this.telefono) this.errors.push('Teléfono.')
      e.preventDefault()
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h1, h2  
  font-weight: normal

ul 
  list-style-type: none
  padding: 0

li 
  display: inline-block
  margin: 0 10px

a 
  color: #42b983

input
    margin: 10px 0
    width: 50%
    padding: 15px
    border-radius: 15px

.navBar
  border-radius: 15px
  background-color: rgba(104, 178, 255, 0.4)
  .item
    color: black

.boton
    magin-top: 20px
    width: 30%
    cursor: pointer
</style>
