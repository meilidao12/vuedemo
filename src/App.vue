<template>
  <!-- Vue的模板里面 所有的内容要被一个根节点包含起来 -->
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <br>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
/*
  1、 引入组件
  2、 挂载组件
  3、 在模版中使用
*/
// import Home from './components/Home.vue';
// import News from './components/News.vue';
export default {
  name: 'app',
  // 业务逻辑里面定义的数据
  data () { 
    return {
      msg: '你好Vue',
      obj:{
        name: '张三'
      },
      List:['111','222','333'],
      html1:'<h1>ddd</h1>',
    }
  },
  // components:{
  //   'v-home': Home,
  //   'v-news': News
  // },
  // methods:{
  //   getMsg(){
  //     alert(this.msg);
  //   },
  //   setMsg(){
  //     this.msg = "设置后的数据";  
  //   }
  // }
}
</script>

