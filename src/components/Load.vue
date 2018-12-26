<template>
<!-- 所有的内容要被根节点包含起来 -->
    <div id="Load">
        <h2>登录</h2>
        <input type="text" v-model="name" placeholder="登录"></input>
        <button @click="Load()">登录</button>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data:{
        retrun:{
           name: '卧槽尼玛'
        } 
    },
    methods:{
        Load:function(){
            alert(this.name);
            var api = 'http://localhost:7008/';
            Axios.get(api)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
