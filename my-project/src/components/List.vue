<template>
  <div class="list">
    <Head/>
    <!--message是存储所有数据的地方  是一个数组 tableData-->
    <el-table :data="tableData" style="width: 100%">
      <!--prop是用来映射的 title是请求的数据里的title  他会自动将数据遍历  然后映射到页面上-->
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="body" label="内容">
      </el-table-column>
    </el-table>
    <!--total是请求过来的数据总量-->
    <el-pagination
      style="text-align: center;margin-top: 20px"
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
  import Head from './Head'
export default {
  name: 'List',
  components:{Head},
  data(){
      return{
        message:[],
        total:0, //数据的总量
        pageSize:5, //每页显示几条数据
        currentPage:1 //当前页数
      }
  },
  created(){
    //拿到的应该是存在storeList中的数据
//    console.log(this.$store.state.storeList);

    //在home组件中已经加载过数据 并存储在了store中  所以其他页面直接从store中获取数据就可以了  能减少http请求
      this.message=JSON.parse(localStorage.getItem('list'))
      this.total=JSON.parse(localStorage.getItem('list')).length
  },
  methods:{
    handleCurrentChange(val) {
        //点击分页器时  拿到当前的页码
      this.currentPage=val;
    }
  },
  computed:{
      //tableData是计算过后的每一页的数据
      tableData(){
          //截取数据数量  传到message  从而达到分页的效果
          return this.message.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
      }
  }

}
</script>
<style scoped>

</style>
