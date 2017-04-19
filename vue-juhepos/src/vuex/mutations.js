/**
 * Created by lijian-pc on 2017/4/19.
 */
export default {
  SHOW_ALERT (state, data) {
    data.show = true
    state.alert = data
  },
  HIDE_ALERT (state) {
    state.alert.show = false
  }
}
