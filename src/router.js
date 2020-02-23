
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//导入组件
import Home from './component/index.vue'


//创建router对象
var routerObj = new Router({
    //设置匹配路由规则
    routes:[
        {path:'/index',component:Home}    //设置路由匹配规则
    ]
})

//向外暴露路由对象
export default routerObj;
