/**
 * Created by lijian on 2017/4/22.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import ssqHeader from './modules/ssqHeader'
import ssqDS from './modules/ssqDS'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    ssqHeader,
    ssqDS
  }
})
