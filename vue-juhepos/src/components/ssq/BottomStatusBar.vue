<template>
  <footer class="footer" id="footer">
    <section class="stopTime">
      距006期销售截止03分59秒
    </section>

    <section class="bntooer">
      <input type="submit" name="button" id="btn1" value="机选" />
      共 5000注,共 <span>100000</span>元
      <input type="submit" name="button2" id="btn2" value="选好了" />
    </section>
  </footer>
</template>

<script>
  export default {
    name: 'BottomStatusBar',
    data: function () {
      return {
        msg: '底部状态栏'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{ width:100%; height:auto; clear:both; position:fixed; bottom:0; left:0;}

.stopTime{ width:100%; font-size:4vw; background-image:url(../../assets/ssq/time.png); background-repeat:no-repeat; background-size:5%; background-position:19vw center; background-color:#fefaea; color:#c67b32; text-align:center; padding:.5rem 0; border-top:#fbdc94 solid 1px;}

.bntooer{width:100%; height:auto; clear:both; text-align:center; line-height:30%; padding:1rem 0; background-color:#2d2d2d; color:#FFF; font-size:4vw;}

#btn1{ width:18%; font-size:4vw; border:none; background:#3b3e40; color:#ffe346; padding:5px; border-radius:5px; margin-right:5vw;}

#btn2{ width:18%; font-size:4vw; border:none; background:#dc3b40; color:#fff; padding:5px; border-radius:5px; margin-left:5vw;}

.bntooer span{ color:#ffe346;}
</style>
