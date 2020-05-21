<template lang="pug">
    .skill(v-if="editMode")
        input(type="text" placeholder="skill").skill__title
        input(placeholder="0").skill__number
        .skill__percent %
        .skill__edit
            button(type= "button").btn-done &#10004
        .skill-remove
            button(type= "button" @click="editMode=false").btn-del &#10008
    .skill(v-else)
        input(type="text" placeholder="skill" disabled :placeholder="skill.title").skill__title
        input(placeholder="0" disabled :placeholder="skill.percent").skill__number
        .skill__percent %
        .skill__edit
            button(type= "button" @click="editMode=true").btn-edit
        .skill-remove
            button(type= "button" @click="editMode=false").btn-remove
</template>

<script>
    export default {
        props: ["skill"],
        data() {
            return {
                editMode: false,
            }
        },
        methods: {
        }
    }
</script>

<style lang="postcss" scoped>
    .skill {
    padding-left: 25px;
    padding-bottom: 10px;
    font-size: 18px;
    display: grid;
    grid-template-columns: 1fr 30px 20px 40px 40px;
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