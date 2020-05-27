
export default {
    namespaced: true,
    state: {
        works: [],
    },
    mutations: {
        SET_WORKS(state, works) {
            state.works = works;
        },
        ADD_WORK(state, newWork) {
            state.works.push(newWork);
        }, 
        REMOVE_WORK(state, workToRemoveId) {
            state.works = state.works.filter(
                (work) => work.id!== workToRemoveId);

        },
        EDIT_WORK(state, workToEdit, workId) {
            state.works = state.works.map((work) => {
                if (work.id === workId) {
                    work = workToEdit
                }
                return work;
            })
        },
    },
    actions: {
          async addWork({ commit }, formData) {
              console.log(formData);
              let config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
              };
            try {
               const { data } = await this.$axios.post("/works", formData, config);
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
        async fetchWorks({ commit }) {
            try {
                const getUserId = await this.$axios.get('/user');
                const userId = getUserId.data.user.id;
                const { data } = await this.$axios.get(`/works/${userId}`);
                commit("SET_WORKS", data);
            } catch (error) {
                console.log(error);
            };
        },
        async removeWork({ commit}, workToRemoveId) {
            try {
                console.log(workToRemoveId);
                const {data} = await this.$axios.delete(`/works/${workToRemoveId}`);
                commit("REMOVE_WORK", workToRemoveId)
            } catch (error) {
                console.log(error);
            }
        },
        async editWork({ commit}, dataPack) {
            console.log(dataPack);
            const workId = dataPack.id
            try {
                const {data} = await this.$axios.post(`/works/${workId}`, dataPack.data);
                commit("EDIT_WORK", data, workId)
            } catch (error) {
                console.log(error);
            }
        }
    },
}