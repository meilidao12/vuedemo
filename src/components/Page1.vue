<template>
    <div>
        页面一
    </div>
</template>

<script>
export default {
    methods:{
        getHub:function(){
            axios.get('/user?ID=12345')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    amount
}
</script>
