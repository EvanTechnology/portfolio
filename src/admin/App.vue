<template lang="pug">
  .wrapper-admin
    section.about
      headerComponent
      menuComponent
      aboutComponent
    section.works
      headerComponent
      menuComponent
      worksComponent

</template>

<script>
  import headerComponent from './components/header'
  import menuComponent from './components/menu'
  import aboutComponent from './components/about'
  import worksComponent from './components/portfolio'
  export default {
    components: {
      headerComponent,
      menuComponent,
      aboutComponent,
      worksComponent,
    }

  }
</script>
  

<style>
    body {
    margin: 0;
    color: #a0a0b2;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a, button {
    cursor: pointer;
  }
  .about, .works {
    background: rgb(246,249,254);
    background: linear-gradient(180deg, rgba(246,249,254,1) 0%, rgba(255,255,255,1) 100%);
  }
  .container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

</style>