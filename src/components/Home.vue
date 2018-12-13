<template>
<!-- 所有的内容要被根节点包含起来 -->
    <div>
        <v-header :title="title" :run="run"></v-header>
        <br>
        <button v-on:click="run(123)">获取msg</button>
    </div>
</template>


<script>
import Header from "./Header.vue";
export default {
    data(){
        return{
            msg:'我是一个首页组件',
            title:'Header组件的标题'
        }
    },
    methods:{
        run(data){
            alert(this.msg + data);
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



