/**
 * Created by lijian on 2017/4/23.
 */
import * as types from '../mutation-types'

// initial state
const state = {
  redBalls: new Array(33),
  blueBalls: new Array(16)
}

// getters
const getters = {
  redBalls: state => {
    for (let i = 0; i < state.redBalls.length; i++) {
      state.redBalls[i] = {missingValue: '-', isChecked: 0}
    }
    return state.redBalls
  },
  blueBalls: state => {
    for (let i = 0; i < state.blueBalls.length; i++) {
      state.blueBalls[i] = {missingValue: '5', isChecked: 0}
    }
    return state.blueBalls
  }
}

// actions
const actions = {
  choiceRedBall_SSQ_DS ({ commit }, redBall) {
    alert('index===' + redBall.index)
    commit(types.CHOICE_RED_BALL_SSQ_DS, redBall)
  },
  choiceBlueBall_SSQ_DS ({ commit }, blueBall) {
    commit(types.CHOICE_BLUE_BALL_SSQ_DS, blueBall)
  }
}

// mutations
const mutations = {
  // 点击红球
  [types.CHOICE_RED_BALL_SSQ_DS] (state, redBall) {
    alert('index=' + redBall.index + '---redBall=' + redBall.redBall)
    state.redBalls[redBall.index].isChecked = redBall.redBall === 0 ? 2 : 0
    alert(state.redBalls[redBall.index].isChecked)
  },

  // 点击蓝球
  [types.CHOICE_BLUE_BALL_SSQ_DS] (state, blueBall) {
    state.blueBalls[blueBall.index].isChecked = blueBall.blueBall === 0 ? 2 : 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
