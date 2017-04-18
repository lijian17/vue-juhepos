<template>
  <div class="kjTop" id="kjTop">
    <div class="z_wang" id="wang" v-if="showOpenWinHistoryList">
      <div class="title_w">
        <div class="wLeft">期号</div>
        <div class="wRight">开奖号码</div>
      </div>
      <ul class="ulBox">
        <a href="javascript:;"><li><span class="leftSpan ot">005</span><span class="rightSpan"><b>01</b><b>02</b><b>03</b><b>20</b><b>22</b><b>30</b><b class="on">05</b></span></li></a>
        <a href="javascript:;"><li class="on"><span class="leftSpan">004</span><span class="rightSpan"><b>01</b><b>02</b><b>03</b><b>20</b><b>22</b><b>30</b><b class="on">05</b></span></li></a>
        <a href="javascript:;"><li><span class="leftSpan">003</span><span class="rightSpan"><b>01</b><b>02</b><b>03</b><b>20</b><b>22</b><b>30</b><b class="on">05</b></span></li></a>
        <a href="javascript:;"><li class="on"><span class="leftSpan">002</span><span class="rightSpan"><b>01</b><b>02</b><b>03</b><b>20</b><b>22</b><b>30</b><b class="on">05</b></span></li></a>
        <a href="javascript:;"><li><span class="leftSpan">001</span><span class="rightSpan"><b>01</b><b>02</b><b>03</b><b>20</b><b>22</b><b>30</b><b class="on">05</b></span></li></a>
      </ul>
      <div class="fot_w">
        <div class="fLeft">&nbsp;</div>
        <div class="fRight">点击开奖号码区域查看更多</div>
      </div>
    </div>
    <div class="z_xin">
      <div class="axLeft">上期开奖</div>
      <div class="axRight"><span>01</span><span>02</span><span>03</span><span>20</span><span>22</span><span>30</span><span class="on">05</span></div>
    </div>
    <div class="z_ttp" id="ttp" v-on:click="showOpenWinHistoryList = !showOpenWinHistoryList">
      <div v-if="showOpenWinHistoryList">
        <img src="../../assets/ssq/ttp.png" width="100%" />
      </div>
      <div v-else="!showOpenWinHistoryList">
        <img src="../../assets/ssq/ptt.png" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OpenWinHistory',
    data: function () {
      return {
        msg: '双色球',
        showOpenWinHistoryList: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kjTop{ width:100%; height:auto; overflow:hidden;  text-align:center; position: fixed; z-index: 1;}
/**/
.z_xin{width:100%; height:auto; overflow:hidden;  background:#FFF; font-size:4vw; padding:.5rem 0; border-bottom:#aeafaf solid 1px;}

.axLeft{ width:40%; float:left; color:#222221;}

.axRight{ width:60%; float:left; color:#dc3b40; text-align:left;}

.axRight span{ display:inline-block; padding:0 1vw}

.axRight span.on{ color:#1985ea;}

.z_ttp{ width:18%; margin:0 auto;}

.z_wang{width:100%; height:auto; overflow:hidden;  background:#FFF; font-size:4vw; padding: 0; display:block; }

.title_w{width:100%; height:auto; overflow:hidden; background:#eeeeef; padding:.5rem 0;}

.wLeft{ width:40%; float:left; color:#222221;}

.wRight{ width:60%; float:left; color:#222221; text-align:left; text-indent:12vw;}

.ulBox{width:100%; height:auto; overflow:hidden; }

.ulBox li{width:100%; height:auto; overflow:hidden; background:#f4f2f2; padding:.5rem 0;}

.ulBox li span{ display:block; float:left;}

.ulBox li span.leftSpan{ width:40%; color:#4a4a4a;  }

.ulBox li span.ot{background-image:url(../../assets/ssq/ff.png); background-repeat:no-repeat; background-size:5%; background-position:12vw center;}

.ulBox li span.rightSpan{ width:60%; text-align:left;}

.ulBox li span.rightSpan b{ font-weight:100; padding:0 1vw; color:#dc3b40; }

.ulBox li span.rightSpan b.on{color:#1985ea;}

.ulBox li.on{ background:#f8f8f8;}

.fot_w{width:100%; height:auto; overflow:hidden; background:#f8f8f8; padding:.5rem 0;}

.fLeft{ width:40%; float:left; color:#222221;}

.fRight{ width:60%; float:left; color:#a6a3a3; text-align:left;}
</style>
