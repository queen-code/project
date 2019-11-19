import Vue from 'vue'
import Router from 'vue-router'


//路由懒加载
const Home=()=>import('@/components/Home');
const Login=()=>import('@/components/Login');
const List=()=>import('@/components/List');
const Comand=()=>import('@/components/Comand');
const UserComand=()=>import('@/components/UserComand');
const AllUser=()=>import('@/components/AllUser');
const Wait=()=>import('@/components/Wait');
const Tab=()=>import('@/components/Tab');
const Head=()=>import('@/components/Head');
const Shop=()=>import('@/components/Shop');
const Single=()=>import('@/components/Single');
const NotFound=()=>import('@/components/NotFound');
Vue.use(Router)

export default new Router({
  //去掉地址栏的#
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        keepAlive:true //保持当前的加载状态
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/comand',
      name: 'Comand',
      component:Comand,
      children:[
        {path:'/',component:UserComand},
        {path:'user',component:UserComand},
        {path:'all',component:AllUser},
        {path:'wait',component:Wait},
        {path:'tab',component:Tab},
      ]


    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta:{
        keepAlive:true //保持当前的加载状态
      }
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
