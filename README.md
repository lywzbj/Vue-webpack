#                           这是我的第一个Vue实例项目

###  学习要点
1. webpack的基本使用
2. vue项目的实践应用
3. vue组件的应用
4. 使用Vue的组件Mint-UI
5. 结合MUI开发一个伪APP
***
###  Webpakc的基本使用

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

> const path = require('path')

> module.exports = {
>   // 入口
>   entry: path.join(__dirname, './src/main.js'),     
>   // 出口
>   output: {
>     // 出口目录
>     path: path.join(__dirname, './dist'),
>     filename: 'bundle.js'
>   },
>   // 开发模式
>   mode: 'development'
> }

- 在package.json的scripts节点中添加一行脚本指令   
> "build": "webpack",

- 使用指令 *npm run build* 即可将main.js文件转换为bundle.js文件（出口文件)

***
### webpack中使用Vue

 - 先使用*npm install vue -S* 安装Vue依赖
 - 在main.js文件中导入该包（在这里若直接导入需要配置webpack.config.js  否则导入的vue功能不全，无法使用）
   - 在webpack.config.js中配置如下
   >     resolve:{
     alias:{
       "vue$":"vue/dist/vue.js"
     }
   }
- 在main.js中导入该依赖  *import Vue from 'vue'*
- 然后就可直接使用创建出Vue实例并使用了 O(∩_∩)O哈哈~
