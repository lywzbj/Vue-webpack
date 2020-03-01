

<!-- TOC -->

- [0.1. webpack和Vue的基本使用](#01-webpack和vue的基本使用)
    - [0.1.1. 学习要点](#011-学习要点)
    - [0.1.2. Webpakc基本配置](#012-webpakc基本配置)
    - [0.1.3. webpack中使用Vue](#013-webpack中使用vue)
    - [0.1.4. 使第三方loader导入 *.vue文件](#014-使第三方loader导入-vue文件)
    - [0.1.5. Webpack-server工具的使用](#015-webpack-server工具的使用)
    - [0.1.6. Vue-router的使用](#016-vue-router的使用)
    - [0.1.7. Vue-resource的基本使用](#017-vue-resource的基本使用)
- [0.2. Vue结合MUI、Mint-UI的简单应用](#02-vue结合muimint-ui的简单应用)
    - [0.2.1. 初始Vue组件库之Mint-ui,使用Mint-ui的组件Header组件制作App的顶部](#021-初始vue组件库之mint-ui使用mint-ui的组件header组件制作app的顶部)
    - [0.2.2. vue-router结合MUI的tabbar组件来实现手机主页](#022-vue-router结合mui的tabbar组件来实现手机主页)

<!-- /TOC -->

## 0.1. webpack和Vue的基本使用
***
### 0.1.1. 学习要点
1. webpack的基本使用
2. vue项目的实践应用
3. vue组件的应用
4. 使用Vue的组件Mint-UI
5. 结合MUI开发一个伪APP
***
### 0.1.2. Webpakc基本配置

   #### 初始化项目
- 使用VScode打开一个文件（注意：打开的文件夹的绝对路径不要包含中文)

- 在根目录中创建一个源文件的存放路径src文件夹   在终端中可用指令  *mkdir src*

- 在终端下使用 *npm init -y* 指令   （使用该指令需要安装Node,请提前安装) 
   - 使用该指令后，会在根目录中出现package.json文件
- 在终端下使用 *npm install webpack webpack-cli -D* 指令安装webpack
   - 创建文件
      - 在根目录下创建名为 webpack.config.js文件 文件名固定
      - 在src目录创建入口文件  main.js文件

- 在webpack.config.js 中配置webpack的入口和出口文件
```
 const path = require('path')
 module.exports = {
   // 入口
   entry: path.join(__dirname, './src/main.js'),     
   // 出口
   output: {
     // 出口目录
     path: path.join(__dirname, './dist'),
     filename: 'bundle.js'
   },
   // 开发模式
   mode: 'development'
 }
```
- 在package.json的scripts节点中添加一行脚本指令   
> "build": "webpack",

- 使用指令 *npm run build* 即可将main.js文件转换为bundle.js文件（出口文件)

***
### 0.1.3. webpack中使用Vue

 - 先使用*npm install vue -S* 安装Vue依赖
 - 在main.js文件中导入该包（在这里若直接导入需要配置webpack.config.js  否则导入的vue功能不全，无法使用）
   - 在webpack.config.js中配置如下
>     resolve:{
>     alias:{
>       "vue$":"vue/dist/vue.js"
>     }
>   }
- 在main.js中导入该依赖  *import Vue from 'vue'*
- 然后就可直接使用创建出Vue实例并使用了 O(∩_∩)O哈哈~

***
### 0.1.4. 使第三方loader导入 *.vue文件
- 在src目录下创建名为 *App.vue*的vue文件  其实该文件是vue的自定义组件
- 在main.js中引入该文件   *import App from './App.vue'*
- 安装可解析vue文件的loader和complier
   - 指令  *npm install vue-loader vue-template-compiler -D*
   - 在webpack.config.js中配置如下
      - 导入插件包
      > const VueLoaderPlugin=require('vue-loader/lib/plugin')
      - 配置该插件
          > plugins:[ new VueLoaderPlugin() ],
        
          
      - 配置加载loader匹配规则
      
        > module:{ rules:[ {test:/\.vue$/,use:'vue-loader'} ] ]
      
- 将该组件通过render的方式渲染到index.html中
   - 在vue的实例配置内部添加如下代码  
   
      >render:paste =>paste(App)
      - render函数与Vue的data和el属性是同级的
      - 这里的函数写法是使用ES6的箭头函数，更多render写法请自行百度
      - 参数App即我们之前自定义并导入的组件
- 使用 *npm run build* 构建脚本指令即可编译该文件类型 
- 最后记得在index.html中导入被webpack编译后的输出文件即可使用

- 需要注意的地方:
   1. 其他类型的例如字体文件类型、less文件类型、scss类型都需要安装第三方loader才可使用
   2. 在vue组件中的 lang='scss'  也需要安装对应的第三方Loader，具体安装方法可百度

***

### 0.1.5. Webpack-server工具的使用

- 我们都知道webpack是一个包管理工具及其编译工具，类似于Java后端的Maven或gradle，但webpack每次修改代码后都需要运行脚本命令后才能重新编译修改后的代码，所以这样很麻烦，为了解决这重复的劳动，所以我们这里可使用webpack-server来替代

- webpack-server的原理是在将我们的项目部署到服务器上，每当我们修改并保存一段代码时，就会自动帮我们重新编译并部署到服务器上，可以看到实时的变化，是一个相当nice的工具，说实话，我在JAVA开发时都没用到怎么安逸的工具，哈哈，也可能是我太菜了，还没见识过Java的很多很多东西，人恨话不多，接下来我们就来动手开敲吧！！

- 首先安装webpack-serer  
  > 指令 **npm install webpack-dev-server -D** 安装依赖

- 在package.json中配置该指令
```
"dev": "webpack-dev-server --open chrome --contentBase . --hot"
参数详解:
 --open chrome 部署好服务器后打开谷歌浏览器
 --contentBase . 配置根目录
 --hot  开启热部署 
```

- 完成


   


***

### 0.1.6. Vue-router的使用

> 使用Vue-router的好处在于可以根据设定的router-link切换不同的vue组件，达到动态切换的效果，例如手机APP的底部导航栏就可以使用它来完成

- 先使用 **npm install vue-router** 安装vue-router模块
- 在src目录下创建component目录并在下面创建一个 index.vue文件
- 在src目录下创建router.js文件来管理所有的路由配置，并添加如下代码
```
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
```
- 在main.js文件中导入router文件中暴露 的对象并设置
   - `import routerObj from './router.js'`    
   - `router:routerObj`     
- 在App.vue组件中添加如下代码

```
        <router-link to="/index">主页</router-link>
        <router-view></router-view>
```

***
### 0.1.7. Vue-resource的基本使用

- 安装依赖包 **npm install vue-resource -D**

- 在入口文件(main.js)中导入该依赖包
```
//导入路由模块
import Router from 'vue-router'
//安装路由
Vue.use(Router)
```

- 设置全局的请求接口根路径(这里使用的是黑马程序员刘龙彬老师的接口，非常感谢黑马程序员的无私分享)

> Vue.http.options.root='http://www.liulongbin.top:3005/'

- 使用方法  如下
```
this.$http.get("http://localhost:8080").then(result =>{
   获取后对数据进行操作
})

```

## 0.2. Vue结合MUI、Mint-UI的简单应用

***
### 0.2.1. 初始Vue组件库之Mint-ui,使用Mint-ui的组件Header组件制作App的顶部

- Mint-ui是基于Vue的第三方移动端组件库，我们可以直接导入组件并使用
- 官方文档 [Mint-UI官方文档](http://mint-ui.github.io/#!/zh-cn)

- 安装方法 **npm install mint-ui -D**

- Mint-ui  [Header的使用方法](http://mint-ui.github.io/docs/#/en2/header)

- 最后记得导入Mint-ui的css样式文件
 > import 'mint-ui/lib/style.css'



***
### 0.2.2. vue-router结合MUI的tabbar组件来实现手机主页

- 我们先到mui官网下载mui的安装包，并放到src目录下

- 导入mui的样式文件mui.css
   - 注意：这里在编译时可能会报错，因为在这里我们导入了.css文件和.ttf后缀的文件,所以需要加载第三方loader，配置方法可[百度](https:www.baidu.com)

      ```
      //导入mui样式
      import './lib/mui/css/mui.min.css'
      ```
- 在App.vue文件中引入以下代码  

```
            <nav class="mui-bar mui-bar-tab">
               <a class="mui-tab-item mui-active" href="#tabbar">
                  <span class="mui-icon mui-icon-home"></span>
                  <span class="mui-tab-label">首页</span>
               </a>
               <a class="mui-tab-item" href="#tabbar-with-chat">
                  <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                  <span class="mui-tab-label">消息</span>
               </a>
               <a class="mui-tab-item" href="#tabbar-with-contact">
                  <span class="mui-icon mui-icon-contact"></span>
                  <span class="mui-tab-label">通讯录</span>
               </a>
            </nav>
 ```
- 将a标签全部切换为router-link 并且配置相应的路由地址

- 然后再router.js中配置路由地址

- 修改高亮
   1. 在App.vue中添加样式
   ```
   .mui-bar-tab .mui-tab-item.mui-active{
	color: #007aff;
   }
   ```
   2. 在router对象中添加
   > linkActiveClass:'mui-active'   //覆盖默认的路由高亮的类 link-active-class



### 使用Vue组件库之Mint-UI制作主页轮播图

- 引入Mint-ui的轮播图组件  [具体使用方法](http://mint-ui.github.io/docs/#/zh-cn2/swipe)

- 使用vue-resource获取数据并渲染即可

- 最后记得设置轮播图的宽度和图片的渲染宽度

```
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        img{
            width: 100%;
            height: 100%;
        }
    }
}
```


### 在Index中加入MUI的九宫格样式

- 组件可参照Mui-hello实例中的Grid-default.html页面

- 可根据需要修改样式或者图片


### 使用MUI组件制作新闻列表页面并添加全局的时间格式化工具

- 该页面中的具体制作方法可查看 newsList.vue页面，这里我们注重介绍如何制作格式化时间的工具

- 先安装一个格式化插件的依赖包
> 安装指令: **npm install moment -D**
- 在main.js导入格式化时间的插件
> import moment from 'moment'
- 在main.js中添加定义全局的时间过滤器

```
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
```

- 用法 直接将时间字符串 连接到该该过滤器  例如
> **dateStr | dateFormat**

***
### 制作新闻详情页面并自定义评论组件

- 新闻详情页面具体可参照 newsInfo.vue组件

- 定义一个评论子组件
   - 父容器向子组件传递参数
      1. 先定义好评论子组件，并在父容器中导入并注册
      ```
      //导入评论子组件
      import comment from '../subComponent/remark.vue'

          components:{
        // 注册评论子组件
        "comment-box":comment
         }
      ```
      2. 在父容器中放入该组件    其中 :id=this.newsId  是向子组件传递参数
      ```
         <!-- 评论子组件区域 -->
        <comment-box :id="this.newsId"></comment-box>
      ```
      3. 在子组件中定义参数即可在子组件中获取该参数的值
      ```
       //定义参数
       props: ["id"]
      ```
   - 加载更多评论内容
      1. 由于我们第一次获取的数据是一部分数据，即第一页数据 所以不能单纯的通过下面的方式获取
      > this.remarkes = result.body.message;       错误示范
      2. 通过方法拼接获取的评论数据
      > this.remarkes = this.remarkes.concat(result.body.message)  正确做法
   - 添加最新的评论内容到数据首位
      1. 当成功添加评论内容到数据库后，最新的评论内容需要渲染到最前面
      > this.remarkes.unshift(cmt);

***
### 使用MUI的顶部标签滑块组件制作图片列表界面的顶部图片分类功能

- 详情请参考[MUI文档](https://dev.dcloud.net.cn/mui/ui/#scroll)  我们这里介绍如何在vue的组件中使用该组件

- 首先将MUI组件元素放入到页面中

```
<div class="mui-scroll-wrapper">
	<div class="mui-scroll">
		<a>该标签可添加多个</a>
	</div>
</div>

```

- 在Vue的scprit模块中导入mui组件对象
> import mui from  '../../lib/mui/js/mui.min.js'

- 最后在vue组件对象的mounted中引入该动态效果
```
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }

```

***
### 使用Mint-ui的懒加载组件价值图片列表

- 具体可查看Mint-ui的 [Lazy Load用法](http://mint-ui.github.io/docs/#/zh-cn2/lazyload)

- 在使用以上文档时请注意文档有一定错误， 样式中image标签为写错的标签，正确的标签应位img  请复制时注意

***
### 使用Vue的缩略图组件制作图片详情页面，该组件的主要功能是用来放大、缩小、预览图片

- 安装vue缩略图组件  **npm install vue-preview -D**

- 在main.js中导入该组件并配置使用
```
//导入Vue缩略图组件
import VuePreView from 'vue-preview'
Vue.use(VuePreView)

```
- 在页面中使用该组件

```
<vue-preview :slides="list"></vue-preview>

```

- 在获取数据时遍历其中的图片

```
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach(item => {
            item.w = 600
            item.h = 600
            item.msrc = item.src
          })
          // 把完整的数据保存到 list 中
          this.list = result.body.message

```
