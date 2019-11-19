/**
 * Created by Administrator on 2019/10/22.
 */

import Vue from 'vue'
//自定义指令binding.arg,在指令插入时写入arg属性，可以再指令的函数中，在进行判断，这样可以提高指令的复用率，公有的属性可以写在一起
const changColor=Vue.directive('changeColor',function(el,binding){
  //转化成16进制
  // console.log(Math.random().toString(16))
  el.style.color='#'+Math.random().toString(16).slice(2,8);
  // console.log(binding.value);
  //拿到的是字符串
  // console.log(binding.arg) //ita
  el.style.fontSize=binding.value.font;
  if(binding.arg=='ita'){
    el.style.fontStyle='italic'
  }

})
const changeText=Vue.directive('changeText',function (el,binding) {
  // el.innerHTML='123'
})
//暴露一个
// export default changColor

//暴露两个
export {changeText,changColor}
