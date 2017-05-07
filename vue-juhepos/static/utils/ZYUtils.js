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
  Vue.prototype.$autoZeroPrefix = (num, n) => {
    if (!num) return ''
    return (Array(n).join(0) + num.toString()).slice(-n)
  }

  /**
   * 排列算法
   * @type {f}
     */
  Vue.prototype.$A = (function f(n, m){
    if (m <= 0) {
      return 1
    }
    if (m == 1) {
      return n
    } else {
      return n * f(n - 1, m -1)
    }
  })

  /**
   * 组合算法
   * @param n
   * @param m
   * @returns {number}
     */
  Vue.prototype.$C = (n, m) => {
    if ((n - m) < 0) {
      return 0
    }
    m = (n - m) > m ? m : (n - m)
    let a = Vue.prototype.$A(n, m)
    let b = Vue.prototype.$A(m, m)
    let suan = a / b
    return suan
  }

  /**
   * 随机一个数字（指定最小值，最大值）
   * @param min 最小值
   * @param max 最大值
   * @returns {*}
     */
  Vue.prototype.$randomNum = (min, max) => {
    return (Math.round(Math.random() * (max - min)) + min)
  }

  /**
   * 随机获得指定长度的不相同整数
   * @param min 最小值
   * @param max 最大值
   * @param length 数组长度
   * @param repeat 是否有重复数字
     * @returns {Array}
     */
  Vue.prototype.$getRandomNumber = (min, max, length, repeat) => {
    let num = new Array()
    if (min >= 0) {
      for (let i = 0; i < length; i++) {
        let val = Vue.prototype.$randomNum(min, max)

        if (val < 10) {
          val = '0' + val
        }

        if (!repeat) {
          let isEqu = false
          for (let index in num) {
            if (num[index] == val) {isEqu = true; break}
          }
          if (isEqu) {
            i--
          } else {
            num[num.length] = val
          }
        } else {
          num[num.length] = val
        }
      }
    }
    return num
  }

}

export default ZYUtils
