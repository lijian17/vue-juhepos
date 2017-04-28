<template>
  <section class="ssqzmt">
    <div class="ssqzmtRedtile">红球<span>请选择6个红球1个红球</span></div>
    <div class="ssqzmtRedBall">
      <ul id="redBall">
        <li v-for="(redBall, index) in redBalls">
          <span v-bind:class="{on: redBall.isChecked}" v-on:click.stop.prevent="handleRedBall(redBall.isChecked, index)">{{redBall.code}}</span>
          <b class="arb_bop">{{redBall.missingValue}}</b>
        </li>
      </ul>
    </div>

    <div class="clor"></div>

    <div class="ssqzmtBulltile">蓝球<span>请选择6个红球1个蓝球</span></div>
    <div class="ssqzmtBullBall">
      <ul id="bullBall">
        <li v-for="(blueBall, index) in blueBalls">
          <span v-bind:class="{on: (blueBall.isChecked !== 0 ? true : false)}" v-on:click.stop.prevent="handleBlueBall(blueBall.isChecked, index)">{{blueBall.code}}</span>
          <b class="arb_bop">{{blueBall.missingValue}}</b>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ssqDS',
  data: function () {
    return {
      msg: '双色球单式'
    }
  },
  computed: {
    ...mapGetters({
      redBalls: 'redBalls',
      blueBalls: 'blueBalls'
    })
  },
  methods: {
    handleRedBall: function (isChecked, index) {
      this.$store.dispatch('choiceRedBall_SSQ_DS', {isChecked: isChecked, index: index, canChoiceRedBallCountAmount: 6})
    },
    handleBlueBall: function (isChecked, index) {
      this.$store.dispatch('choiceBlueBall_SSQ_DS', {isChecked: isChecked, index: index, canChoiceBlueBallCountAmount: 1})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ssqzmt{ width:100%; height:auto; overflow:hidden; margin-top:1rem; padding-top: 5rem; padding-bottom: 8rem;}
/**/
.ssqzmtRedtile{ width:100%; height:auto; font-size:4vw; text-align: left; color:#dc3b40; border-left:#dc3b40 5px solid; text-indent:.5rem; border-radius:2px;}

.ssqzmtRedtile span{ color:#888581; text-indent:1rem; display:inline-block;}

.ssqzmtRedBall{ width:95%; height:auto;  margin:0 auto 1.5rem;}

.ssqzmtRedBall ul{ padding:0; margin:0;}

.ssqzmtRedBall li{ width:12%; height:auto; font-size:4vw; text-align:center;  list-style-type:none; float:left; margin-left:2%; margin-top:1rem; color:#616161; position:relative;}
/**/
.ssqzmtRedBall li span{ display:block; width:98%;border-radius:50%; border:#d8d8d8 solid 1px; line-height:220%; color:#dc3b40; font-weight:100;font-size:5vw; background:#FFF; }

.ssqzmtRedBall li span.on{border:#dc3b40 solid 1px; color:#fff; background:#dc3b40;}

.ssqzmtRedBall li b{ font-weight:100;}

.ssqzmtRedBall li i{ width:150%; height:200%; background-image:url(../../assets/ssq/redBall.png); background-repeat:no-repeat; background-size:100%; position:absolute; top:-104%; left:-24%; z-index:2; display:none; font-style:normal; color:#FFF; line-height:230%; font-size:7vw;}

.ssqzmtBulltile{ width:100%; height:auto; font-size:4vw; text-align: left; color:#1985ea; border-left:#1985ea 5px solid; text-indent:.5rem; border-radius:2px;}

.ssqzmtBulltile span{ color:#888581; text-indent:1rem; display:inline-block;}

.ssqzmtBullBall{ width:95%; height:auto;  margin:0 auto 1.5rem;}

.ssqzmtBullBall ul{ padding:0; margin:0;}

.ssqzmtBullBall li{ width:12%; height:auto; font-size:4vw; text-align:center;  list-style-type:none; float:left; margin-left:2%; margin-top:1rem; color:#616161; position:relative;}
/**/
.ssqzmtBullBall li span{ display:block; width:98%;border-radius:50%; border:#d8d8d8 solid 1px; line-height:220%; color:#1985ea; font-weight:100;font-size:5vw; background:#FFF;}

.ssqzmtBullBall li span.on{border:#1985ea solid 1px; color:#fff; background:#1985ea;}

.ssqzmtBullBall li b{ font-weight:100;}

.ssqzmtBullBall li i{width:150%; height:200%; background-image:url(../../assets/ssq/bullBall.png); background-repeat:no-repeat; background-size:100%; position:absolute; top:-104%; left:-24%; z-index:2; display:none; font-style:normal; color:#FFF; line-height:230%; font-size:7vw;}
</style>
