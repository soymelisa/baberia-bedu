<template lang="pug">
  .section
    slot.h-100(name="section")
      h4 Default text
</template>

<style lang="scss" scoped>
  .section {
    height: 20vh;
    border: 1px solid black;
  }
</style>
