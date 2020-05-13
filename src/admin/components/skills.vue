<template lang="pug">
  .group
    .group__title-line 
        h2.group__title Workflow
        .group__cell
            button.btn-done &#10004
        .group__cell
            button.btn-del &#10008
    .group__main-line
        ul.skills__list
            li.skills__item
              skill
            li.skills__item
              skill
            li.skills__item
              skill
            li.skills__item
              skill
    .group__last-line.new-skill
        .new-skill__title New skill
        .new-skill__number 100
        .new-skill__percent %
        .new-skill__add
            button.btn-add.btn-add--large +
</template>

<script>
  import skill from './skill'
  export default {
    components: {
      skill,
    }
  }
  </script>

<style>
    .group {
    box-shadow: #f4f4f5 1px 1px 10px 5px;
    border: solid 1px #f4f4f5;
    display: grid;
    grid-template-areas: "title"
                          "skills"
                          "new";
    grid-template-rows: 100px 1fr 100px;
  }
  .group__title-line {
    grid-area: title;
    display: grid;
    width: 100%;
    align-items: center;
    font-weight: bolder;
    grid-template-columns: 1fr 50px 50px;
  }
  .group__title {
    margin: 0;
    margin-left: 25px;
    padding-bottom: 25px;
    width: 75%;
    border-bottom: solid 1px #000;
  }
  .group__main-line {
    grid-area: skills;
  }
 
  .group__last-line {
    grid-area: new;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 50px 50px 100px;
  }
  .new-skill__title {
    width: 75%;
    margin-left: auto;
    margin-right: 25px;
    padding-bottom: 15px;
    border-bottom: solid 1px black;
  }
  .new-skill__number, .new-skill__percent {
    padding-bottom: 15px;
    border-bottom: solid 1px black;
    text-align: center;
  }
  .new-skill__add {
    margin: 0 auto;
  }
  .btn-done {
    font-size: 25px;
    color: teal;
    background-color: transparent;
    border-color: transparent;
  }
  .btn-del {
    font-size: 25px;
    color: crimson;
    background-color: transparent;
    border-color: transparent;
  }


</style>