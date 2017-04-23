/**
 * Created by lijian on 2017/4/22.
 */

import * as types from './mutation-types'

export const changeSSQPlayType = ({ commit }, playType = 120101001) => {
  commit(types.CHANGE_SSQ_PLAY_TYPE, {
    playType: playType
  })
}

