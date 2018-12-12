<template>
<!-- 所有的内容要被根节点包含起来 -->
    <div>
        <v-header></v-header>
        <br>
        <button v-on:click="run()">获取msg</button>
    </div>
</template>


<script>
import Header from "./Header.vue";
export default {
    data(){
        return{
            msg:'我是一个首页组件'
        }
    },
    methods:{
        run(){
            alert(this.msg);
        }
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



