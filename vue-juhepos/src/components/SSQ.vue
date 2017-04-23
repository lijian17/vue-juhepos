<template>
  <div id="ssq">
    <SSQHeader></SSQHeader>
    <OpenWinHistory></OpenWinHistory>
    <ssqDS v-if="playType === 120101001 || playType === 120101003"></ssqDS>
    <ssqDT v-if="playType === 120101004"></ssqDT>
    <BottomStatusBar></BottomStatusBar>
  </div>
</template>

<script>
import SSQHeader from '@/components/ssq/SSQHeader'
import OpenWinHistory from '@/components/ssq/OpenWinHistory'
import ssqDS from '@/components/ssq/ssqDS'
import ssqDT from '@/components/ssq/ssqDT'
import BottomStatusBar from '@/components/ssq/BottomStatusBar'
import {mapGetters} from 'vuex'
export default {
  name: 'SSQ',
  components: {SSQHeader, OpenWinHistory, ssqDS, ssqDT, BottomStatusBar},
  data: function () {
    return {
      msg: '双色球'
    }
  },
  computed: {
    ...mapGetters({
      playType: 'playType'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
