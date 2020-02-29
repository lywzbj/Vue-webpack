
//导入Vue依赖包
import Vue from 'vue'


//导入App组件
import App from './App.vue'

//获取路由对象
import routerObj from './router.js'

//导入路由模块
import Router from 'vue-router'
//安装路由
Vue.use(Router)

//导入Resource组件
import VueResource from 'vue-resource'
//安装组件
Vue.use(VueResource)
//设置全局请求的根路径
Vue.http.options.root='http://www.liulongbin.top:3005/'

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入格式化插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
  })

//导入Mint-ui
import { Swipe, SwipeItem, Header,Button  } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import 'mint-ui/lib/style.css'
//创建Vue对象
var vm =new Vue({
    el:'#app',
    data:{
        msg:'Vue内部消息'
    },
    render:paste=>paste(App),
    router:routerObj
})