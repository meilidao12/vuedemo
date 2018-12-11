<template>
  <!-- Vue的模板里面 所有的内容要被一个根节点包含起来 -->
  <div id="app">
    <h2>你好Vue</h2>
    <br>
    这是一个根组件
    <h1>{{ msg }}</h1>
    <h2>我是帅哥</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

