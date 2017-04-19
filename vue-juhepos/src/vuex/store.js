/**
 * Created by lijian-pc on 2017/4/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state
})
