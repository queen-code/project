<template>
  <div class="all">
    <el-tabs type="card" v-model="activeName">
    <el-tab-pane label="用户管理" name="first"></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"></el-tab-pane>
    <el-tab-pane label="他们是谁" name="third">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="username" label="姓名" width="180"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="position" label="职位"></el-table-column>
        <el-table-column prop="city" label="城市" width="180"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="我在哪儿" name="fourth">
      <div class="">
        <div id="boxMap"></div>
      </div>
    </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  //引入百度地图
import BMap from 'BMap'
export default {
  name: 'AllUser',
  data(){
      return{
        tableData:[],
        activeName: 'third'
      }
  },
  created(){
      this.$axios.get('../../static/user.json').then((res)=>{
          console.log(res.data);
          this.tableData=res.data;
      })
  },
  mounted () {
    var map = new BMap.Map("boxMap");
    var point = new BMap.Point(116.279767,40.046512);
    map.centerAndZoom(point,15);
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point);   // 创建标注
    map.addOverlay(marker);
    var opts = {
      width: 100,     // 信息窗口宽度
      height: 70,     // 信息窗口高度
      title: "腾讯大楼总部"  // 信息窗口标题
    }
    var infoWindow = new BMap.InfoWindow("welcome to my company！", opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
  }
}
</script>
<style scoped>
.el-tabs{
  float: right;
  width: 80%;
}
.el-tabs__header{
  margin:0;
}

#boxMap {
  float: left;
  width:800px;
  height: 500px;
}
</style>
