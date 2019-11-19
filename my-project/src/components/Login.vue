<template>
  <div class="login">
    <div class="login-box">
      <h3>请您登陆</h3>
      <el-input
        placeholder="请输入用户名"
        suffix-icon="el-icon-s-custom" v-model="users">
      </el-input>
      <el-input
        placeholder="请输入密码"
        suffix-icon="el-icon-lock" v-model="pass">
      </el-input><br>
      <el-button type="primary" @click="submitFn">登陆</el-button>
      <el-button type="warning" @click="resetFn">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
      return{
          users:'',
          pass:'',
      }
  },
  methods:{
      submitFn(){
          this.$axios.post('./api',{
              users:this.users,
              pass:this.pass,
          }).then((res)=>{
              //判断是否登陆成功
              if(res.data==1){
                localStorage.setItem('user',JSON.stringify(res));
                  //登陆成功 以后跳转带主页
                  this.$router.push('/');
              }else{
                 this.$message({
                   showClose:true,
                   message:'用户名或密码输入错误，请重新输入',
                   type:'error'
                 });
              }
          }).catch(()=>{
            this.$message({
              showClose:true,
              message:'服务器崩溃了',
              type:'error'
            });
          })
      },
      resetFn(){
          this.users='';
          this.pass=''
      }
  }
}
</script>
<style scoped>
  .login{
    border-top: 1px solid transparent;
    height: 600px;
    background:linear-gradient(to bottom,peachpuff,pink,palegreen,skyblue,violet);
  }
.login-box{
  height: 300px;
  width: 400px;
  margin: 120px auto;
  background-color: white;
  border-radius: 10px;
  text-align: center;
}
  h3{
    padding-top: 15px;
    margin-bottom: 20px;
    font-weight: 100;
    text-align: center;
    font-size: 26px;
    background: linear-gradient(to bottom,pink,plum,coral);
    color: transparent;
    -webkit-background-clip: text;
  }
.el-input{
  width: 300px;
  margin-bottom: 20px;
}
button{
  margin-top: 20px;
  margin-right: 20px;
}
</style>
