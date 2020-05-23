<template lang="pug">
    .group__title-box(v-if="groupEditMode")
        input(type="text" :placeholder="category.category").group__title
        .group__cell
            button(type="button" @click.prevent ="").btn-done &#10004
        .group__cell
            button(type="button" @click.prevent ="groupEditMode = false").btn-del &#10008
    .group__title-box(v-else)
        input(type="text" placeholder="category" disabled :placeholder="category.category").group__title
        .group__cell
        button(type="button" @click.prevent ="groupEditMode = true").btn-edit
        .group__cell
        button(type= "submit" @click.prevent="removeCurrentCategory").btn-remove
        //pre {{this.category}}
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
      groupEditMode: false,
      
    }
  },
  methods: {
    ...mapActions("categories", ["removeCategory"]),
    async removeCurrentCategory() {
        console.log(this.category);
            try {
                await this.removeCategory(this.category.id);
            } catch (error) {
                console.log(error);
            }
        },
  },
}
</script>

<style lang="postcss">
.group__title-box {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.group__title {
    margin: 0;
    margin-left: 25px;
    width: 55%;
    color: inherit;
    font-size: 20px;
    border-bottom: solid 1px #000;
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