import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(ElementUI);

//创建组件
import Home from './components/Home.vue';
import News from './components/News.vue';
import Load from './components/Load.vue';



//配置路由
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/load', component: Load },
  { path: '*', component: News } //设置默认节点
]

//实例化路由
const router = new VueRouter({
  routes // short for `routes: routes`
})

//<router-view></router-view> 放在App.vue

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})