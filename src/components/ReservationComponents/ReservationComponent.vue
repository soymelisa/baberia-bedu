<template lang="pug">
  .reservation-container
    h1 Reservaciones
    .right
      .box.info
        .box-title Horarios
        .hours
          .day
            span Lunes
            span 8 am
            span 6 pm
          .day
            span Martes
            span 8 am
            span 6 pm
          .day
            span Miércoles
            span 8 am
            span 6 pm
          .day
            span Jueves
            span 8 am
            span 6 pm
          .day
            span Viernes
            span 8 am
            span 7 pm
          .day
            span Sábado
            span 8 am
            span 5 pm
          .day
            span Domingo
            span Cerrado
            span Cerrado
      .box.contact
        .box-title Teléfono
        .contact-info
          div Álvaro Obregón 110
          div
            | Col. Roma, CDMX (
            a(href='#') map
            | )
          br
          .phone
            | 246
            span -
            | 133
            span -
            | 9811
    .left
      .box.image
        .photo
          .caption Vista del Interior de la Barber Shop

</template>

<script>
export default {
  name: 'Reservation'
}
</script>

<style lang="scss" scoped>
.container{
  background-color:#EEE;
  padding:10px;
  color:#666;
  text-shadow:1px 1px 1px #CCC;
}
.box{
  box-sizing:border-box;
  background-color:white;
  border:1px solid;
  padding:10px;
  overflow:hidden;
  margin-bottom:10px;
}
.box-title{
  text-align:center;
  color:#444;
  font-weight:bold;
  padding-bottom:5px;
  font-size:1.25rem;
  border-bottom:1px solid #fff;
  margin-bottom:10px;
  line-height:1.25rem;
}
.left{
  float:left;
  width:370px;
  display:block;
  overflow:hidden;
}
.right{
  float:right;
  width:240px;
}
.photo {
    border: 1px solid #AAA;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);
    height: 350px;
    padding: 10px;
    background: url(https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    max-width:350px;
    max-height:350px;
}
</style>
