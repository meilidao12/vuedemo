<template>
<!-- 所有的内容要被根节点包含起来 -->
    <div id="Home">
        <h1>首页</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
           blEnabled:false,
           isLoading:false,
           pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
           value1:'',
           value2: new Date(2016, 9, 10, 18, 40),
           value3: new Date(2016, 9, 10, 18, 40)
        }
    },
    methods:{
        setAttbrute() {
            this.blEnabled = !this.blEnabled;
            alert("blEnabled is: " + this.blEnabled);
        },
        setLoading(){
            this.isLoading = !this.isLoading;
        }
    }
}
</script>


