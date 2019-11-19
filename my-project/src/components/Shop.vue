<template>
  <div class="shop">
    <Head/>
    <template>
      <el-table :data="message" style="width: 100%">
        <el-table-column style="text-align: center" prop="id" label="编号" width="120"></el-table-column>
        <el-table-column style="text-align: center" prop="name" label="名称" width="150"></el-table-column>
        <el-table-column style="text-align: center" prop="img" label="图例" width="150">
          <template slot-scope="scope">
            <img  :src="scope.row.img" style="width: 50px;height: 50px;display:inline">
          </template>
        </el-table-column>
        <el-table-column prop="type" label="型号" width="150"></el-table-column>
        <el-table-column prop="price" label="价格" width="150"></el-table-column>
        <el-table-column prop="id" label="选取" width="300">
          <template slot-scope="scope">
            <el-input-number size="small" v-model="scope.row.select" @change="change(scope.row.select,scope.row.id)" :min="0"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="count" label="小计"></el-table-column>
      </el-table>
      <h2>总价：{{money}}元</h2>
    </template>
  </div>
</template>

<script>
  import Head from './Head'
export default {
  name: 'Shop',
  components:{Head},
  data(){
      return{
          message:[
            {id:1,
              name:'小米',
              img:require('../assets/1.jpg'),
              type:'小米9',
              price:2000,
              select:1,
              count:2000,
            },
            {id:2,
              name:'华为',
              img:require('../assets/2.jpg'),
              type:'华为mate30',
              price:3000,
              select:1,
              count:3000,
            },
            {id:3,
              name:'华为',
              img:require('../assets/3.jpg'),
              type:'华为mate30',
              price:3520,
              select:1,
              count:3520,
            }
          ],
      }
  },
  methods:{
      change(select,index){
          console.log(index,select)

      this.message[index-1].count=this.message[index-1].price * select
    }

  },
  computed:{
    money(){
        let all=0;
        this.message.forEach((item)=>{
          console.log(item.count)
          all+=item.count;;
        })
        return all
      }
  }
}
</script>
<style scoped>
  button{
    padding: 5px 8px;
    border: none;
    border-radius: 2px;
    background-color: violet;
    color: white;
  }
  h2{
    margin-top: 20px;
    margin-right: 50px;
    text-align: right;
    color: red;
  }

  .el-input-number{
    padding:0px;
  }
  .el-table{
    text-align: center;
  }
  .el-table td, .el-table th{
    text-align: center;
  }
</style>
