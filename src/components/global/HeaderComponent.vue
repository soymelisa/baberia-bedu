<template lang="pug">
  b-container.header(fluid)
    b-row.h-100(align-v="center")
      h1.m-0.p-0.d-block.mx-auto Barbería MDM
       .sub-title.m-0.p-0.d-block.mx-auto Álvaro Obregón 110
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  height: 10vh;
  background-color: lightgray;
}
h1 {
  font-size:32px;
  padding:10px;
  font-weight:bold;
  text-shadow:1px 1px 1px white;
}
.sub-title{
  color:#666;
  font-size:16px;
  padding-bottom: 20px;
  text-shadow:1px 1px 1px white;
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid;
}
</style>
