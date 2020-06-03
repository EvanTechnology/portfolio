<template lang="pug">
    .new-work
        .message(
            v-if="message"
            @click="closeMessage"
            ) All fields are required
        h2.new-work__title New work
        form.new-work__block
            label.new-work__preview(
                :style="{backgroundImage: `url(${work.renderedPhoto})`}"
            )
                .new-work__instruction Upload image or drop it here
                input(
                    type="file" 
                    name="work.photo" 
                    ref="file"
                    enctype="multipart/form-data"
                    @change= "upLoadImage"
                    ).choose-btn
                .btn-upload Upload
            .new-work__info
                .form-row
                    label.form-column
                        .form-row__title Name
                        input(type="text" name="name" placeholder="Web-Site of Porsche dealer" required v-model="work.title").form-row__text.form-row__name
                .form-row
                    label.form-column
                        .form-row__title Link
                        input(type="web" name="web-address" placeholder="https://www.porshe-pulkovo.ru" required v-model="work.link").form-row__text.form-row__website
                .form-row
                    label.form-column
                        .form-row__title Description
                        textarea(name="description" placeholder="jkvb;djbv;ds bjbc bcibn casb cn;asbcas obcoabscoasbco'abn'oaUJ" required v-model="work.description").form-row__text.form-row__desc
                .form-row
                    label.form-column
                        .form-row__title Add a tag
                        input(type="text" name="tag" placeholder="JQuery, Vue.js" required v-model="work.techs" @input="stringToArray").form-row__text.form-row__tags
                        ul.form-row__tags-btns
                            li.form-row__tag(v-for="tag in tags")
                                tagComponent(
                                    :tag ="tag"
                                    @removeTag = "removeTag"
                                )
                .form-row.form-row__btns(v-if="transferOff")
                    button(type="Reset" @click.prevent = "closeWindow").btn-reset Cancel
                    button(type="Submit" @click.prevent = "addNewWork").btn-submit Submit

  
</template>

<script>
//const regeneratorRuntime = require("regenerator-runtime");
import { mapActions, mapState } from "vuex";
import tagComponent from './portfolioTag';
import {renderer} from '../store/helper';
export default {
    components: {
        tagComponent
    },
    
    data() {
        return {
            work: {
                title: "",
                techs: "",
                photo: {},
                link: "",
                description: "",
                renderedPhoto: ""
            },
            tags: [],
            transferOff: true,
            message: false
        }
    },
    methods: {
        ...mapActions("works", ["addWork"]),
        validationForm() {
            for (let key in this.work) {
                if (!this.work[key]) 
                return false
            }
            if (!this.work.photo.name) {
                return false
            }
            return true
        },
        async addNewWork() {
            if (this.validationForm()) {
                this.transferOff= false;
                let formData =  new FormData();
                formData.append('title', this.work.title );
                formData.append('techs', this.work.techs);
                formData.append('photo', this.work.photo);
                formData.append('link', this.work.link);
                formData.append('description', this.work.description);
            try {
                await this.addWork(formData);
                this.work.title = "";
                this.work.techs = "";
                this.work.photo = "";
                this.work.link = "";
                this.work.description = "";
                this.$emit("addNewWork")
            } catch (error) {
                console.log(error);
            } finally {
                this.transferOff = true;
            }
            } else this.message = true
            
        },
        upLoadImage(event) {
            this.work.photo = this.$refs.file.files[0];
            const photo = this.$refs.file.files[0];
            renderer(photo).then(pic => {
                this.work.renderedPhoto = pic;
            })
        },
        closeWindow() {
            this.$emit("closeEditWindow")
        },
        stringToArray() {
            this.tags = this.work.techs.split(', ');
        },
        removeTag(tag) {
            let index = parseInt(this.tags.indexOf(tag));
            this.tags.splice(index, 1);
            this.work.techs = this.tags.join(', ')
        },
        closeMessage() {
            this.message = false;
            console.log(this.message)
        }
       
    }
}
</script>

<style lang= "postcss" scoped>
      @mixin tablets() {
    @media screen and (max-width: 768px) {
      @content;
    }
  }

  @mixin phones() {
    @media screen and (max-width: 480px) {
      @content;
    }
  }
    .new-work {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        box-shadow: #f4f4f5 1px 1px 10px 5px;
        border: solid 1px #f4f4f5;
        background-color: #fff;
    }
    .message {
        position: absolute;
        top: 2%;
        right: 2%;
        background-color: #dee4ed;
        border-radius: 15px;
        color: red;
        font-size: 20px;
        padding: 15px 50px;
    }
    .message:after {
        content: "\2717";
        display: inline-block;
        margin-left: 15px;
        width: 25px;
        height: 25px;
        border-color: transparent;
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
        @include tablets {
            flex-direction: column;
            align-items: center;
            width: 85%;
        }
        @include phones {
            width: 95%;
        }
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
        @include tablets {
            width: 75%;
            margin-bottom: 50px;
        }
        @include phones {
            width: 95%;
        }
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
        display: none;
    }
    .btn-upload, .btn-submit {
        width: 180px;
        color: #fff;
        background: linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(255,157,0,1) 100%);
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
        padding: 15px 0px;
        border: solid 1px #ff9a00;
        border-radius: 24px;
        text-align: center;
    }
    .new-work__info {
        width: 42.5%;
        margin: 0 5%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        @include tablets {
            width: 75%;
            margin-bottom: 50px;
        }
        @include phones {
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
    .form-column {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .form-row__text::placeholder {
        color: rgba(255,157,0,1);
    }
    .form-row__text {
        width: 100%;
        font-size: 18px;
        color: #636363;
        padding: 15px 0px;
        border-color: transparent;
        border-bottom: solid 1px #636363;
    }
    .form-row__desc {
        border: solid 1px #a0a0b2;
        padding: 15px 5%;
        width: 90%;
        font-size: 18px;
    }
    .form-row__tags {
        margin-bottom: 30px;
    }
    .form-row__tags-btns {
        display: flex;
    }
    .form-row__tag {
        font-size: 20px;
        color: #a0a0b2;
        padding: 5px 15px;
        border: solid 1px #a0a0b2;
        border-radius: 18px;
        background-color: #dee4ed;
        margin-right: 25px;
        &:hover {
            color: #636363;
        }
    }
    .btn-delete-tag {
        border: none;
        display: inline-block;
        background-color: transparent;
    }
    .form-row__btns {
        flex-direction: row;
        justify-content: flex-end;
    }
    .btn-reset {
        color: #ff9a00;
        background-color: transparent;
        width: 180px;
        font-size: 18px;
        font-weight: bold;
        padding: 15px 0px;
        border: solid 1px transparent;
        border-radius: 24px;
    }


</style>