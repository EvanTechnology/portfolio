<template lang="pug">
    .new-skill
        input(type="text" placeholder="New Skill" v-model="skill.title").new-skill__title
        input(placeholder="100" min="0" max="100" v-model="skill.percent").new-skill__number
        .new-skill__percent %
        .new-skill__add
            button(type="submit" @click.prevent="addNewSkill").btn-add.btn-add--large +
</template>

<script>
const regeneratorRuntime = require("regenerator-runtime");
import {mapActions} from "vuex";
export default {
    props: {
        category: Object
    },
    data() {
        return {
            skill: {
                title: "",
                percent: "0",
            }
        }
    },
    methods: {
        ...mapActions("skills", ["addSkill"]),
        async addNewSkill() {
            const skillData = {
                ...this.skill,
                category: this.category.id
            };
            try {
                await this.addSkill(skillData);
            } catch (error) {
                console.log(error);
      }
    }
    }
    
}
</script>

<style lang="postcss">
.new-skill {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.new-skill__title {
    width: 50%;
    margin-right: 25px;
    border-bottom: solid 1px black;
}
.new-skill__number, .new-skill__percent {
    text-align: center;
    width: 25px;
}
.new-skill__percent {
    margin-right: 10px;
}
.new-skill__add {
    //margin: 0 auto;
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