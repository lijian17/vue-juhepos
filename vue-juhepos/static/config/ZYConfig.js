/**
 * 中悦科技配置类
 * Created by lijian-pc on 2017/4/27.
 */

var ZYConfig = {}
ZYConfig.install = function (Vue, options) {
  // 地区码
  Vue.prototype.$AREA_CODE_QG = '0000' // 全国
  Vue.prototype.$AREA_CODE_TJ = '0022' // 天津
  Vue.prototype.$AREA_CODE_HLJ = '0451' // 黑龙江
  Vue.prototype.$AREA_CODE_NX = '0951' // 宁夏
  Vue.prototype.$AREA_CODE_GX = '0770' // 广西
  Vue.prototype.$AREA_CODE_ZJ = '0570' // 浙江
  Vue.prototype.$AREA_CODE_SX = '0029' // 陕西
  Vue.prototype.$AREA_CODE_SD = '0531' // 山东
  Vue.prototype.$AREA_CODE_AH = '0550' // 安徽
  Vue.prototype.$AREA_CODE_BJ = '0010' // 北京
  Vue.prototype.$AREA_CODE_HB = '0311' // 河北
  Vue.prototype.$AREA_CODE_SSX = '0351' // 山西

  // 系统运行模式
  Vue.prototype.$MODE_TEST = 0 // 测试
  Vue.prototype.$MODE_PRODUCTION = 1 // 生产
  Vue.prototype.$MODE_CHECK = 2 // 验收
  Vue.prototype.$MODE_DEMO = 3 // 演示
  Vue.prototype.$MODE_DEVELOPMENT = 4 // 开发

  let mode_test = {
    // 天津
    '0022': {
      appName: "天津彩服务", // pad二维码页面微信公众号名称
      gameNos: new Array("01", "02", "03", "06"), // 微信公众号中“彩票服务”的走势分析功能获取新期的游戏编码
      host : "www.cpsino.com",	// pad主页网址地址
      lbsAddress : "http://test.cpsino.com/lbs/mobile/", // lbs测试地址
      scanQr_ewm : "http://api.duobaoqu.cn/lottery/", // 夺宝二维码测试地址
      padManagerSrvAddress : "http://test.cpsino.com/tj_padqs/", // pad管理员登录地址  天津测试
      padMisCallbackAddress : "http://test.cpsino.com/tjtestlottery/pad_game/tj_0022/dai_sale/gc/gc.html",//购彩大厅地址
      printAddress : "http://test.cpsino.com/tjtestlottery/my/printTicket.html", // 天津测试打印页面地址
      scanQr : "http://test.cpsino.com/tjtestlottery/my/padPayTypeLogin.html?lottery=", // 天津支付二维码测试地址

      gsAddress : "http://test.cpsino.com/tjtestlottery/srvrequest/srv",
      wxAddress : "http://test.cpsino.com/tjtestlottery/wxrequest/jsApiSign?url=",
      qauthAddress : "http://test.cpsino.com/tjtestlottery/wxrequest/qauth?parameter=",
      NoUrl:"http://wxgx.cpsino.com/tjlottery/srvrequest/srv",//pad走势图新期请求地址
      phone : "022-87551880" // pad主页的客服电话
    },

    // 黑龙江
    '0451': {

    },

    // 宁夏
    '0951': {

    },

    // 广西
    '0770': {

    },

    // 浙江
    '0570': {

    },

    // 陕西
    '0029': {

    },

    // 山东
    '0531': {

    },

    // 安徽
    '0550': {

    },

    // 北京
    '0010': {

    },

    // 河北
    '0311': {

    },

    // 山西
    '0351': {

    }
  }

  // 默认配置
  let opt = {
    mode: 0, // 0测试; 1生产; 2验收; 3演示版; 4开发环境
    area: '0022' // 0000全国; 0022天津; 0451黑龙江; 0951宁夏; 0770广西; 0570浙江; 0029陕西; 0531山东; 0550安徽; 0010北京; 0311河北;
  }

  for (let property in options) {
    opt[property] = options[property] // 使用options配置
  }

  // 地区码
  Vue.prototype.$area = area ? area : opt.area

  // pad二维码页面微信公众号名称
  Vue.prototype.$appName = () => {
    let appName = ''
    switch (opt.mode) {
      case this.$MODE_TEST:
        appName = mode_test[opt.area].appName
        break

      case this.$MODE_CHECK:
        break

      case this.$MODE_DEMO:
        break

      case this.$MODE_DEVELOPMENT:
        break

      case this.$MODE_PRODUCTION:
      default:
        break
    }
    return appName
  }

}

export default ZYConfig
