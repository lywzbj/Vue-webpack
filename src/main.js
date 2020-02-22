
//导入Vue依赖包
import Vue from 'vue'


//导入App组件
import App from './App.vue'






//创建Vue对象
var vm =new Vue({
    el:'#app',
    data:{
        msg:'Vue内部消息'
    },
    render:paste=>paste(App)
})