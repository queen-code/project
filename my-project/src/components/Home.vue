<template>

  <div class="home">
    <Head/>
    <h1>新闻总览</h1>
    <div class="new_box" v-for="item of list" :key="item.id">
      <router-link :to="'/single/'+item.id">
        <h3 v-changeColor:ita="{font:'20px'}">{{item.id}}.{{item.title | upper}}</h3>
      </router-link>
      <!--主体artical-->
      <!--<article>{{item.body}}</article>-->
    </div>
    <button @click="add" ref="btn">继续加载</button>
    <span ref="content"></span>
  </div>
</template>

<script>
  import Head from './Head'
export default {
  name: 'Home',
  components:{Head},
  data(){
      return{
        list:[],
        num:0
      }
  },
  created(){
//    console.log(this.$store.state.storeList);
      this.$axios.get('../../static/txt.json').then((res)=>{
          this.list=res.data;
          this.list=res.data.slice(0,10);
//          console.log(res.data)
          //触发mutations里的方法  只能用commit；
          this.$store.commit('initStoreList',res.data);
      }).catch(()=>{
        this.$message({
            message: '警告哦，这是一条警告消息',
            type: 'warning'
        });
      })
  },
  methods:{
      add(){
        this.$axios.get('../../static/txt.json').then((res)=>{
            this.num +=5;
          if(this.list.length>=20){
              this.$refs.content.innerHTML='没有更多内容了吖~';
              this.$refs.btn.style.display='none';
          }else{
//              let arr=res.data.slice(this.list.length,this.list.length+~~5);
//                this.list=this.list.concat(arr);
                let data=res.data.slice(5+this.num,10+this.num)
                this.list=this.list.concat(data);
          }
        }).catch(()=>{
          this.$message({
            message: '警告哦，这是一条警告消息',
            type: 'warning'
          });
        })
      }
  }
}
</script>
<style scoped>
h1{
  text-align: center;
  height: 80px;
  background-color: peachpuff;
  color: white;
  line-height:80px;
  background: linear-gradient(to top,peachpuff,pink);
}
.new_box{
    text-align: center;
    background-color:lightyellow;
    color: white;
}
.new_box h3{
  padding:20px 0px;
  border-bottom: 8px dotted rgb(250, 172, 172);
}
button{
  margin-top: 10px;
  margin-left: 625px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: plum;
  color: white;
  padding: 10px 20px;
}
  span{
    display: block;
    width: 100%;
    margin-top: 15px;
    text-align: center;
    color: sandybrown;
    font-size: 26px;
  }
  a{
    text-decoration: none;
  }
</style>
