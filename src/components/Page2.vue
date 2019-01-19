<template>
    <div>
        <button @click="Load()">请求数据</button>
    </div>
</template>

<script>
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
Vue.use(VueSocketio, socketio('http://127.0.0.1:3000/'), store);
export default {
    methods:{
        send:function()
        {
            this.$socket.emit('test', '123');
        }
    },
    sockets: {
      connect() {
        console.log('socket connected');
      }
    }
}
</script>
