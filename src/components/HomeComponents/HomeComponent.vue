<template lang="pug">
  .main-container.w-100
    SectionComponent(@click="this.sectionSelected='about'")
      template(slot="section")
        router-link(to="about")
          b-container.section.w-100.h-100(fluid)
            b-row.h-100( align-v="center")
              h2.m-0.p-0.d-block.mx-auto Nosotros
    SectionComponent
      template(slot="section")
        router-link(to="service")
          b-container.section.w-100.h-100(fluid)
            b-row.h-100( align-v="center")
              h2.m-0.p-0.d-block.mx-auto Servicios
    SectionComponent
      template(slot="section")
        router-link(to="barber-shop")
          b-container.section.w-100.h-100(fluid)
            b-row.h-100( align-v="center")
              h2.m-0.p-0.d-block.mx-auto Barberías
    SectionComponent
      template(slot="section")
        router-link(to="reservation")
          b-container.section.w-100.h-100(fluid)
            b-row.h-100( align-v="center")
              h2.m-0.p-0.d-block.mx-auto Reservaciones
</template>

<script>
import SectionComponent from './SectionComponent'

export default {
  name: 'Home',
  components: {
    SectionComponent
  }
}
</script>

<style lang="scss">

</style>
