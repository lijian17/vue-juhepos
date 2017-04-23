<template>
  <section class="ssqzmt">
    <div class="ssqzmtRedtile">红球<span>请选择6个红球1个红球</span></div>
    <div class="ssqzmtRedBoll">
      <ul id="redBoll">
        <li v-for="(redBoll, index) in redBolls"><span class="">{{redBoll.redBoll}}{{index + 1}}</span><b class="arb_bop">{{redBoll.missingValue}}</b></li>
        <!--<li><span class="">01</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">02</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">03</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">04</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">05</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">06</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">07</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">08</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">09</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">10</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">11</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">12</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">13</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">14</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">15</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">16</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">17</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">18</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">19</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">20</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">21</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">22</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">23</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">24</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">25</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">26</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">27</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">28</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">29</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">30</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">31</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">32</span><b class="arb_bop">5</b></li>-->
        <!--<li><span class="">33</span><b class="arb_bop">5</b></li>-->
      </ul>
    </div>

    <div class="clor"></div>

    <div class="ssqzmtBulltile">蓝球<span>请选择6个红球1个蓝球</span></div>
    <div class="ssqzmtBullBoll">
      <ul id="bullBoll">
        <li><span class="">01</span><b class="arb_bop">5</b></li>
        <li><span class="">02</span><b class="arb_bop">5</b></li>
        <li><span class="">03</span><b class="arb_bop">5</b></li>
        <li><span class="">04</span><b class="arb_bop">5</b></li>
        <li><span class="">05</span><b class="arb_bop">5</b></li>
        <li><span class="">06</span><b class="arb_bop">5</b></li>
        <li><span class="">07</span><b class="arb_bop">5</b></li>
        <li><span class="">08</span><b class="arb_bop">5</b></li>
        <li><span class="">09</span><b class="arb_bop">5</b></li>
        <li><span class="">10</span><b class="arb_bop">5</b></li>
        <li><span class="">11</span><b class="arb_bop">5</b></li>
        <li><span class="">12</span><b class="arb_bop">5</b></li>
        <li><span class="">13</span><b class="arb_bop">5</b></li>
        <li><span class="">14</span><b class="arb_bop">5</b></li>
        <li><span class="">15</span><b class="arb_bop">5</b></li>
        <li><span class="">16</span><b class="arb_bop">5</b></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ssqDS',
  data: function () {
    return {
      msg: '双色球单式',
      redBolls: [
        {redBoll: '01', missingValue: '5'},
        {redBoll: '02', missingValue: '5'},
        {redBoll: '03', missingValue: '5'},
        {redBoll: '04', missingValue: '5'},
        {redBoll: '05', missingValue: '5'},
        {redBoll: '06', missingValue: '5'},
        {redBoll: '07', missingValue: '5'},
        {redBoll: '08', missingValue: '5'},
        {redBoll: '09', missingValue: '5'},
        {redBoll: '10', missingValue: '5'},
        {redBoll: '11', missingValue: '5'},
        {redBoll: '12', missingValue: '5'},
        {redBoll: '13', missingValue: '5'},
        {redBoll: '14', missingValue: '5'},
        {redBoll: '15', missingValue: '5'},
        {redBoll: '16', missingValue: '5'},
        {redBoll: '17', missingValue: '5'},
        {redBoll: '18', missingValue: '5'},
        {redBoll: '19', missingValue: '5'},
        {redBoll: '20', missingValue: '5'},
        {redBoll: '21', missingValue: '5'},
        {redBoll: '22', missingValue: '5'},
        {redBoll: '23', missingValue: '5'},
        {redBoll: '24', missingValue: '5'},
        {redBoll: '25', missingValue: '5'},
        {redBoll: '26', missingValue: '5'},
        {redBoll: '27', missingValue: '5'},
        {redBoll: '28', missingValue: '5'},
        {redBoll: '29', missingValue: '5'},
        {redBoll: '30', missingValue: '5'},
        {redBoll: '31', missingValue: '5'},
        {redBoll: '32', missingValue: '5'},
        {redBoll: '33', missingValue: '5'}
      ]
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


.ssqzmtRedBoll{ width:95%; height:auto;  margin:0 auto 1.5rem;}

.ssqzmtRedBoll ul{ padding:0; margin:0;}

.ssqzmtRedBoll li{ width:12%; height:auto; font-size:4vw; text-align:center;  list-style-type:none; float:left; margin-left:2%; margin-top:1rem; color:#616161; position:relative;}
/**/
.ssqzmtRedBoll li span{ display:block; width:98%;border-radius:50%; border:#d8d8d8 solid 1px; line-height:220%; color:#dc3b40; font-weight:100;font-size:5vw; background:#FFF; }

.ssqzmtRedBoll li span.on{border:#dc3b40 solid 1px; color:#fff; background:#dc3b40;}

.ssqzmtRedBoll li b{ font-weight:100;}

.ssqzmtRedBoll li i{ width:150%; height:200%; background-image:url(../../assets/ssq/redBoll.png); background-repeat:no-repeat; background-size:100%; position:absolute; top:-104%; left:-24%; z-index:2; display:none; font-style:normal; color:#FFF; line-height:230%; font-size:7vw;}





.ssqzmtBulltile{ width:100%; height:auto; font-size:4vw; text-align: left; color:#1985ea; border-left:#1985ea 5px solid; text-indent:.5rem; border-radius:2px;}

.ssqzmtBulltile span{ color:#888581; text-indent:1rem; display:inline-block;}



.ssqzmtBullBoll{ width:95%; height:auto;  margin:0 auto 1.5rem;}

.ssqzmtBullBoll ul{ padding:0; margin:0;}

.ssqzmtBullBoll li{ width:12%; height:auto; font-size:4vw; text-align:center;  list-style-type:none; float:left; margin-left:2%; margin-top:1rem; color:#616161; position:relative;}
/**/
.ssqzmtBullBoll li span{ display:block; width:98%;border-radius:50%; border:#d8d8d8 solid 1px; line-height:220%; color:#1985ea; font-weight:100;font-size:5vw; background:#FFF;}

.ssqzmtBullBoll li span.on{border:#1985ea solid 1px; color:#fff; background:#1985ea;}


.ssqzmtBullBoll li b{ font-weight:100;}

.ssqzmtBullBoll li i{width:150%; height:200%; background-image:url(../../assets/ssq/bullBoll.png); background-repeat:no-repeat; background-size:100%; position:absolute; top:-104%; left:-24%; z-index:2; display:none; font-style:normal; color:#FFF; line-height:230%; font-size:7vw;}
</style>
