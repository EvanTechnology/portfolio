<template lang="pug">
  .work__box
    .work__image
        img(src="../../images/content/preview_1.jpg").work__image-pic
    .work__info
        h3.work__title Some Website
        .work__desc
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ipsum dolor aspernatur repellat optio voluptatibus dolores quisquam facere eum voluptate ut velit error nihil et voluptatem modi qui dolore soluta?
        a(href="#").work__link http://loftschool.ru
        .work__btns
            button(type="button").btn__edit-work Edit
            button(type="button").btn__delete-work Delete

</template>

<script>
export default {
    props: {
            category: Object
        },

}
</script>


<style lang= "postcss" scoped>
    .work__box {
    box-shadow: #f4f4f5 1px 1px 10px 5px;
    border: solid 1px #f4f4f5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    }
    .work__image {
        width: 100%;
        margin-bottom: 30px;
    }
    .work__image-pic {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .work__info {
        width: 90%;
        margin: 0 5% 40px 5%;
        display: flex;
        flex-direction: column;
    }
    .work__title {
        margin-bottom: 30px;
    }
    .work__link {
        margin-bottom: 30px;
    }
    .work__btns {
        display: flex;
        justify-content: space-between;
    }
    .btn__edit-work, .btn__delete-work {
        background-color: transparent;
        border-color: transparent;
        padding: 5px 15px;
        font-size: 18px;
        color: #a0a0b2;
    }
    .btn__edit-work:hover {
        font-weight: bold;
    }
    .btn__delete-work:hover {
        font-weight: bold;
    }
    .btn__edit-work:after {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-left: 15px;
        background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);
    }
    .btn__delete-work:after {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-left: 15px;
        background: svg-load('remove.svg', fill=#c92e2e, width=100%, height=100%);
    }    



</style>