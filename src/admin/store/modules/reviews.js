export default {
    namespaced: true,
    state: {
        reviews: [],
    },
    mutations: {
        ADD_REVIEW(state, newReview) {
            state.reviews.push(newReview);
        },
        SET_REVIEWS(state, reviews) {
            state.reviews =reviews;
        },
        REMOVE_REVIEW(state, reviewToRemoveId) {
            state.reviews = state.reviews.filter(
                (review) => review.id!== reviewToRemoveId);

        },
        EDIT_REVIEW(state, reviewToEdit, reviewId) {
            state.reviews = state.reviews.map((review) => {
                if (review.id === reviewId) {
                    review = reviewToEdit
                }
                return review;
            })
        },


    },
    actions: {
        async addReview({commit}, formData) {
            try {
                const {data} = await this.$axios.post("/reviews", formData);
                commit("ADD_REVIEW", data);
            } catch (error) {
                console.log(error)
            }
        },
        async fetchReviews({commit}) {
            try {
                const getUserId = await this.$axios.get('/user');
                const userId = getUserId.data.user.id;
                const {data} = await this.$axios.get(`/reviews/${userId}`);
                commit("SET_REVIEWS", data);
            } catch (error) {
                console.log(error);
            }
        },
        async removeReview({commit}, reviewToRemoveId) {
            try {
                const {data} = await this.$axios.delete(`/reviews/${reviewToRemoveId}`);
                commit("REMOVE_REVIEW", reviewToRemoveId)
            } catch (error) {
                console.log(error);
            }
        },
        async editReview({ commit}, dataPack) {
            console.log(dataPack);
            const reviewId = dataPack.id;
            console.log(dataPack.data);
            try {
                const {data} = await this.$axios.post(`/reviews/${reviewId}`, dataPack.data);
                commit("EDIT_REVIEW", data, reviewId)
            } catch (error) {
                console.log(error);
            }
        }
    }
}