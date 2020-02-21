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