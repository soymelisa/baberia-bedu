<template lang="pug">
  .login
    h3 Inicia Secion
    br
    hr
    h6 Con Facebook
    hr
    .login-fb
      button(v-on:click='loginFB') Facebook
    hr
    h6 O con tu propia cuenta
    hr
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
/* eslint-disable */
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
            this.$router.replace('perfil')
          },
          (err) => {
            alert('Upss!' + err.message)
          }
        )
      },
      loginFB: function () {
        FB.getLoginStatus(function(response) { 
          console.log(response)
          statusChangeCallback(response)
        })
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
  .login-fb button
    color: white
    background: blue
    border-radius: 15px
    width: 25%
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


