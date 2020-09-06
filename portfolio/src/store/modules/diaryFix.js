const state = () => ({
    entries: [
        {title: 'First Entry', text: 'This is the first entry'},
        {title: 'Second Entry', text: 'This is the second entry'}
    ]
})

const mutations = {
    addEntry: (state, payload) => {
        state.entries.push(payload)
    }
}

const getters = {
    getEntries: state => state.entries
}

export default {
    namespaced: true,
    state,
    mutations,
    getters
}