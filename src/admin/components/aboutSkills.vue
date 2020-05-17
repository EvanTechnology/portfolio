<template lang="pug">
  .group
    .group__title-line(v-if="groupEditMode")
        input(type="text" placeholder="Name of the new group").group__title
        .group__cell
            button(type="button").btn-done &#10004
        .group__cell
            button(type="button" @click.prevent ="groupEditMode = false").btn-del &#10008
    .group__title-line(v-else)
        input(type="text" disabled placeholder="Group title").group__title
        .group__cell
            //button(type="button").btn-done &#10004
        .group__cell
            button(type="button" @click.prevent ="groupEditMode = true").btn-edit
    .group__main-line
        ul.skills__list
            li.skills__item(v-if="groupEditMode")
              skill
            li.skills__item(v-else)
              skill
              skill
              skill

    .group__last-line.new-skill(v-if="newSkillBtn")
        input(type="text" placeholder="New Skill").new-skill__title
        input(placeholder="100" min="0" max="100").new-skill__number
        .new-skill__percent %
        .new-skill__add
            button(type="button" disabled).btn-add.btn-add--large +
    .group__last-line.new-skill(v-else)
        input(type="text" placeholder="New Skill").new-skill__title
        input(placeholder="100" min="0" max="100").new-skill__number
        .new-skill__percent %
        .new-skill__add
            button(type="button").btn-add.btn-add--large +
</template>

<script>
  import skill from './aboutSkillsSkill'
  export default {
    components: {
      skill,
    },
    data() {
      return {
        groupEditMode: false,
        newSkillBtn: true,
      }
    }
  }
  </script>

<style lang="postcss" scoped>
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
    color: inherit;
    font-size: 20px;
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
    //border-bottom: solid 1px black;
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
  .btn-edit {
    width: 25px;
    height: 25px;
    display: inline-block;
    border: solid 1px transparent;
    border-radius: 10px;
    margin-left: 10px;
    background: svg-load('pencil.svg', fill=#636363, width=100%, height=100%);
  } 
  .btn-add {
    color: #fff;
    background: rgb(33,78,219);
    background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
    font-size: 18px;
    font-weight: bold;
    border: solid 1px #383bcf;
    border-radius: 50%;
    &--large {
      font-size: 26px;
      width: 40px;
      height: 40px;
    }
  }

</style>