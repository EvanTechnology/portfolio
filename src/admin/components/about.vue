<template lang="pug">
  main.main
    
    .main__container.container
      .main__title-block
        h1.main__title "About me" section
        .main__controls.control
          input(type="text" v-model="category.title" required)
          .control__title Add a new group
          button(type="button" @click.prevent ="createNewCategory").control__btn.btn-add.btn-add--small +
      .main__admin-block
        .groups
          ul.groups__list
            li.groups__item(v-for="category in categories" :key="category.id" ).group
              categoryComponent(
                :category = "category"
              )
              .group__main-line
                skills-group(
                  :category = "category"
                )
                  

              .group__last-line
                newSkillComponent(
                  :category = "category"
                )
                  //pre {{category}}
                  //pre {{skill}}
              //.group__last-line.new-skill(v-else)
                  input(type="text" placeholder="New Skill").new-skill__title
                  input(placeholder="100" min="0" max="100").new-skill__number
                  .new-skill__percent %
                  .new-skill__add
                      button(type="button" disabled).btn-add.btn-add--large +
                      
              



</template>

<script>
const regeneratorRuntime = require("regenerator-runtime");
import skillsGroup from "./aboutSkillsList";
import categoryComponent from "./aboutCategory";
import newSkillComponent from "./aboutSkillNew";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsGroup,
    newSkillComponent,
    categoryComponent
  },
  data() {
    return {
      groupEditMode: false,
      //newSkillBtn: true,
      category: {
        title: "",
      },
      skill: {
        title: "",
        percent: "0",
        category: ""
      },
      
    }
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories", "removeCategory"]),
    async createNewCategory() {
      try {
        console.log(this.category.title);
        await this.addCategory(this.category.title);
        
        this.category.title = "";
      } catch (error) {
        console.log(error);
        console.log(myError);
      }
    },
    async removeCurrentCategory() {
        console.log(category);
                try {
                    await this.removeCategory(this.category.id);
                } catch (error) {
                    console.log(error);
                    console.log(error.response.data.message);
                    console.log(error.response.data.error);
                    console.log(error.response.data.errors);
                    this.errorMessage = error.response.data.message || error.response.data.error;
                    console.log(this.errorMessage);
                }
            },
  },
}


</script>

<style lang="postcss" scoped>
  @mixin tablets() {
    @media screen and (max-width: 768px) {
      @content;
    }
  }
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
    @include tablets {
      flex-direction: column;
      justify-content: center;
    }
  }
  .main__title {
    font-size: 24px;
    font-weight: bolder;
    color: #414c63;
  }
  .main__controls {
    margin-left: 50px;
    @include tablets {
      margin-left: 0;
      margin-bottom: 25px;
    }
  }
  .control {
    display: flex;
    align-items: center;
  }
  .btn-add {
    color: #fff;
    margin-left: 15px;
    //background: rgb(33,78,219);
    background: linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(255,157,0,1) 100%);
    //background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
    font-size: 18px;
    font-weight: bold;
    border: solid 1px #ff9a00;
    border-radius: 50%;
    padding:0;
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
    margin-left: 15px;
    color: #636363;
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
    width: 44%;
    min-width: 300px;
    margin-right: 5%;
    margin-bottom: 30px;
  }
  //- GROUP-----------------------------------------
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
    //display: grid;
    width: 100%;
    //align-items: center;
    font-weight: bolder;
    //grid-template-columns: 1fr 40px 40px;
  }

  .group__main-line {
    grid-area: skills;
  }
 
  .group__last-line {
    grid-area: new;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
  
  .btn-remove {
    width: 25px;
    height: 25px;
    border-color: transparent;
    background: svg-load('trash.svg', fill=#636363, width=100%, height=100%) no-repeat;
    }
</style>