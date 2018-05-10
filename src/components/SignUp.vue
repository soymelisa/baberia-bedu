<template lang="pug">
  .SignUp
    h3 Crea una nueva cuenta!
    input(type="email", v-model="email", placeholder="Email")
    br
    input(type="password", v-model="password", placeholder="Password")
    br
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
    return {}
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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
  .SignUp
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
