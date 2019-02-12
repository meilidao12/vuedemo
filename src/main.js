import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(ElementUI);

//创建组件
import Home from './components/Home.vue';
import News from './components/News.vue';
import Load from './components/Load.vue';
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';
import Page3 from './components/Page3.vue';

//定义路由组件
const routes = [
  { path: '/home', 
    component: Home,
    children:[
      {path: '/news', component:News},
      {path: '/page1', component:Page1},
      {path: '/page2', component:Page2},
      {path: '/page3',component:Page3}
    ]
  },
  { path: '/load', component: Load },
  { path: '*', component: Load } //设置默认节点
]

//实例化路由
const router = new VueRouter({
  mode : "history",
  routes // short for `routes: routes`
})

//<router-view></router-view> 放在App.vue

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})