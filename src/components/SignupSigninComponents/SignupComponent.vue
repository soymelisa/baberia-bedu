<template lang="pug">
  .signup-container.w-100.d-flex.align-items-center
    b-container.text-center
      h3 Registro
      b-form
        b-form-group.nameInputGroup(
          label="Nombre",
          label-for="nameInput",
          description=""
        )
          b-form-input#nameInput.text-center(
            type="text",
            v-model="formSignup.name",
            placeholder="Ingresa tu nombre",
            required
          )
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
          b-form-input#repeatPasswordInput.text-center(
            type="password",
            v-model="formSignup.password",
            placeholder="Repite la contraseña",
            required
          )
        b-form-group.phoneInputGroup(
          label="Numero telefónico",
          label-for="phoneInput",
          description=""
        )
          b-form-input#phoneInput.text-center(
            type="number",
            v-model="formSignup.phone",
            placeholder="Ingresa tu numero telefónico",
            required
          )
        b-button Enviar
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      formSignup: {
        name: '',
        email: '',
        password: '',
        phone: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.signup-container {
  height: 80vh;
}
</style>
