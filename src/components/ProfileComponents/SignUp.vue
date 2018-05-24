<template lang="pug">
form#perfil(@submit='checkForm', method='post')
      p(v-if='errors.length')
        b Por favor complete los siguientes campos:
        ul
          li(v-for='error in errors') {{ error }}
      .SignUp
        h3 Crea una nueva cuenta!
        p
          input#nombre(type='text', name='nombre', v-model='nombre', placeholder='Nombre')
        p
          input#apellidos(type='text', name='apellidos', v-model='apellidos', placeholder='Apellidos')
        p
          input#age(type='number', name='edad', v-model='edad', min='0', placeholder='Edad')
        p
          input#telefono(type='text', name='telefono', v-model='telefono', placeholder='Teléfono')
        p
          input(type="email", v-model="email", placeholder="Email")
        p
          input(type="password", v-model="password", placeholder="Password")
        p
          button(v-on:click='signUp') SignUp
        p
          | Regresa a 
          router-link(to='/login') Login
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function () {
    return {
      email: '',
      password: '',
      errors: [],
      nombre: null,
      apellidos: null,
      edad: null,
      telefono: null
    }
  },
  methods: {
    signUp: function (nombre, apellidos, edad, email, telefono) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          var userId = firebase.auth().currentUser.uid
          firebase.database().ref(`usuarios/` + user.user.uid).set({
            nombre: this.nombre,
            apellidos: this.apellidos,
            edad: this.edad,
            email: this.email,
            telefono: this.telefono
          })
          console.log(user)
          this.$router.replace('citas')
        },
        (err) => {
          alert('Upss!' + err.message)
        },
      )
    },
    checkForm: function (e) {
      if (this.name && this.age) return true
      this.errors = []
      if (!this.nombre) this.errors.push('Nombre.')
      if (!this.email) this.errors.push('Contacto.')
      if (!this.telefono) this.errors.push('Teléfono.')
      e.preventDefault()
    },
    //  regIn: function (nombre, apellidos, edad, email, telefono) {
    //   firebase.database().ref(`usuarios/`).push({
    //     nombre: this.nombre,
    //     apellidos: this.apellidos,
    //     edad: this.edad,
    //     email: this.email,
    //     telefono: this.telefono
    //   })
    // }
  }
}
</script>

<style lang="sass" scoped>
  .SignUp
    magin-top: 40px
    font-size: 30px
    border-radius: 5%
    h3
      font-size: 40px
  input
    margin: 10px 0
    width: 50%
    padding: 15px
    border-radius: 15px
  
  button
    magin-top: 20px
    width: 30%
    cursor: pointer

  p
    magin-top: 80px
    font-size: 15px

  p a 
    text-decoration: underline
    cursor: pointer
</style>
