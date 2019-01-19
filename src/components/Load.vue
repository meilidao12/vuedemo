<template>
<!-- 所有的内容要被根节点包含起来 -->
    <div id="Load">
        <h2>登录</h2>
        <input type="text" v-model="username" placeholder="登录"></input>
        <input type="text" v-model="password" placeholder="密码"></input>
        <button @click="Load()">登录</button>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data:{
        retrun:{
           username: '',
           password: ''
        } 
    },
    methods:{
        Load:function()
        {
            if(this.isEmpty(this.password) || this.isEmpty(this.username))
            {
                return;
            }
            // var api = 'http://localhost:7008/';
            // Axios.get(api)
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
            this.$router.push({path:"/Home"});
        },
        isEmpty:function(obj)
        {
            if(typeof obj == "undefined" || obj == null || obj == "")
            {
                return true;
            }
            else
            {
                return false;
            }
        },
    }
}
</script>
