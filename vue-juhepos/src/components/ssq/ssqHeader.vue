<template>
  <div id="header">
    <section id="headerTop">
      <div class="hTitle" id="bt" v-on:click="showPlayTypeSelect = !showPlayTypeSelect, showTopRight = false">
        <router-link to="/"><span class="home"><img src="../../assets/ssq/home.png" width="100%" /></span></router-link>
        <h1>双色球-{{playTypeName}}<b><img src="../../assets/ssq/bt.png" /></b></h1>
        <a href="javascript:;" class="wen" id="wen" v-on:click.stop.prevent="showTopRight = !showTopRight, showPlayTypeSelect = false"><img src="../../assets/ssq/san.png" width="100%" /></a>
      </div>
    </section>
    <transition name="slide-fade">
      <section id="topSelect" v-if="showPlayTypeSelect">
        <a href="javascript:;" class="on" v-on:click.stop.prevent="changeSSQPlayType(120101001)">单式</a>
        <a href="javascript:;" v-on:click.stop.prevent="changeSSQPlayType(120101003)">复式</a>
        <a href="javascript:;" v-on:click.stop.prevent="changeSSQPlayType(120101004)">胆拖</a>
      </section>
    </transition>

    <transition name="slide-fade">
      <section id="topRight" v-if="showTopRight">
        <a href="javascript:;">走势图</a>
        <a href="javascript:;">历史开奖</a>
        <a href="javascript:;">机选设置</a>
        <a href="javascript:;">隐藏遗漏</a>
        <a href="javascript:;" class="on">玩法说明</a>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SSQHeader',
  data: function () {
    return {
      msg: '双色球',
      playTypeName: '单式',
      showPlayTypeSelect: false,
      showTopRight: false
    }
  },
  methods: {
    showSelect: function (msg, value) {
      alert(msg)
    },
    changeSSQPlayType: function (playType) {
      switch (playType) {
        case 120101001:
          this.playTypeName = '单式'
          break
        case 120101003:
          this.playTypeName = '复式'
          break
        case 120101004:
          this.playTypeName = '胆拖'
          break
        default:
          break
      }
      this.showPlayTypeSelect = false
      this.$store.dispatch('changeSSQPlayType', playType)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headerTop{ width:100%; height:auto; overflow:hidden; position:fixed; top:0; left:0; z-index:1;}

.hTitle{ width:100%; height:auto; overflow:hidden; background:#dc3b40; position:relative;}

.home{ width:4%; height:auto; display:block; padding:4%; float:left;}

#headerTop h1{ width:48%;  padding: 3.5% 2.7% 2% 4%; color:#FFF; margin-left:10%; font-size:6vw; float:left; font-weight:100; text-align:center;}

#headerTop h1 b{ width:10%; display:inline-block; margin-left:4%; position:relative; top:-.2rem;}

.dh{ position:absolute; right:15%; font-size:4.5vw; color:#FFF; top:32%; cursor:pointer;}

.wen{ width:5%; height:auto; display:block; padding:4.2%; position:absolute; right:3%; top:9.5%;}

#headerTop1{ width:100%; overflow:hidden;}

/*头部彩种下拉菜单*/
#topSelect{ width:100%; height:auto; overflow:hidden; position:fixed; left:0;  background:#FFF; text-align:center; padding:1rem 0;  border-bottom:#8f9192 solid 1px; box-shadow:#666 0 0 5px; display:block; z-index:2; }

#topSelect a{ display:inline-block; width:32%; text-align:center; font-size:5vw; color:#dc3b40; border-left:#8f9192 solid 1px; text-decoration:none;}

#topSelect a.on{border-left:none;}

/*头部右侧下拉菜单*/
#topRight{width:25%; height:auto; overflow:hidden; position:fixed; right:10px; background:#FFF; text-align:center; padding:0 0;  border-bottom:#bfbfbf solid 1px; box-shadow:#666 0 0 2px; display:block;  z-index:2; }

#topRight a{ display:inline-block; width:100%; text-align:center; font-size:4vw; color:#dc3b40; border-bottom:#e2e2e2 solid 1px; text-decoration:none; padding:1rem 0}

#topRight a.on{border-bottom:none;}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
