<template lang="pug">
  main.main
    .main__container.container
      .main__title-block
        h1.main__title "About me" section
        .main__controls.control
          button.control__btn.btn-add.btn-add--small +
          .control__title Add a new group
      .main__admin-block
        .groups
          ul.groups__list
            li.groups__item
              skillsComponent
            li.groups__item
              skillsComponent
            li.groups__item
              skillsComponent
              



</template>

<script>

import skillsComponent from './skills'
export default {
  components: {
    skillsComponent,
  }
}
</script>

<style lang="postcss">
  body {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
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
  .about {
    color: #a0a0b2;
    background: rgb(246,249,254);
    background: linear-gradient(180deg, rgba(246,249,254,1) 0%, rgba(255,255,255,1) 100%);
  }
 
   // MENU--------------------------------------------

  // MAIN- (TITLE LINE)-----------------------------------------
  .main__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .main__title-block {
    display: flex;
    align-items: center;
  }
  .main__title {
    font-size: 24px;
    font-weight: bolder;
    color: #414c63;
  }
  .main__controls {
    margin-left: 50px;
  }
  .control {
    display: flex;
    align-items: center;
  }
  .btn-add {
    color: #fff;
    background: rgb(33,78,219);
background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
    font-size: 18px;
    font-weight: bold;
    border: solid 1px #383bcf;
    border-radius: 50%;
    &--small {
      width: 26px;
      height: 26px;
    }
    &--large {
      font-size: 26px;
      width: 40px;
      height: 40px;
    }
  }
  .control__title {
    margin-left: 25px;
    color: #383bcf;
    font-size: 18px;
    font-weight: bolder;
  }
  // -MAIN--(GROUPS-LIST)---------------------------
  .main__admin-block {
    width: 100%;
  }
  .groups__list {
    display: flex;
    flex-wrap: wrap;
  }
  .groups__item {
    width: 45%;
    margin-right: 10%;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  
</style>
