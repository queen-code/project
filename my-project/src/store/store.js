/**
 * Created by Administrator on 2019/10/27.
 */
//当各个页面请求数据相同时，可以把数据写入到vuex中state中共同使用，减少http请求，进行优化

//引入
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        storeList:[],
    },
    mutations:{
      //list是从home传过来的值
      initStoreList(state,list){
        // state.storeList=list;
        // console.log(this.storeList)
        //把数据存储在本地，之后的值就可以从本地获取 从而进行渲染
        //本地存储  把数据转化成字符串类型
        localStorage.setItem('list',JSON.stringify(list));
        //将取出来的数据在转化为对象类型
        state.storeList=JSON.parse(localStorage.getItem('list'))
      },
    }
})
export default store;


