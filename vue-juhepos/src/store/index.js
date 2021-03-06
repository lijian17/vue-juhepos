/**
 * Created by lijian on 2017/4/22.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as state from './state'
import * as actions from './actions'
import * as getters from './getters'
import ssqHeader from './modules/ssqHeader'
import ssqDS from './modules/ssqDS'
import BottomStatusBar from './modules/BottomStatusBar'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    ssqHeader,
    ssqDS,
    BottomStatusBar
  }
})
