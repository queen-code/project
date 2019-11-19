<template>
  <div class="single">
    <h2>详   情   信   息</h2>
    <div class="img-box">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img :src="imgsrc1" alt="">
        </swiper-slide>
        <swiper-slide>
          <img :src="imgsrc2" alt="">
        </swiper-slide>
        <swiper-slide>
          <img :src="imgsrc3" alt="">
        </swiper-slide>
        <swiper-slide>
          <img :src="imgsrc4" alt="">
        </swiper-slide>
        <swiper-slide>
          <img :src="imgsrc5" alt="">
        </swiper-slide>
        <swiper-slide>
          <img :src="imgsrc6" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--//使用v-bind动态绑定图片路径时，需要使用import引入方式-->
      </swiper>
    </div>
    <div class="single-box">
        <p class="title" v-changeColor="{font:'26px'}">{{message.title}}</p>
        <p class="body">{{message.body}}</p>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img8 from '../assets/8.jpg'
export default {
  name: 'Single',
  data(){
      return{
          message:[],
        //接收动态传过来的id
          id:this.$route.params.id,
          imgsrc1:img1,
          imgsrc2:img2,
          imgsrc3:img3,
          imgsrc4:img4,
          imgsrc5:img5,
          imgsrc6:img6,

        swiperOption: {
            pagination : '.swiper-pagination', //分页
            autoplay : 1000, //类似定时器
            loop:true, //循环播放
            autoplayDisableOnInteraction : false, //手动改变以后  会自动重新开启autoplay
            effect : 'fade',
            fade: {
              crossFade: false,
            }
          }
      }
  },
  created(){
      this.$axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then((res)=>{
          this.message=res.data;
          console.log(this.message);
      }).catch(()=>{})
  }
}
</script>
<style scoped>
.single{
  text-align: center;

}
h2{
  width: 100%;
  height: 70px;
  line-height: 70px;
  background: linear-gradient(to bottom,pink,peachpuff);
  color: white;
}

.single-box{
  background-color:lightyellow;
}
.body{
  color: slategray;
  font-size: 20px;
}
.img-box{
  width: 100%;
  height: 330px;
  background:linear-gradient(to bottom,peachpuff,plum,violet);
}
img{
  text-align: center;
  width: 300px;
  height: 300px;
}
</style>
