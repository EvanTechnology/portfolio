<template lang="pug">
    main.works
        .works__container.container
            .works__title-block
                h1.works__title "Works" Section
            .works__edit-block(v-if= "addMode")
                newworkComponent(
                    :work = "work"
                    @addNewWork ="changeMode"
                    @closeEditWindow ="changeMode"
                )
            .works__edit-block(v-if= "editMode")
                editworkComponent(
                    :editedWork = "editedWork"
                    @addNewWork ="changeMode"
                    @closeEditWindow ="changeMode"
                )
            .works__admin-block
                .works__container
                    ul.works__list(v-if= "addMode")
                        li.works__item(v-for=" work in works" :key="work.id")
                            workComponent(
                                :work = "work"
                                @editWindow ="changeEditMode"
                            )
                    ul.works__list(v-else)
                        li.works__item()
                            .works__new-item(@click.prevent ="openWindow")
                                .works__new-item-title Add New Work
                                button(type="button").btn-add-new-work +
                        li.works__item(v-for=" work in works" :key="work.id")
                            workComponent(
                                :work = "work"
                                @editWindow ="changeEditMode"
                            )
                        
</template>

<script>
    const regeneratorRuntime = require("regenerator-runtime")
    import newworkComponent from './portfolioNewwork';
     import editworkComponent from './portfolioEditWork';
    import workComponent from './portfolioWork';
    import { mapActions, mapState } from "vuex"
    export default {
        components: {
            newworkComponent,
            workComponent,
            editworkComponent
        },
        data() {
            return {
                addMode: false,
                editMode: false,
                work: Object,
                editedWork: Object
            }
        },
        computed: {
            ...mapState("works", {
            works: state => state.works
            })
        },
        created() {
            this.fetchWorks();
        },
        methods: {
            ...mapActions("works", ["fetchWorks"]),

            changeMode() {
                this.addMode = false;
                this.editMode = false;
                this.fetchWorks()
            },
            changeEditMode(work) {
                this.addMode = false;
                this.editMode = true;
                this.editedWork = work;

            },
            openWindow() {
                this.editMode = false;
                this.addMode = true;
            }

        }
    }
</script>

<style lang="postcss" scoped>
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
        width: 95%;
        margin: 0 auto;
        margin-bottom: 60px;
        font-size: 20px;
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
        justify-content: space-around;
    }
    .works__item {
        width: 30%;
        min-width: 300px;
        margin-bottom: 5%;
    }
    .works__new-item {
        display: flex;
        height: 100%;
        min-height: 350px;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(255,157,0,1) 100%);
        //background: rgb(33,78,219);
        //background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
        font-size: 18px;
        font-weight: bold;
        border: solid 1px #ff9a00;
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