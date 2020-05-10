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
            
            console.log("lastWindow"+lastWindow);

            const defineSlider = this.$children[1].$refs.moveSlider;
            const sliderBlock = this.$refs.sliderBlock;
            let slidesArr = this.$children[1].$refs.moveSlider.children;

            let sliderBlockWidth = parseInt(window.getComputedStyle(sliderBlock).width);

            for(let slide of slidesArr) {
                let slideWidth = parseInt(window.getComputedStyle(slide).width);
                sumSlidesWidth += slideWidth;
            };
            screenSlides = Math.ceil(sumSlidesWidth/sliderBlockWidth);
            lastWindow = screenSlides-1;

            console.log("lastWindow"+lastWindow);
            console.log(sumSlidesWidth);
            console.log(sliderBlockWidth);

            
            switch(direction) {
                case "next": {
                    currentIndex += 1;
                    console.log('next'+currentIndex)
                    indexTest();
                    this.slidesIndex = currentIndex;
                    this.lastScreen = lastWindow;
                    console.log('this.lastScreen'+this.lastScreen);
                    break;
                }
                case "prev": {
                    currentIndex -= 1;
                    console.log('prev'+currentIndex);
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
                console.log(toMove);
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
        this.lastIndex = this.reviews.length - 1;
    },
});