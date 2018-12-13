<template>
<!-- 所有的内容要被根节点包含起来 -->
    <div>
        <v-header :title="title" :run="run"></v-header>
        <br>
        <button v-on:click="run()">获取msg</button>
        <br>
        <button v-on:click="getData()">请求数据</button>
        <br>
        <ul>
            <li v-for="item in lst">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>


<script>
import Header from "./Header.vue";
import Axios from 'axios';
export default {
    data(){
        return{
            msg:'我是一个首页组件',
            lst:[]
        }
    },
    methods:{
        run(){
            alert(this.msg);
        },
        /*请求数据的模板
          axios 的使用
          1、安装 cnpm install axios --save
        */
        getData(){
            var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
            // this.$http.get(api).then(response => {
            //     // get body data
            //     this.lst = response.body.result;
            // }, error => {
            //     // error callback
            //     console.log(error.data);
            // });

            Axios.get(api).then((response)=>{
                    this.lst=response.data.result;
                }).catch((error)=>{
                    console.log(error);
                })
        }
    },
    mounted(){
        console.log("出发生命周期函数");
    },
    components:{
        'v-header':Header
    }
}
</script>

<style lang="scss" scoped>
    h2{
        color: red
    }
</style>



