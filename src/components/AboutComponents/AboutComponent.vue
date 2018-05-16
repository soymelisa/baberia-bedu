<template lang="pug">
  .about-container
    h1 *
    h2 Barbería MDM
    .row
    .columna.col.hidden-sm-up.columna.col.hidden-lg-up.hidden-sm-down.columna.col.hidden-xs-down.hidden-md-up.columna.col.hidden-xl-up.hidden-md-down.columna.col.hidden-lg-down Nace de la necesidad de brindar una nueva experiencia para el caballero de hoy: moderno, elegante y con la necesidad de cuidar su imagen con la experiencia de profesionales.
        | Te brindamos un servicio de máxima calidad usando los mejores productos para el cuidado de tu cabello, barba y bigote. Además contamos con personal altamente calificado.
        | Nuestra primera instalación ya está disponible en Álvaro Obregón, Del. Benito Juárez, en la Colonia Roma.
        | Reserva tu cita ahora mismo y vive la nueva experiencia
    b-card(bg-variant='dark', text-variant='white', title='Card Title')
      p.card-text
        | Te brindamos un servicio de máxima calidad usando los mejores productos para el cuidado de tu cabello, barba y bigote. Además contamos con personal altamente calificado.
        | Nuestra primera instalación ya está disponible en Álvaro Obregón, Del. Benito Juárez, en la Colonia Roma.
        | Reserva tu cita ahora mismo y vive la nueva experiencia
 
      b-button(href='#', variant='primary') Saber más
    // card-text-1.vue


</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.columna {
			background: #2191fb;
			color: #fff;
			padding: 20px;
			margin-bottom: 20px;

		}

</style>
