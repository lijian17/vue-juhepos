<template>
  <div id="ssq">
    <SSQHeader playType="120103001"></SSQHeader>
    <OpenWinHistory></OpenWinHistory>
    <ssqDS v-if="playType == 120101001"></ssqDS>
    <ssqDT v-if="playType == 120103004"></ssqDT>
    <BottomStatusBar></BottomStatusBar>
  </div>
</template>

<script>
import SSQHeader from '@/components/ssq/SSQHeader'
import OpenWinHistory from '@/components/ssq/OpenWinHistory'
import ssqDS from '@/components/ssq/ssqDS'
import ssqDT from '@/components/ssq/ssqDT'
import BottomStatusBar from '@/components/ssq/BottomStatusBar'
export default {
  name: 'SSQ',
  data: function () {
    return {
      msg: '双色球',
      playType: 120101001
    }
  },
  components: {SSQHeader, OpenWinHistory, ssqDS, ssqDT, BottomStatusBar}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
