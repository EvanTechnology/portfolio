import Vue from "vue";
import $axios from '../admin/requests';

const btns = {
    template: "#control-btns",
    props: ["slidesIndex", "lastScreen"],
};
const review = {
    template: "#review-window",
    props: {
        slideInfo: Object,
        
    },
    data() {
        return {
            baseURL: "https://webdev-api.loftschool.com/"
        }
    }
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
            //reviewsArray: []
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
        async fetchReviews() {
            try {
                const getUserId = await $axios.get('/user');
                const userId = getUserId.data.user.id;
                const {data} = await $axios.get(`/reviews/${userId}`);
                this.reviews = data;
            } catch (error) {
                console.log(error);
            }
          }
    },
    created() {
        this.fetchReviews();
        this.lastIndex = this.reviews.length - 1;
    },
});