<template>
  <!-- Vue的模板里面 所有的内容要被一个根节点包含起来 -->
  <div id="app">
    <h2>你好Vue</h2>
    <br>
    这是一个根组件
    <h1>{{ msg }}</h1>
    <h2>{{obj.name}}</h2>
    <br>
    <ul>
      <li v-for="item in List" >
        {{item}}
      </li>
    </ul>
    <br>
    <input type="text" v-model="msg">  
    <button v-on:click="getMsg()">获取表单数据</button>
    <button v-on:click="setMsg()">设置表单数据</button>
    <br>
    <div v-html="html1"></div>
    <br>
    <v-home></v-home>
    <v-news></v-news>
  </div>
</template>

<script>
/*
  1、 引入组件
  2、 挂载组件
  3、 在模版中使用
*/
import Home from './components/Home.vue';
import News from './components/News.vue';
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
  components:{
    'v-home': Home,
    'v-news': News
  },
  methods:{
    getMsg(){
      alert(this.msg);
    },
    setMsg(){
      this.msg = "设置后的数据";  
    }
  }
}
</script>

