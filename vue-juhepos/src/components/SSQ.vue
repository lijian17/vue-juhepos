<template>
  <div id="ssq">
    <SSQHeader></SSQHeader>
    <OpenWinHistory></OpenWinHistory>
    <BottomStatusBar></BottomStatusBar>
  </div>
</template>

<script>
import SSQHeader from '@/components/ssq/SSQHeader'
import OpenWinHistory from '@/components/ssq/OpenWinHistory'
import BottomStatusBar from '@/components/ssq/BottomStatusBar'
export default {
  name: 'SSQ',
  data () {
    return {
      msg: '双色球'
    }
  },
  components: {SSQHeader, OpenWinHistory, BottomStatusBar}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
