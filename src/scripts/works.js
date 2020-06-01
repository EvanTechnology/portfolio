import Vue from "vue";
import $axios from '../admin/requests';

const btns = {
    template: "#slider-btns",
    props: ["currentIndex", "lastIndex"],
};
const thumbs = {
    template: "#slider-thumbs",
    props: ["works", "currentIndex"],
    data() {
        return {
            baseURL: "https://webdev-api.loftschool.com/",
        }
    }
};
const tags = {
    template: "#slider-tags",
    props: ["tagList"],
};
const display = {
    template: "#slider-display",
    components: { thumbs, btns },
    props: ["currentWork", "works", "currentIndex","lastIndex"],
    data() {
        return {
            baseURL: "https://webdev-api.loftschool.com/",
        }
    }
};
const info = {
    template: "#slider-info",
    components: { tags },
    props: ["currentWork", "tagList"],
};


new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: { display, info },
    data() {
        return {
            works: [],
            currentIndex: 0,
            lastIndex: 1,
            currentWork: {},
            tagList: []

        };
    },
    watch: {
        currentIndex(value) {
            this.sliderLimits(value);
        },
    },
    methods: {
        sliderLimits(value) {
            if (value > this.works.length - 1) this.currentIndex -=1;
            if(value < 0 ) this.currentIndex = 0;
        },
        handleSlide(direction) {
            switch(direction) {
                case "next":
                    this.currentIndex++;
                    this.currentWork = this.works[this.currentIndex];
                    this.tagList = this.currentWork.techs.split(',');
                    break;
                case "prev":
                    this.currentIndex--;
                    this.currentWork = this.works[this.currentIndex];
                    this.tagList = this.currentWork.techs.split(',');
                    break;
            }
        },
        makeArrayWithRequiredImages(array) {
            return array.map(item => {
                const requirePic = require(`../images/content/${item.photo}`);
                item.photo = requirePic;
                return item;
            })
        },
        async fetchWorks() {
            try {
                //const getUserId = await $axios.get('/user');
                //const userId = getUserId.data.user.id;
                const userId = 318;
                const {data} = await $axios.get(`/works/${userId}`);
                this.works = data;
                this.currentWork = this.works[0];
                this.tagList = this.currentWork.techs.split(',');
                this.lastIndex = this.works.length - 1;
            } catch (error) {
                console.log(error);
            }
          }
    },
    created() {
        this.fetchWorks();
        
        
    },
});