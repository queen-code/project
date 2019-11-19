// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {changeColor,changeText} from './directive/changeColor'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store/store'
import echarts from 'echarts'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.$axios=axios;
Vue.prototype.$echarts=echarts;
Vue.config.productionTip = false


Vue.filter('upper',function (v) {
  return v.toUpperCase();
})

router.beforeEach((to,from,next)=>{
  // alert('请您先登录后再查看');
  // next();  //可以进行查看页面  不再进行拦截，类似于通行证
  if(to.path=='/login') { //to是要进入的路由页面  form是要离开的路由页面
    next()
  }else if(JSON.parse(localStorage.getItem('user'))){
    next();
  }else{
    alert('请您先登录');
    next('/login')  //next可以进行传参  传入路径
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
