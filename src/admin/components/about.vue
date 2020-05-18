<template lang="pug">
  main.main
    .main__container.container
      .main__title-block
        h1.main__title "About me" section
        .main__controls.control
          button(type="button").control__btn.btn-add.btn-add--small +
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

import skillsComponent from './aboutSkills'
export default {
  components: {
    skillsComponent,
  }
}
</script>

<style lang="postcss" scoped>

  .main__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .main__title-block {
    width: 100%;
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
    justify-content: space-around;
  }
  .groups__item {
    width: 45%;
    min-width: 300px;
    margin-right: 5%;
  }
  
</style>
