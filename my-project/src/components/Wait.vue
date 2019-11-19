<template>
  <div class="wait">
    <el-transfer v-model="value" :props="{ key: 'value',label: 'desc'}" :data="data" :titles="['未完成', '已完成']"></el-transfer>

    <el-row>
      <el-col>
        <el-card>
          <img src="../assets/3.jpg">
          <div style="padding:14px;text-align: center;margin-top: 20px">
            <span>图片鉴赏</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="add">
      <input type="text" v-model='placeholder' @focus="foc"><br>
      <a class="sub" @click="add">添加未完成</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wait',
  data() {
    return {
      data:JSON.parse(localStorage.getItem('data')),
      value: [],
      placeholder:'在此处添加未完成的事件'
    };
  },
  methods:{
      foc(){
          this.placeholder=''
      },
      add(){
        let obj=[{value:'',desc:''}]
        obj[0].value=this.data.length+1;
        obj[0].desc=this.placeholder
        this.data=this.data.concat(obj);
        //本地存储 第一个参数为存储的仓库名 第二个参数为存储的数据
        localStorage.setItem('data',JSON.stringify(this.data));
        this.placeholder='在此处添加未完成的事件'
      }
  }
}
</script>
<style scoped>
.el-transfer{
  float: left;
  margin-top: 15px;
  width: 40%;
}
.el-col{
  float: left;
    width: 50%;
  }
  img{
    width: 200px;
    height: 200px;
  }
  .el-row{
    float: right;
    width: 40%;
  }
  .add{
    float: left;
    width: 400px;
    height: 100px;
    margin-top: 30px;
  }
  .add input{
    border: none;
    width: 200px;
    height: 35px;
    background-color: pink;
    color: white;
    padding-left: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .add a{
    padding:5px 15px;
    font-size: 20px;
    color: white;
    background-color: violet;
    border-radius: 5px;
    vertical-align: middle;
    margin-left: 30px;
    margin-top: 20px;
    cursor: pointer;
  }
</style>
