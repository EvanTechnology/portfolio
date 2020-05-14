<template lang="pug">
  .skill
    .skill__title GIT
    .skill__number 54
    .skill__percent %
    .skill__edit
        button(type= "button").btn-edit
    .skill-remove
        button(type= "button").btn-remove
</template>

<script>
export default {

}
</script>

<style>
    .skill {
    padding-left: 25px;
    padding-bottom: 10px;
    font-size: 18px;
    display: grid;
    grid-template-columns: 1fr 50px 100px 50px 50px;
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

</style>