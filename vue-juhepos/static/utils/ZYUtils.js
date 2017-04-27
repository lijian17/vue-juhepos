/**
 * JS工具类(纯js，无其他依赖)
 * Created by lijian-pc on 2017/4/27.
 */

var ZYUtils = {}
ZYUtils.install = function (Vue, options) {
  /**
   * 自动补0前缀(1->01)，(示例：autoZeroPrefix(1, 3)->001)
   * @param num 要被处理的数字
   * @param n 补0的位数
   * @returns {*}
     */
  Vue.prototype.$ZYautoZeroPrefix = (num, n) => {
    if (!num) return ''
    return (Array(n).join(0) + num.toString()).slice(-n)
  }
}

export default ZYUtils
