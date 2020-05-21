<template lang="pug">
  .group
    pre {{categoryId}}
    pre {{category.category}}
    pre {{skills}}
    .group__title-line(v-if="groupEditMode")
        input(type="text" placeholder="Name of the new group" v-model="title").group__title
        .group__cell
            button(type="button" @click.prevent = "addCategory").btn-done &#10004
        .group__cell
            button(type="button" @click.prevent ="groupEditMode = false").btn-del &#10008
    .group__title-line(v-else)
        input(type="text" disabled :placeholder="category.category").group__title
        .group__cell
          button(type="button" @click.prevent ="groupEditMode = true").btn-edit
        .group__cell
          button(type= "button" @click="groupEditMode=false").btn-remove
    .group__main-line
        ul.skills__list
            //li.skills__item(v-if="groupEditMode")
              skill
            li.skills__item(v-for="skill in skills" :key="skill.id")
              skill(
                :skill = "skill"
              )

    .group__last-line.new-skill(v-if="newSkillBtn")
        input(type="text" placeholder="New Skill" v-model="skill.title").new-skill__title
        input(placeholder="100" min="0" max="100" v-model="skill.percent").new-skill__number
        .new-skill__percent %
        .new-skill__add
            button(type="button" @click.prevent="addNewSkill").btn-add.btn-add--large +
    .group__last-line.new-skill(v-else)
        input(type="text" placeholder="New Skill").new-skill__title
        input(placeholder="100" min="0" max="100").new-skill__number
        .new-skill__percent %
        .new-skill__add
            button(type="button" disabled).btn-add.btn-add--large +
</template>

<script>
  import skill from './aboutSkillsSkill'
  import axios from 'axios'
  export default {
    components: {
      skill,
    },
    props: ["categoryId", "category", "skills"],
    data() {
      return {
        groupEditMode: false,
        newSkillBtn: true,
        categories: [],
        skill: {
          title: "",
          percent: 0,
          category: this.categoryId,
        },
        user: {},
        works: {},
        title: "",
     
      }
    },
    methods: {
      addCategory() {
        this.$emit('addCategory', this.title);
        //this.categories.push(this.title);
        //console.log(this.categories);
      },
      addNewSkill() {
        axios.post('/skills', this.skill).then(response => {
          this.$emit('addNewSkill', response.data);
        })
        //this.skill.newSkillTitle = this.skill.newSkillTitle;
        
        console.log(this.skill);
      },
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
    grid-template-columns: 1fr 40px 40px;
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
    grid-template-columns: 1fr 50px 30px 100px;
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
  .btn-remove {
    width: 25px;
    height: 25px;
    border-color: transparent;
    background: svg-load('trash.svg', fill=#636363, width=100%, height=100%) no-repeat;
    }

</style>