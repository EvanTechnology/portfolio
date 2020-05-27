<template lang="pug">
  .review__box
    .review__image
        .review__avatar
            img(:src="review.absolutePath").review__image-pic
        .review__title
            h3.review__fullname {{review.author}}
            h4.review__occupation {{review.occ}}
    .review__info
        .review__desc
            p {{review.text}}
        .review__btns
            button(type="button" @click.prevent = "editCurrentReview").btn__edit-review Edit
            button(type="button" @click.prevent = "removeCurrentReview").btn__delete-review Delete

</template>

<script>
import {getAbsoluteImgPath} from '../store/helper';
import { mapActions } from "vuex"
export default {
    props: {
        review: Object
    },
    created() {
        this.review.absolutePath=getAbsoluteImgPath(this.review.photo);
    },
    methods: {
        ...mapActions("reviews", ["removeReview"]),
         async removeCurrentReview() {
                try {
                    await this.removeReview(this.review.id);
                } catch (error) {
                    console.log(error);
                }
            },
            editCurrentReview() {
                this.$emit('editWindow', this.review);
                console.log(this.review);
            }
    }

}
</script>


<style lang="postcss" scoped>
    .review__box {
        box-shadow: #f4f4f5 1px 1px 10px 5px;
        border: solid 1px #f4f4f5;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .review__image {
        width: 90%;
        margin: 30px 5% 0 5%;
        display: flex;
        align-items: center;
        padding-bottom: 30px;
        border-bottom: 1px solid #f4f4f5;
    }
    .review__avatar {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
    }
    .review__image-pic {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .review__title {
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .review__info {
        width: 90%;
        margin: 0 5% 40px 5%;
        display: flex;
        flex-direction: column;
    }
    .review__fullname, .review__occupation {
        margin: 0;
    }
    .review__desc {
        margin-bottom: 40px;
    }
    .review__btns {
        display: flex;
        justify-content: space-between;
    }
    .btn__edit-review, .btn__delete-review {
        background-color: transparent;
        border-color: transparent;
        padding: 5px 15px;
        font-size: 18px;
        color: #a0a0b2;
    }
    .btn__edit-review:hover {
        font-weight: bold;
    }
    .btn__delete-review:hover {
        font-weight: bold;
    }
    .btn__edit-review:after {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-left: 15px;
        background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);
    }
    .btn__delete-review:after {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-left: 15px;
        background: svg-load('remove.svg', fill=#c92e2e, width=100%, height=100%);
    }    



</style>