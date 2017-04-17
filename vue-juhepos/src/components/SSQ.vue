<template>
  <div id="ssq">
    <SSQHeader></SSQHeader>
    <OpenWinHistory></OpenWinHistory>
  </div>
</template>

<script>
import SSQHeader from '@/components/ssq/SSQHeader'
import OpenWinHistory from '@/components/ssq/OpenWinHistory'
export default {
  name: 'SSQ',
  data () {
    return {
      msg: '双色球'
    }
  },
  components: { SSQHeader, OpenWinHistory }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
