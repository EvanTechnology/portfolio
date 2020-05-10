import Vue from "vue";

const btns = {
    template: "#slider-btns",
    props: ["currentIndex", "lastIndex"],
};
const thumbs = {
    template: "#slider-thumbs",
    props: ["works"],
};
const tags = {
    template: "#slider-tags",
    props: ["tags"],
};
const display = {
    template: "#slider-display",
    components: { thumbs, btns },
    props: ["currentWork", "works", "currentIndex","lastIndex"],
};
const info = {
    template: "#slider-info",
    components: { tags },
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(",")
        }
    }
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
        };
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        },
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
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
        },
        makeArrayWithRequiredImages(array) {
            return array.map(item => {
                const requirePic = require(`../images/content/${item.photo}`);
                item.photo = requirePic;
                return item;
            })
        }
    },
    created() {
        const data = require("../data/works.json");
        this.works = this.makeArrayWithRequiredImages(data);
        this.lastIndex = this.works.length - 1;
    },
});