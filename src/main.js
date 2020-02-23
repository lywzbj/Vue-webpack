
//导入Vue依赖包
import Vue from 'vue'


//导入App组件
import App from './App.vue'

//获取路由对象
import routerObj from './router.js'




//创建Vue对象
var vm =new Vue({
    el:'#app',
    data:{
        msg:'Vue内部消息'
    },
    render:paste=>paste(App),
    router:routerObj
})