<template>
<!-- 所有的内容要被根节点包含起来 -->
    <div id="Home">
        <h1>首页</h1>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary" icon="el-icon-search">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger"@click="setAttbrute()">危险按钮</el-button>
        </el-row>
        <br>
        <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button  type="primary" :disabled="blEnabled">主要按钮</el-button>
            <el-button  type="success" :disabled="blEnabled">成功按钮</el-button>
            <el-button type="info" disabled>信息按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>
        <br>
        <el-button type="primary" :loading="isLoading" @click="setLoading()">加载中</el-button>
        <br>
        <br>
        <el-time-picker v-model="value2" :picker-options="{selectableRange: '18:30:00 - 20:30:00'}" 
            placeholder="任意时间点"></el-time-picker>
        <br>
        <br>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
            </el-date-picker>
        </div>
        <br>
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


