import Vue from 'vue'
import App from './App.vue'
// import VueResource from 'vue-resource';
import VueRouter from 'vue-router'

//创建组件
import Home from './components/Home.vue';
import News from './components/News.vue';

// Vue.use(VueResource);
Vue.use(VueRouter);

//配置路由
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '*', component: News }
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