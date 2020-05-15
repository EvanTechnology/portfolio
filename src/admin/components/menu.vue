<template lang="pug">
    nav.menu
      .menu__container.container
        ul.menu__list
          li.menu__item About menu
          li.menu__item My work
          li.menu__item Reviews
   
  
</template>

<script>
export default {

}
</script>

<style>
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