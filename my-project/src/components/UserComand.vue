<template>
  <div class="user">
    <div class="box">
      <el-row>
        <el-col>
          <el-card style="padding: 0px;width: 30%;text-align: center;height: 380px;float: left;border: 2px solid violet;">
            <img src="../assets/6.jpg">
            <p><span>用户名  :</span><span>{{list[0].user}}</span></p>
            <p><span>年龄   :</span><span>{{list[0].age}}</span></p>
            <p><span>职位   :</span><span>{{list[0].position}}</span></p>
          </el-card>
          <el-calendar v-model="value"></el-calendar>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserComand',
  data(){
      return{
          value: new Date(),
          list:[
            {"user": "小仙女",
              "age": 12,
              "position":"学生"}
          ]
      }
  },
  created(){
      console.log(this.list[0].user)
  },
}
</script>
<style scoped>
  .box{
    float: right;
    width: 80%;

  }
  .el-tabs{
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  img{
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  p{
    margin-top:10px;
    margin-bottom: 20px;
  }
  .el-calendar{
    float: right;
    margin-right: 20px;
    width: 65%;
    height: 541px;
    border: 2px solid violet;
    border-radius: 5px;
  }
  .el-calendar-table,.el-calendar-day{
    height: 50px;
    width: 50px;
  }
  .el-calendar__body{
    height: 541px;
  }
</style>
