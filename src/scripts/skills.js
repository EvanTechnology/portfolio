import Vue from "vue";
import axios from 'axios';
import $axios from '../admin/requests';

const skill = {
    template: "#skill",
    props: ["skill"],
    methods: {
      drawColoredCircle() {
        const circle = this.$refs["circle"];
        const dashArray = parseInt(
          getComputedStyle(circle).getPropertyValue("stroke-dasharray")
        );
        const percent = (dashArray / 100) * (100 - this.skill.percent);
  
        circle.style.strokeDashoffset = percent;
  
      },
    },
    mounted() {
      this.drawColoredCircle();
    },
  };

const skillsRow = {
    template: "#skills-row",
    components: {
      skill,
    },
    props: ["category"],
  };
  
new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
      skillsRow,
    },
    data() {
      return {
        skills: [],
        user: ""
      };
    },
    created() {
         //const data = require("../data/skills.json");
         this.fetchCategories();
     
    },
    methods: {
      async fetchCategories() {
        try {
            const getUserId = await $axios.get('/user');
            const userId = getUserId.data.user.id;
            console.log(userId);
            const {data} = await $axios.get(`/categories/${userId}`);
            this.skills = data;
            console.log(this.skills)
        } catch (error) {
            console.log(error);
        }
      }
    }
  });

