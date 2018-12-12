<template>
<!-- 所有的内容要被根节点包含起来 -->
    <div>
        <h2>
            这是一个首页组件 
        </h2>
        <br>
        <button v-on:click="run()">获取msg</button>
    </div>
</template>


<script>
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
    }
}
</script>

<style lang="scss" scoped>
h2{
    color: red
}
</style>



