<template lang="pug">
    .new-work
        h2.new-work__title Edit work
        .new-work__block
            form.new-work__preview
                label(for="file").new-work__instruction Upload image or drop it here
                input(type="file" name="file").choose-btn
                button(type='button').btn-upload Upload
            form.new-work__info
                .form-row
                    .form-column
                        .form-row__title Name
                        input(type="text" name="name" placeholder="Web-Site of Porsche dealer" required).form-row__text.form-row__name
                .form-row
                    .form-column
                        .form-row__title Link
                        input(type="web" name="web-address" placeholder="https://www.porshe-pulkovo.ru" required).form-row__text.form-row__website
                .form-row
                    .form-column
                        .form-row__title Description
                        textarea(name="description" placeholder="jkvb;djbv;ds bjbc bcibn casb cn;asbcas obcoabscoasbco'abn'oaUJ" required).form-row__text.form-row__desc
                .form-row
                    .form-column
                        .form-row__title Add a tag
                        input(type="text" name="tag" placeholder="JQuery, Vue.js" required).form-row__text.form-row__tags
                        ul.form-row__tags-btns
                            li.form-row__tag
                                button(type="button").btn-delete-tag JQuery
                            li.form-row__tag
                                button(type="button").btn-delete-tag Vue.js
                .form-row.form-row__btns
                    button(type="Reset").btn-reset Cancel
                    button(type="Submit").btn-submit Submit

  
</template>

<script>
export default {

}
</script>

<style lang= "postcss" scoped>
    .new-work {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        box-shadow: #f4f4f5 1px 1px 10px 5px;
        border: solid 1px #f4f4f5;
        background-color: #fff;
    }
    .new-work__title {
        width: 90%;
        margin-left: 5%;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: solid 1px #a0a0b2;

    }
    .new-work__block {
        display: flex;
        align-items: flex-start;
        width: 100%;
    }
    .new-work__preview {
        width: 42.5%;
        margin-left: 5%;
        height: 250px;
        border: dashed 5px #a0a0b2;
        background-color: #dee4ed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .new-work__instruction {
        width: 50%;
        margin-bottom: 20px;
        text-align: center;
    }
    .choose-btn {
        padding: 15px 15px;
        background-color: transparent;
        color: inherit;
        width: 40%;
    }
    .btn-upload, .btn-submit {
        width: 180px;
        color: #fff;
        background: rgb(33,78,219);
        background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
        padding: 15px 0px;
        border: solid 1px #383bcf;
        border-radius: 24px;
    }
    .new-work__info {
        width: 42.5%;
        margin: 0 5%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .form-row {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 30px;
    }
    .form-column {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .form-row__text {
        width: 100%;
        color: #636363;
        padding: 15px 0px;
        border-color: transparent;
        border-bottom: solid 1px #636363;
    }
    .form-row__desc {
        border: solid 1px #a0a0b2;
        padding: 15px 5%;
        width: 90%;
    }
    .form-row__tags {
        margin-bottom: 30px;
    }
    .form-row__tags-btns {
        display: flex;
    }
    .form-row__tag {
        margin-right: 25px;
    }
    .btn-delete-tag {
        font-size: 20px;
        color: #a0a0b2;
        padding: 5px 15px;
        border: solid 1px #a0a0b2;
        border-radius: 18px;
        background-color: #dee4ed;
    }
    .btn-delete-tag:after {
        content: "\2716";
        display: inline;
        padding-left: 15px;
    }
    .btn-delete-tag:hover {
        font-weight: bold;
    }
    .form-row__btns {
        flex-direction: row;
        justify-content: flex-end;
    }
    .btn-reset {
        color: #214edb;
        background-color: transparent;
        width: 180px;
        font-size: 18px;
        font-weight: bold;
        padding: 15px 0px;
        border: solid 1px transparent;
        border-radius: 24px;
    }


</style>