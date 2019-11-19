<template>
  <div class="foot">
      <div class="notfound">
          <p class="not">404 not Found</p>
          <p class="tips">不好意思，没找着您输入的页面</p>
          <img :src="imgsrc" alt="">
      </div>
  </div>
</template>

<script>
  import dog from '../assets/9.jpg'
export default {
  name: 'NotFound',
  data(){
      return{
          imgsrc:dog,
      }
  }

}
</script>
<style scoped>
  .notfound{
    width: 100%;
    text-align: center;
  }
.not{
  margin-top: 10px;
  font-size: 30px;
  color: brown;
}
  .tips{
    font-size: 14px;
    color: brown;
    margin-bottom: 10px;

  }
</style>
