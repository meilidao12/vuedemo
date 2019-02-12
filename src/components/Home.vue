<template>
<!-- 所有的内容要被根节点包含起来 -->
  <div id="Home">
    <el-container>
      <el-header style="text-align: left;">头部</el-header>
      <el-container>
        <el-aside width="200px">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="handleclick"
                router = true
                unique-opened = true>
                <el-submenu index="1">
                  <template slot="title"><i class="el-icon-menu"></i>导航一</template>
                    <el-menu-item index="/news">
                      <i class="el-icon-menu"></i>
                      <span slot="title">新闻</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                    <el-menu-item index="/page1">
                      <i class="el-icon-menu"></i>
                      <span slot="title">页面一</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title"><i class="el-icon-menu"></i>导航三</template>
                    <el-menu-item index="/page2">
                      <i class="el-icon-menu"></i>
                      <span slot="title">页面二</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title"><i class="el-icon-menu"></i>导航四</template>
                    <el-menu-item index="/page3">
                      <i class="el-icon-menu"></i>
                      <span slot="title">页面三</span>
                    </el-menu-item>
                </el-submenu>
              </el-menu>
          </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data () { 
    const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
    return {
      msg: '你好Vue',
      obj:{
        name: '张三'
      },
      List:['111','222','333'],
      html1:'<h1>ddd</h1>',
      tableData: Array(20).fill(item)
    }
  }
}
</script>

// <script>
// export default {
//     data(){
//         return{
//            blEnabled:false,
//            isLoading:false,
//            pickerOptions1: {
//           disabledDate(time) {
//             return time.getTime() > Date.now();
//           },
//           shortcuts: [{
//             text: '今天',
//             onClick(picker) {
//               picker.$emit('pick', new Date());
//             }
//           }, {
//             text: '昨天',
//             onClick(picker) {
//               const date = new Date();
//               date.setTime(date.getTime() - 3600 * 1000 * 24);
//               picker.$emit('pick', date);
//             }
//           }, {
//             text: '一周前',
//             onClick(picker) {
//               const date = new Date();
//               date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
//               picker.$emit('pick', date);
//             }
//           }]
//         },
//            value1:'',
//            value2: new Date(2016, 9, 10, 18, 40),
//            value3: new Date(2016, 9, 10, 18, 40)
//         }
//     },
//     methods:{
//         setAttbrute() {
//             this.blEnabled = !this.blEnabled;
//             alert("blEnabled is: " + this.blEnabled);
//         },
//         setLoading(){
//             this.isLoading = !this.isLoading;
//         }
//     }
// }
// </script>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>