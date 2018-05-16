<template lang="pug">
  .signin-container.w-100.d-flex.align-items-center
    b-container.text-center
      h3 Login
      b-form
        b-form-group.emailInputGroup(
          label="Correo Electrónico",
          label-for="emailInput",
          description=""
        )
          b-form-input#emailInput.text-center(
            type="email",
            v-model="formSignup.email",
            placeholder="Ingresa tu correo",
            required
          )
        b-form-group.passwordInputGroup(
          label="Contraseña",
          label-for="passwordInput",
          description=""
        )
          b-form-input#passwordInput.mb-3.text-center(
            type="password",
            v-model="formSignup.password",
            placeholder="Ingresa una contraseña",
            required
          )
        b-button Entrar
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      formSignup: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.signin-container {
  height: 80vh;
}
</style>
