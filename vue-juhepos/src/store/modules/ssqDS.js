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
  blueBalls: state => state.blueBalls,
  choiceRedBallCountAmount: state => {
    let choiceRedBallCountAmount = 0
    for (let i = 0; i < state.redBalls.length; i++) {
      if (state.redBalls[i].isChecked !== 0) {
        choiceRedBallCountAmount++
      }
    }
    return choiceRedBallCountAmount
  },
  choiceBlueBallCountAmount: state => {
    let choiceBlueBallCountAmount = 0
    for (let i = 0; i < state.blueBalls.length; i++) {
      if (state.blueBalls[i].isChecked !== 0) {
        choiceBlueBallCountAmount++
      }
    }
    return choiceBlueBallCountAmount
  }
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
    if (getters.choiceRedBallCountAmount(state) < redBall.canChoiceRedBallCountAmount) {
      state.redBalls[redBall.index].isChecked = redBall.isChecked === 0 ? 1 : 0
      return
    }
    if (getters.choiceRedBallCountAmount(state) === redBall.canChoiceRedBallCountAmount && redBall.isChecked !== 0) {
      state.redBalls[redBall.index].isChecked = 0
    }
  },

  // 点击蓝球
  [types.CHOICE_BLUE_BALL_SSQ_DS] (state, blueBall) {
    if (getters.choiceBlueBallCountAmount(state) < blueBall.canChoiceBlueBallCountAmount) {
      state.blueBalls[blueBall.index].isChecked = blueBall.isChecked === 0 ? 1 : 0
      return
    }
    if (getters.choiceBlueBallCountAmount(state) === blueBall.canChoiceBlueBallCountAmount && blueBall.isChecked !== 0) {
      state.blueBalls[blueBall.index].isChecked = 0
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
