const path = require('path')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
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
  mode: 'development',
  plugins:[
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.scss$/,use:'css-loader'},
      {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
      {test:/\.vue$/,use:'vue-loader'}
    ]
  },
   resolve:{
     alias:{
       "vue$":"vue/dist/vue.js"
     }
   }
}