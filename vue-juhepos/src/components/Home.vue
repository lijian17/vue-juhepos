<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <li><router-link to="/ssq">双色球</router-link></li>
      <li><router-link to="/fc3d">3D</router-link></li>
      <li><router-link to="/qlc">七乐彩</router-link></li>
      <li><router-link to="/k10">快乐十分</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '购彩大厅'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-size: 4rem;
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 3rem;
    display: block;
    margin: 10px 10px;
  }

  a {
    color: #42b983;
  }
</style>
