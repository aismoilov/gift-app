export const state = () => ({
    gift: {
        name: "Привет!",
        congratulation: "Кто бы ты не был, don't worry - be happy!",
        author: "Амир",
        hash: null,
    },
    loading: true,
});

export const mutations = {
    setGift(state, value) {
        state.gift = value;
    },
    setLoading(state, value) {
        state.loading = value;
    }
}

export const actions = {
    async getGift({ commit }, hash) {
        commit('setLoading', true);
        try {
            const customConfig = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            if (hash) {
                const res = await this.$axios.get(`/gift/${hash}`, {}, customConfig);
                if (res.data) {
                    console.log(res.data);
                    commit('setGift', res.data);
                }
            }    
        } catch(e) {
            console.error(e);
        }    
        commit('setLoading', false);
    }
}

export const getters = {
    gift: (state) => {
        return state.gift;
    },
    loading: (state) => {
        return state.loading;
    }
}