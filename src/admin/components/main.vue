<template lang="pug">
  .content
    
    nav.menu
      .menu__container.container
        ul.menu__list
          li.menu__item
            router-link(
              tag= "a",
              class = "menu__link",
              to = "/"
            ) About me
          li.menu__item
            router-link(
              tag= "a",
              class = "menu__link",
              to = "/works"
            ) My work
          li.menu__item
            router-link(
              tag= "a",
              class = "menu__link",
              to = "/reviews"
            ) Reviews
    .main-block

      router-view
   
  
</template>

<script>
import aboutComponent from './about'
  export default {
    components: {
      aboutComponent,
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="postcss" scoped>
    .menu {
      background-color: #ffffff;
    }
    .menu__container {
      padding: 0;
    }
    .menu__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    }
    .menu__item {
    font-size: 18px;
    padding: 25px;
    border-bottom: solid 2px transparent;
    cursor: pointer;
    }
    .menu__item:hover {
      border-bottom: 2px solid #383bcf;
    }
    .menu__item.active {
      color: #383bcf;
    }
</style>