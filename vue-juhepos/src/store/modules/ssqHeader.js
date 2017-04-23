/**
 * Created by lijian on 2017/4/22.
 */
import * as types from '../mutation-types'

// initial state
const state = {
  playType: 120101001
}

// getters
const getters = {
  playType: state => state.playType
}

// actions
const actions = {
  changeSSQPlayType ({ commit }, playType = 120101004) {
    commit(types.CHANGE_SSQ_PLAY_TYPE, playType)
  }
}

// mutations
const mutations = {
  [types.CHANGE_SSQ_PLAY_TYPE] (state, playType) {
    // 切换玩法
    state.playType = playType
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
