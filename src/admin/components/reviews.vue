<template lang="pug">
  main.reviews
        .reviews__container.container
            .reviews__title-block
                h1.reviews__title "Reviews" Section
            .reviews__edit-block(v-if= "addMode")
                newComponent(
                    :review = "review"
                    @addNewReview = "closeNewWindow"
                    @closeCurrentWindow = "closeNewWindow"
                )
            .reviews__edit-block(v-if= "editMode")
                editComponent(
                    :editedReview = "editedReview"
                    @closeEditWindow = "closeEditWindow"
                    @addNewReview = "closeEditWindow"
                )
            .reviews__admin-block
                .reviews__container
                    ul.reviews__list(v-if= "addMode")
                        li.reviews__item(v-for="review in reviews" :key="review.id")
                            reviewComponent(
                                :review = "review"
                                @editWindow = "openEditWindow"
                            )
                    ul.reviews__list(v-else)
                        li.reviews__item
                            .reviews__new-item(@click.prevent="openWindow")
                                .reviews__new-item-title Add New Review
                                button(type="button").btn-add-new-review +
                        li.reviews__item(v-for="review in reviews" :key="review.id")
                            reviewComponent(
                                :review = "review"
                                @editWindow = "openEditWindow"
                            )
</template>

<script>
    import reviewComponent from './reviewsReview'
    import newComponent from './reviewsNew'
    import editComponent from './reviewsEdit'
    import {mapState, mapActions} from 'vuex'
    export default {
        components: {
            reviewComponent,
            newComponent,
            editComponent
        },
        data() {
            return {
                addMode: false,
                editMode: false,
                review: Object,
                editedReview: Object
            }
        },
        computed: {
            ...mapState("reviews", {
            reviews: state => state.reviews
            })
        },
        created() {
            this.fetchReviews();
        },
        methods: {
            ...mapActions("reviews", ["fetchReviews"]),

            closeNewWindow() {
                this.addMode = false
            },
            openEditWindow(review) {
                this.addMode = false;
                this.editMode = true;
                this.editedReview = review;
                console.log(review.id)
            },
            closeEditWindow() {
                this.editMode = false;
                this.fetchReviews()
            },
            openWindow() {
                this.editMode = false;
                this.addMode = true;
                console.log(this.addMode);
            }
        }
    }
</script>

<style lang="postcss" scoped>
    @mixin phones() {
        @media screen and (max-width: 480px) {
        @content;
        }
    }
    .reviews__container {
        flex-direction: column;
    }
    .reviews__title-block {
        display: flex;
        align-items: center; 
        width: 100%;
        justify-content: flex-start;
    }
    .reviews__title {
        font-size: 24px;
        font-weight: bolder;
        color: #414c63;
    }
    .reviews__edit-block {
        width: 95%;
        margin: 0 auto;
        font-size: 20px;
        margin-bottom: 60px;
    }
    .reviews__admin-block {
        width: 100%;
    }
    .reviews__container {
        width: 100%;
    }
    .reviews__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .reviews__item {
        width: 30%;
        min-width: 300px;
        margin-bottom: 5%;
    }
    .reviews__new-item {
        display: flex;
        height: 100%;
        min-height: 350px;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        color: #fff;
        //background: rgb(33,78,219);
        background: linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(255,157,0,1) 100%);
        //background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
        font-size: 18px;
        font-weight: bold;
        border: solid 1px #ff9a00;
    }
    .btn-add-new-review {
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