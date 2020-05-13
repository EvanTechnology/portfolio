<template lang="pug">
  section.about
    headerComponent
    menuComponent
    aboutComponent
  
</template>

<script>
  import headerComponent from './components/header'
  import menuComponent from './components/menu'
  import aboutComponent from './components/aboutme'
  export default {
    components: {
      headerComponent,
      menuComponent,
      aboutComponent,
    }

  }
</script>

<style>

</style>