<template lang="pug">
    main.works
        .works__container.container
            .works__title-block
                h1.works__title "Works" Section
            .works__edit-block
                newworkComponent
            .works__admin-block
                .works__container
                    ul.works__list
                        li.works__item
                            .works__new-item
                                .works__new-item-title Add New Work
                                button(type="button").btn-add-new-work +
                        li.works__item
                            workComponent
                        li.works__item
                            workComponent
                        li.works__item
                            workComponent
                        li.works__item
                            workComponent
                        
</template>

<script>
    import newworkComponent from './portfolioNewwork'
    import workComponent from './portfolioWork'
    export default {
        components: {
            newworkComponent,
            workComponent,
        }
    }
</script>

<style>
    .works__container {
        flex-direction: column;
    }
    .works__title-block {
       display: flex;
        align-items: center; 
    }
    .works__title {
        font-size: 24px;
        font-weight: bolder;
        color: #414c63;
    }
    .works__edit-block {
        width: 100%;
        margin-bottom: 60px;
    }
    .works__admin-block {
        width: 100%;
    }
    .works__container {
        width: 100%;
    }
    .works__list {
        display: flex;
        flex-wrap: wrap;
    }
    .works__item {
        width: 30%;
        margin-right: 5%;
        margin-bottom: 5%;
    }
    .works__item:nth-child(3n) {
        margin-right: 0;
    }
    .works__new-item {
        display: flex;
        height: 100%;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: rgb(33,78,219);
        background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
        font-size: 18px;
        font-weight: bold;
        border: solid 1px #383bcf;
    }
    .btn-add-new-work {
        font-size: 80px;
        font-weight: light;
        width: 125px;
        height: 125px;
        border: solid 1px #fff;
        border-radius: 50%;
        color: #fff;
        background-color: transparent;
        margin-bottom: 30px;
    }
</style>