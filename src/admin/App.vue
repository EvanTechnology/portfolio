<template lang="pug">
  .wrapper-admin
    headerComponent
    mainComponent
      

</template>

<script>
  import headerComponent from './components/header'
  import mainComponent from './components/main'
  export default {
    components: {
      headerComponent,
      mainComponent,
    },
    data() {
      return {

      }
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
  .wrapper-admin {
    background: rgb(246,249,254);
    background: linear-gradient(180deg, rgba(246,249,254,1) 0%, rgba(255,255,255,1) 100%);
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
  
  @mixin desktopHd() {
    @media screen and (max-width: 1800px) {
      @content;
    }
  }

  @mixin desktop() {
    @media screen and (max-width: 1200px) {
      @content;
    }
  }

  @mixin tablets() {
    @media screen and (max-width: 768px) {
      @content;
    }
  }

  @mixin phones() {
    @media screen and (max-width: 480px) {
      @content;
    }
  }
  .wrapper-admin {
    @include phones {
      width: 100%;
    }
  }
</style>