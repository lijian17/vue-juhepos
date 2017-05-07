/**
 * Created by lijian on 2017/5/7.
 */
import * as types from '../mutation-types'

// initial state
const state = {
  betNote: 0
}

// getters
const getters = {
  betNote: state => state.betNote
}

// actions
const actions = {
  changeBetNote ({ commit }, betNote = 0) {
    commit(types.CHANGE_BET_NOTE, betNote)
  }
}

// mutations
const mutations = {
  [types.CHANGE_BET_NOTE] (state, betNote) {
    // 投注注数
    state.betNote = betNote
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
