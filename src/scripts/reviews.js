import Vue from "vue";

const btns = {
    template: "#control-btns",
    props: ["slidesIndex", "lastScreen"],
};
const review = {
    template: "#review-window",
    props: {slideInfo: Object},
};
const slider = {
    template: "#review-slider",
    components: { review},
    props: {reviews: Array},
}
new Vue({
    el: "#reviews-box",
    template: "#reviews-main",
    components: { slider, btns },
    data() {
        return {
            reviews: [],
            slidesIndex: 0,
            currentSlides: [],
            lastScreen: 1,
        };
    },
    computed: {

    },
    watch: {
       
    },
    methods: {
        handleSlide(direction) {
            let currentIndex = this.slidesIndex;
            let screenSlides = 0;
            let sumSlidesWidth = 0;
            let toMove = 0;
            let lastWindow = this.lastScreen;
            

            const defineSlider = this.$children[1].$refs.moveSlider;
            const sliderBlock = this.$refs.sliderBlock;
            let allSlides = this.$children[1].$refs.moveSlider.children;

            let sliderBlockWidth = parseInt(window.getComputedStyle(sliderBlock).width);

            for(let slide of allSlides) {
                let slideWidth = parseInt(window.getComputedStyle(slide).width);
                sumSlidesWidth += slideWidth;
            };
            screenSlides = Math.ceil(sumSlidesWidth/sliderBlockWidth);
            lastWindow = screenSlides-1;

            
            switch(direction) {
                case "next": {
                    currentIndex += 1;
                    indexTest();
                    this.slidesIndex = currentIndex;
                    this.lastScreen = lastWindow;
                    break;
                }
                case "prev": {
                    currentIndex -= 1;
                    indexTest();
                    this.slidesIndex = currentIndex;
                    this.lastScreen = lastWindow;
                    break;
                }
            };
            function indexTest() {
                if(currentIndex > lastWindow) {
                    currentIndex = lastWindow 
                }
                if(currentIndex < 0) {
                    currentIndex = 0
                }
                toMove = 100 * currentIndex + '%';
                defineSlider.style.transform = `translateX(-${toMove})`;
            };
 

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
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrayWithRequiredImages(data);
        console.log("this.reviews"+ this.reviews[0].photo);
        this.lastIndex = this.reviews.length - 1;
    },
});