<template lang="pug">
    .new-work
        h2.new-work__title Edit work
        .new-work__block
            label.new-work__preview(
                :style="{backgroundImage: `url(${newWork.renderedPhoto})`}"
            )
                .new-work__instruction Upload image or drop it here
                input(
                    type="file" 
                    ref="file"
                    enctype="multipart/form-data"
                    @change= "upLoadImage"
                    ).choose-btn
                .btn-upload Upload
            form.new-work__info
                .form-row
                    label.form-column
                        .form-row__title Name
                        input(type="text" name="name" :placeholder="editedWork.title" required v-model="newWork.title").form-row__text.form-row__name
                .form-row
                    label.form-column
                        .form-row__title Link
                        input(type="web" name="web-address" :placeholder="editedWork.link" required v-model="newWork.link").form-row__text.form-row__website
                .form-row
                    label.form-column
                        .form-row__title Description
                        textarea(name="description" :placeholder="editedWork.description" required v-model="newWork.description").form-row__text.form-row__desc
                .form-row
                    label.form-column
                        .form-row__title Add a tag
                        input(type="text" name="tag" :placeholder="editedWork.techs" required v-model="newWork.techs").form-row__text.form-row__tags
                        ul.form-row__tags-btns
                            li.form-row__tag(v-for="tag in tags" :key="tag.id")
                                span.tag-name  {{tag}}
                                button(type="button" @click.prevent="removeTech").btn-delete-tag &#10006
                .form-row.form-row__btns(v-if="transferOff")
                    button(type="Reset" @click.prevent = "closeWindow").btn-reset Cancel
                    button(type="Submit" @click.prevent = "editCurrentWork").btn-submit Submit

  
</template>

<script>
const regeneratorRuntime = require("regenerator-runtime");
import { mapActions, mapState } from "vuex";
import {renderer} from '../store/helper';
export default {
    props: {
        editedWork: Object
    },
    data() {
        return {
            newWork: {
                title: "",
                techs: "",
                photo: {},
                link: "",
                description: "",
                renderedPhoto: ""
            },
            transferOff: true,
            tags: [],
            dataPack: {
                data: {},
                id: ""
            }
        }
    },
    created() {
        this.tags = this.editedWork.techs.split(",");
    },
    methods: {
        ...mapActions("works", ["addWork","editWork", "removeWork"]),
        async editCurrentWork() {
            this.transferOff= false;
            let formData =  new FormData();
                formData.append('title', this.newWork.title );
                formData.append('techs', this.newWork.techs);
                formData.append('photo', this.newWork.photo);
                formData.append('link', this.newWork.link);
                formData.append('description', this.newWork.description);
                console.log(this.editedWork.id);
                console.log(formData);
                this.dataPack = {
                    data: formData,
                    id: this.editedWork.id
                };
                console.log(this.dataPack);
            try {
                await this.editWork(this.dataPack);
                //this.newWork.title = "";
                //this.newWork.techs = "";
                //this.newWork.photo = "";
                //this.newWork.link = "";
                //this.newWork.description = "";
                this.$emit("addNewWork")
            } catch (error) {
                console.log(error);
            } finally {
                this.transferOff = true;
            }
        },
        upLoadImage(event) {
            this.newWork.photo = this.$refs.file.files[0];
            const photo = this.$refs.file.files[0];
            renderer(photo).then(pic => {
                this.newWork.renderedPhoto = pic;
            })
        },
        closeWindow() {
            this.$emit("closeEditWindow")
        },
       
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
    .form-row__text {
        width: 100%;
        color: #636363;
        padding: 15px 0px;
        font-size: 18px;
        border-color: transparent;
        border-bottom: solid 1px #636363;
    }
    .form-row__desc {
        border: solid 1px #a0a0b2;
        padding: 15px 5%;
        font-size: 18px;
        width: 90%;
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