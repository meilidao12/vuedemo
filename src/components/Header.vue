<template>
    <div>
        <h2>这是一个头部组件---{{title}}</h2>
        <br>
        <button @click="run('123')">父组件方法传递</button>
    </div>
</template>


<script>
export default {
    data(){

    },
    props:['title','run']
}
</script>
