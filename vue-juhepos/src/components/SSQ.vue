<template>
  <div id="ssq">
    <SSQHeader></SSQHeader>
    <OpenWinHistory></OpenWinHistory>
    <ssqDS></ssqDS>
    <ssqDT></ssqDT>
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
  data () {
    return {
      msg: '双色球'
    }
  },
  components: {SSQHeader, OpenWinHistory, ssqDS, ssqDT, BottomStatusBar}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
