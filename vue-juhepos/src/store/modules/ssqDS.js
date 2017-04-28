/**
 * Created by lijian on 2017/4/23.
 */
import * as types from '../mutation-types'

// initial state
const state = {
  redBalls: [
    {code: '01', missingValue: '-', isChecked: 0},
    {code: '02', missingValue: '-', isChecked: 0},
    {code: '03', missingValue: '-', isChecked: 0},
    {code: '04', missingValue: '-', isChecked: 0},
    {code: '05', missingValue: '-', isChecked: 0},
    {code: '06', missingValue: '-', isChecked: 0},
    {code: '07', missingValue: '-', isChecked: 0},
    {code: '08', missingValue: '-', isChecked: 0},
    {code: '09', missingValue: '-', isChecked: 0},
    {code: '10', missingValue: '-', isChecked: 0},
    {code: '11', missingValue: '-', isChecked: 0},
    {code: '12', missingValue: '-', isChecked: 0},
    {code: '13', missingValue: '-', isChecked: 0},
    {code: '14', missingValue: '-', isChecked: 0},
    {code: '15', missingValue: '-', isChecked: 0},
    {code: '16', missingValue: '-', isChecked: 0},
    {code: '17', missingValue: '-', isChecked: 0},
    {code: '18', missingValue: '-', isChecked: 0},
    {code: '19', missingValue: '-', isChecked: 0},
    {code: '20', missingValue: '-', isChecked: 0},
    {code: '21', missingValue: '-', isChecked: 0},
    {code: '22', missingValue: '-', isChecked: 0},
    {code: '23', missingValue: '-', isChecked: 0},
    {code: '24', missingValue: '-', isChecked: 0},
    {code: '25', missingValue: '-', isChecked: 0},
    {code: '26', missingValue: '-', isChecked: 0},
    {code: '27', missingValue: '-', isChecked: 0},
    {code: '28', missingValue: '-', isChecked: 0},
    {code: '29', missingValue: '-', isChecked: 0},
    {code: '30', missingValue: '-', isChecked: 0},
    {code: '31', missingValue: '-', isChecked: 0},
    {code: '32', missingValue: '-', isChecked: 0},
    {code: '33', missingValue: '-', isChecked: 0}
  ],
  blueBalls: [
    {code: '01', missingValue: '-', isChecked: 0},
    {code: '02', missingValue: '-', isChecked: 0},
    {code: '03', missingValue: '-', isChecked: 0},
    {code: '04', missingValue: '-', isChecked: 0},
    {code: '05', missingValue: '-', isChecked: 0},
    {code: '06', missingValue: '-', isChecked: 0},
    {code: '07', missingValue: '-', isChecked: 0},
    {code: '08', missingValue: '-', isChecked: 0},
    {code: '09', missingValue: '-', isChecked: 0},
    {code: '10', missingValue: '-', isChecked: 0},
    {code: '11', missingValue: '-', isChecked: 0},
    {code: '12', missingValue: '-', isChecked: 0},
    {code: '13', missingValue: '-', isChecked: 0},
    {code: '14', missingValue: '-', isChecked: 0},
    {code: '15', missingValue: '-', isChecked: 0},
    {code: '16', missingValue: '-', isChecked: 0}
  ]
}

// getters
const getters = {
  redBalls: state => state.redBalls,
  blueBalls: state => state.blueBalls,

  // 选择红球的个数
  choiceRedBallCountAmount: state => {
    let choiceRedBallCountAmount = 0
    for (let i = 0; i < state.redBalls.length; i++) {
      if (state.redBalls[i].isChecked !== 0) {
        choiceRedBallCountAmount++
      }
    }
    return choiceRedBallCountAmount
  },

  // 选择蓝球的个数
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
    commit(types.CALCULATION_BETNOTE_SSQ_DS)
  },
  choiceBlueBall_SSQ_DS ({ commit }, blueBall) {
    commit(types.CHOICE_BLUE_BALL_SSQ_DS, blueBall)
    commit(types.CALCULATION_BETNOTE_SSQ_DS)
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
  },

  // 计算投注注数
  [types.CALCULATION_BETNOTE_SSQ_DS] (state) {
    if (getters.choiceRedBallCountAmount(state) === 6 && getters.choiceBlueBallCountAmount(state) === 1) {
      state.betNote = 1
    } else {
      state.betNote = 0
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
