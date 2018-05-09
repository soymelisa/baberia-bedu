<template lang="pug">
  b-container.footer.w-100(fluid)
    b-row.h-100
      b-col.h-100.nav-item
        router-link(to="home")
          b-row.h-100(align-v="center")
            .m-0.p-0.d-block.mx-auto Menu
      b-col.h-100.nav-item
        router-link(to="profile")
          b-row.h-100(align-v="center")
            .m-0.p-0.d-block.mx-auto Perfil
      b-col.h-100.nav-item
        router-link(to="promotion")
          b-row.h-100(align-v="center")
            .m-0.p-0.d-block.mx-auto Promociones

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  height: 10vh;
  background-color: lightgray;
}
.nav-item {
  border: 1px solid black;
}
</style>
