<template lang="pug">
    .new-review
        h2.new-review__title New Review
        .new-review__block
            label.new-review__preview
                .new-review__image
                    .new-review__stub
                    
                    input(type="file").new-review__photo
                    //img(src="../../images/content/man-user_admin.png").new-review__photo
                span.btn-upload-photo Add photo
            form.new-review__info
                .form-row.form-row__introduction
                    label.form-column
                        .form-row__title Name
                        input(type="text" name="name" placeholder="Web-Site of Porsche dealer" required).form-row__text.form-row__name
                    label.form-column
                        .form-row__title Occupation
                        input(type="web" name="web-address" placeholder="https://www.porshe-pulkovo.ru" required).form-row__text.form-row__website
                .form-row
                    label.form-column
                        .form-row__title Review
                        textarea(name="description" placeholder="jkvb;djbv;ds bjbc bcibn casb cn;asbcas obcoabscoasbco'abn'oaUJ" required).form-row__text.form-row__desc
                .form-row.form-row__btns
                    button(type="Reset").btn-reset Cancel
                    button(type="Submit").btn-submit Submit

  
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
    @mixin phones() {
        @media screen and (max-width: 480px) {
            @content;
        }
    }
    .new-review {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        box-shadow: #f4f4f5 1px 1px 10px 5px;
        border: solid 1px #f4f4f5;
        background-color: #fff;
    }
    .new-review__title {
        width: 90%;
        margin-left: 5%;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: solid 1px #a0a0b2;

    }
    .new-review__block {
        display: flex;
        align-items: flex-start;
        width: 100%;
        @include phones {
            flex-direction: column;
            align-items: center
        }
    }
    .new-review__preview {
        width: 30%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include phones {
            margin-left: 0;
            width: 95%;
        }
    }
    .new-review__image {
        height: 175px;
        width: 175px;
        border: solid 1px #dee4ed;
      
        background-color: #dee4ed;
        margin-bottom: 30px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .new-review__stub {
        width: 75%;
        height: 75%;
        background: svg-load('user.svg', fill=#ffffff, stroke=  #ffffff, width=150%, height=150%)center center no-repeat;
    }
    .new-review__photo {
        display: none;
        width: 100%;
        height:100%;
        background: url("../../images/content/man-user_admin.png") center center no-repeat;
    }
    .btn-submit {
        width: 180px;
        color: #fff;
        //background: rgb(33,78,219);
        background: linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(255,157,0,1) 100%);
        //background: linear-gradient(90deg, rgba(33,78,219,1) 0%, rgba(63,53,203,1) 100%);
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
        padding: 15px 0px;
        border: solid 1px #ff9a00;
        border-radius: 24px;
    }
    .new-review__info {
        width: 42.5%;
        margin: 0 5%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        @include phones {
            margin: 50px 0 0 0;
            width: 95%;
        }
    }
    .form-row {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 30px;
    }
    .form-row__introduction {
        @include phones {
            flex-direction: column;
            align-items: center;
        }
    }
    .form-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        @include phones {
            width: 95%;
        }
    }
    .form-column:nth-child(2n) {
        margin-left: 5%;
        @include phones {
            margin-left: 0;
        }
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
    .form-row__btns {
        flex-direction: row;
        justify-content: flex-end;
    }
    .btn-reset, .btn-upload-photo {
        color: #ff9a00;
        background-color: transparent;
        width: 180px;
        font-size: 18px;
        font-weight: bold;
        padding: 15px 0px;
        border: solid 1px transparent;
        border-radius: 24px;
        text-align: center;
    }


</style>