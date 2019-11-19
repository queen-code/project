<template>
  <header>
    <nav>
      <router-link to="/" exact>首页</router-link>
      <router-link to="/list">列表</router-link>
      <router-link to="/shop">购物</router-link>
      <router-link to="/comand">管理</router-link>
    </nav>
    <div class="who">
      <span>用户名:</span>
      <span>{{JSON.parse(this.name).users}}</span>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Head',
  data(){
      return{
          name:JSON.parse(localStorage.getItem('user')).config.data
      }
  }
}
</script>
<style scoped>
header{
  height: 80px;
  width: 100%;
  line-height: 80px;
  text-align: center;
  background: linear-gradient(to bottom,paleturquoise,pink);
  font-size: 20px;
}
a{
  color: snow;
  text-decoration: none;
  background-color: pink;
  padding:10px 20px;
  border-radius: 5px;
}
  .router-link-active{
    color: rgb(227, 112, 98);
  }
  .who{
    position: absolute;
    top:0px;
    left: 20px;
    font-size: 26px;
    color: violet;
  }
</style>
