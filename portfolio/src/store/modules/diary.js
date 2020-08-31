const state = () => ({
    currentEntry: '',
    entries: [
        {title: "First Entry", text: "I am crazy sad"},
        {title: "Second Entry", text: "I am so sad"}
    ]
})

const getters = {
    getEntries: state => state.entries
}

const actions = {

}

const mutations = {
    addEntry: (state, payload) => {
        state.entries.push(payload.newEntry)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}