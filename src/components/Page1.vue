<template>
    <div>
        页面一
    </div>
</template>

<script>
import axios from 'axios';
export default {
    methods:{
    },
    mounted:function(){
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>
