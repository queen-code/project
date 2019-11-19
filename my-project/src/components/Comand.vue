<template>
  <div class="comand">
    <Head/>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航</span>
            </template>
            <router-link to="/comand/user">
              <el-menu-item index="1-1" >我是谁</el-menu-item>
            </router-link>
            <router-link to="/comand/wait">
              <el-menu-item index="1-2">我要干什么</el-menu-item>
            </router-link>
            <router-link to="/comand/all">
              <el-menu-item index="1-3">别人家的</el-menu-item>
            </router-link>
            <router-link to="/comand/tab">
              <el-menu-item index="1-4">什么数据</el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
  import Head from './Head'
export default {
  name: 'Comand',
  components:{Head},
  data(){
      return{

      }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>
<style scoped>
  .tac{
    float: left;
    height: 600px;
    width: 20%;
  }
  .el-col-12{
    width: 100%;
  }
  a{
    text-decoration: none;
  }
</style>
