
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//导入组件
import Home from './component/tabbar/index.vue'
import Member from './component/tabbar/member.vue'
import ShopCart from './component/tabbar/shopCart.vue'
import Search from './component/tabbar/search.vue'
import NewsList from './component/news/newsList.vue'
import NewsInfo from './component/news/newsInfo.vue'
import PhotoList from './component/photoes/photoList.vue'
import PhotoInfo from './component/photoes/photoInfo.vue'
import Login from './component/tabbar/login.vue'
//创建router对象
var routerObj = new Router({
    //设置匹配路由规则
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:Home},    //设置路由匹配规则
        {path:'/member',component:Member}, 
        {path:'/shopCart',component:ShopCart}, 
        {path:'/search',component:Search}, 
        {path:'/index/newsList',component:NewsList}, 
        {path:'/index/newsInfo/:id',component:NewsInfo}, 
        {path:'/index/photoList',component:PhotoList},
        {path:'/index/photoInfo/:id',component:PhotoInfo},
        {path:'/login',component:Login}

    ],
    linkActiveClass:'mui-active'   //覆盖默认的路由高亮的类 link-active-class
})

//向外暴露路由对象
export default routerObj;
