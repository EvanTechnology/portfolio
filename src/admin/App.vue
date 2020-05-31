<template lang="pug">
    .wrapper-admin
      headerComponent
      mainComponent
      //loginComponent

</template>

<script>
  import headerComponent from './components/header'
  import mainComponent from './components/main'
  import loginComponent from './components/login'
  export default {
    components: {
      headerComponent,
      mainComponent,
      loginComponent,
    },
    data() {
      return {
      }
    }

  }
</script>
  

<style>
@import "../styles/mixins.pcss";
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
    color: inherit;
    text-decoration: none;
  }
  input, textarea {
  border-color: transparent;
  color: inherit;
  }
  input:disabled {
    background-color: transparent;
  }
  .wrapper {
    overflow: hidden;
  }
  .wrapper-admin {
    
    background: linear-gradient(180deg, rgba(230,232,239,1) 0%, rgba(244,232,200,1) 100%);
  }
  .container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
  }

  .wrapper-admin {
    @include phones {
      width: 100%;
    }
  }
</style>