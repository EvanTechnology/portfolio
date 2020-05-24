<template lang="pug">
    .skills__item
        .skill(v-if="editMode")
            input(type="text" :placeholder="skill.title" v-model="editedSkill.title").skill__title
            input(:placeholder="skill.percent" v-model="editedSkill.percent").skill__number
            .skill__percent %
            .skill__edit
                button(type= "button" @click.prevent = "editCurrentSkill").btn-done &#10004
            .skill-remove
                button(type= "button" @click="editMode=false").btn-del &#10008
        .skill(v-else)
            input(type="text" disabled :placeholder="skill.title").skill__title
            input(placeholder="0" disabled :placeholder="skill.percent").skill__number
            .skill__percent %
            .skill__edit
                button(type= "button" @click="editMode=true").btn-edit
            .skill-remove
                button(type= "button" @click.prevent="removeCurrentSkill").btn-remove
</template>

<script>
    const regeneratorRuntime = require("regenerator-runtime");
    import {mapActions} from "vuex";
    export default {
        props: {
            skill: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        data() {
            return {
                editMode: false,
                editedSkill: {...this.skill}
            }
        },
        methods: {
            ...mapActions("skills", ["removeSkill", "editSkill"]),
            async removeCurrentSkill() {
                try {
                    await this.removeSkill(this.skill);
                } catch (error) {
                    console.log(error);
                }
            },
            async editCurrentSkill() {
                try {
                    await this.editSkill(this.editedSkill);
                } catch (error) {
                    console.log(error);
                } finally {
                    this.editMode = false;
                }
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .skill {
    padding-left: 25px;
    padding-bottom: 10px;
    font-size: 20px;
    display: grid;
    grid-template-columns: 1fr 30px 20px 40px 40px;
    }
    .skill__percent {
        align-self: center;
    }
    .btn-remove {
    width: 25px;
    height: 25px;
    border-color: transparent;
    background: svg-load('trash.svg', fill=#636363, width=100%, height=100%) no-repeat;
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