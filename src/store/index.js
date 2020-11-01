import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict,
})
