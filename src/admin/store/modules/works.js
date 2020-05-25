
export default {
    namespaced: true,
    state: {
        works: [],
    },
    mutations: {
       /*  SET_WORKS(state, works) {
            state.works = works;
        }, */
        ADD_CATEGORY(state, newWork) {
            state.works.push(newWork);
        }, 
        /* REMOVE_CATEGORY(state, categoryToRemoveId) {
            state.categories = state.categories.filter(
                (category) => category.id!== categoryToRemoveId);

        }, */
        /* EDIT_CATEGORY(state, categoryToEdit) {
            state.categories = state.categories.map((category) => {
                if (category.id === categoryToEdit.id) {
                    category.title = categoryToEdit.title
                }
                return category;
            })
        }, */
    },
    actions: {
          async addWork({ commit }, formData) {
            try {
               const { data } = await this.$axios.post("/works", formData);
               commit("ADD_WORK", data);
               console.log(data);
               } catch (error) {
                   console.log(error.response.data.message);
                   throw new Error(
                       //generateCodeError(error)
                       error.response.data.message
                       )
               };
        }, 
       /*  async fetchWorks({ commit }) {
            try {
                const { data } = await this.$axios.get(`/works/318`);
                commit("SET_WORKS", data);
            } catch (error) {
                console.log(error);
            };
        }, */
        /* async removeCategory({ commit}, categoryToRemoveId) {
            try {
                console.log(categoryToRemoveId);
                const {data} = await this.$axios.delete(`/categories/${categoryToRemoveId}`);
                commit("REMOVE_CATEGORY", categoryToRemoveId)
            } catch (error) {
                console.log(error);
            }
        }, */
       /*  async editCategory({ commit}, editedCategory) {
            console.log(editedCategory.id);
            console.log(editedCategory.title);
            console.log(editedCategory.category);
            try {
                const {data} = await this.$axios.post(`/categories/${editedCategory.id}`, {title: editedCategory.category});
                commit("EDIT_CATEGORY", editedCategory)
            } catch (error) {
                console.log(error);
            }
        } */
    },
}