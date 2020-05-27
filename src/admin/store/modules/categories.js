
export default {
    namespaced: true,
    state: {
        categories: [],
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        ADD_CATEGORY(state, newCategory) {
            state.categories.push(newCategory);
        },
        REMOVE_CATEGORY(state, categoryToRemoveId) {
            state.categories = state.categories.filter(
                (category) => category.id!== categoryToRemoveId);

        },
        EDIT_CATEGORY(state, categoryToEdit) {
            state.categories = state.categories.map((category) => {
                if (category.id === categoryToEdit.id) {
                    category.title = categoryToEdit.title
                }
                return category;
            })
        },
        ADD_SKILL (state, newSkill) {
            state.categories = state.categories.map(category => {
                if (category.id === newSkill.category) {
                    category.skills.push(newSkill)
                }
                return category;
            })
        },
        REMOVE_SKILL(state, skillToRemove) {
            const removeSkillInCategory = (category) => {
                category.skills = category.skills.filter(
                    (skill) => skill.id!== skillToRemove.id)
            }
            const findCategory = (category) => {
                if (category.id === skillToRemove.category) {
                    removeSkillInCategory(category);
                }
                return category;
            }
            
            state.categories = state.categories.map(findCategory);
               
        },
        EDIT_SKILL(state, skillToEdit) {
            const editSkillInCategory = (category) => {
                category.skills = category.skills.map((skill) => 
                skill.id === skillToEdit.id ? skillToEdit : skill
                )}
            const findCategory = (category) => {
                if (category.id === skillToEdit.category) {
                    editSkillInCategory(category);
                }
                return category;
            }
            
            state.categories = state.categories.map(findCategory);
               
        },
    },
    actions: {
        async addCategory({ commit }, title) {
            try {
               const { data } = await this.$axios.post("/categories", {title});
               commit("ADD_CATEGORY", data);
               } catch (error) {
                   console.log(error.response.data.message);
                   throw new Error(
                       //generateCodeError(error)
                       error.response.data.message
                       )
               };
        },
        async fetchCategories({ commit }) {
            try {
                const getUserId = await this.$axios.get('/user');
                const userId = getUserId.data.user.id;
                const { data } = await this.$axios.get(`/categories/${userId}`);
                commit("SET_CATEGORIES", data);
            } catch (error) {
                console.log(error);
            };
        },
        async removeCategory({ commit}, categoryToRemoveId) {
            try {
                console.log(categoryToRemoveId);
                const {data} = await this.$axios.delete(`/categories/${categoryToRemoveId}`);
                commit("REMOVE_CATEGORY", categoryToRemoveId)
            } catch (error) {
                console.log(error);
            }
        },
        async editCategory({ commit}, editedCategory) {
            console.log(editedCategory.id);
            console.log(editedCategory.title);
            console.log(editedCategory.category);
            try {
                const {data} = await this.$axios.post(`/categories/${editedCategory.id}`, {title: editedCategory.category});
                commit("EDIT_CATEGORY", editedCategory)
            } catch (error) {
                console.log(error);
            }
        }
    },
}