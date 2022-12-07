const state = {
    isLoading: 0
};

const getters = {
    isLoading: ({ isLoading }) => isLoading > 0
};

const mutations = {
    setIsLoading(state, payload) {
        if (payload) {
            document.body.classList.add('--freeze');
            state.isLoading++;
        } else if (state.isLoading > 0) {
            state.isLoading = 0;
            document.body.classList.remove('--freeze');
        }
    }
};

const actions = {
    setIsLoading({ commit }, payload) {
        commit('setIsLoading', payload);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
