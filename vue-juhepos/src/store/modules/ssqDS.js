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
  choiceRedBallCountAmount: state => state.redBalls.filter(function (value) { return value.isChecked !== 0 }).length,

  // 选择蓝球的个数
  choiceBlueBallCountAmount: state => state.blueBalls.filter(function (value) { return value.isChecked !== 0 }).length
}

// actions
const actions = {
  choiceRedBall_SSQ_DS ({ commit }, redBall) {
    commit(types.CHOICE_RED_BALL_SSQ_DS, redBall)
  },

  choiceBlueBall_SSQ_DS ({ commit }, blueBall) {
    commit(types.CHOICE_BLUE_BALL_SSQ_DS, blueBall)

    if (getters.choiceRedBallCountAmount(state) === 6 && getters.choiceBlueBallCountAmount(state) === 1) {
      commit(types.CHANGE_BET_NOTE, 1)
    } else {
      commit(types.CHANGE_BET_NOTE, 0)
    }
  },

  machineSelection_SSQ_DS (context, payload) {
    context.commit(types.INITIAL_SSQ_DS_STATE)
    context.commit(types.MACHINE_SELECTION_SSQ_DS, payload)
    context.commit(types.CHANGE_BET_NOTE, 1)
  }
}

// mutations
const mutations = {
  // 初始化
  [types.INITIAL_SSQ_DS_STATE] (state) {
    for (let i in state.redBalls) {
      state.redBalls[i].isChecked = 0
    }
    for (let j in state.blueBalls) {
      state.blueBalls[j].isChecked = 0
    }
  },

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
  },

  // 机选1注
  [types.MACHINE_SELECTION_SSQ_DS] (state, payload) {
    for (let i in payload.redBall) {
      state.redBalls[Number.parseInt(payload.redBall[i])].isChecked = 1
    }
    for (let j in payload.blueBall) {
      state.blueBalls[Number.parseInt(payload.blueBall[j])].isChecked = 1
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
