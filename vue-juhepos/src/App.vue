<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html{ font-size:62.5%;}
html, body, address, blockquote, div, dl, form, h1, h2, h3, h4, h5, h6, ol, p, pre, table, ul,
dd, dt, li, tbody, td, tfoot, th, thead, tr, button, del, ins, map, object,
a, abbr, acronym, b, bdo, big, br, cite, code, dfn, em, i, img, kbd, q, samp, small, span,
strong, sub, sup, tt, var, legend, fieldset {
  margin: 0;
  padding: 0;
}
input{-webkit-appearance:none;}
body { margin-top:0px; margin-left:0px; font: normal 100% "微软雅黑", "宋体", sans-serif; background:#fbfbfb;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
img, fieldset{border: 0;}
img {width:100%;height: auto;}
.clor{ width:100%; height:1px; clear:both;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
