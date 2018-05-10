<template lang="pug">
  .login
    h3 Sign In
    input(type="email", v-model="email", placeholder="Email")
    br
    input(type="password", v-model="password", placeholder="Password")
    br
    button(v-on:click='signIn') SignIn
    p
      | No tienes cuenta? 
      router-link(to='/sign-up') Registrate aquí
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (err) => {
          alert('Upss!' + err.message)
        }
      )
    }
  }
}
</script>

<style lang="sass" scoped>
  .login
    magin-top: 40px
    font-size: 30px
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


