/**
 * Created by lijian on 2017/4/23.
 */
import * as types from '../mutation-types'

// initial state
const state = {
  redBalls: [
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0}
  ],
  blueBalls: [
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0},
    {missingValue: '-', isChecked: 0}
  ]
}

// getters
const getters = {
  redBalls: state => state.redBalls,
  blueBalls: state => state.blueBalls
}

// actions
const actions = {
  choiceRedBall_SSQ_DS ({ commit }, redBall) {
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
    state.redBalls[redBall.index].isChecked = redBall.redBall === 0 ? 1 : 0
  },

  // 点击蓝球
  [types.CHOICE_BLUE_BALL_SSQ_DS] (state, blueBall) {
    state.blueBalls[blueBall.index].isChecked = blueBall.blueBall === 0 ? 1 : 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
