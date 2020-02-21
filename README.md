# 这是一个Vue项目







## 绘制图片列表   美化样式
1. 制作顶部的滑动条
  a、该需求我们可以使用MUI的tab-top-webview-main.html    但需要把mui-fullscren类去掉
  b、 使用滑动条的话需要在photoList的script中导入mui.js文件
  c、然后在photoList的script中配置  mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
   d、然后记得移除webpack的严格模式  具体可百度
   E、刚进入图片列表页面中时，dom元素没有加载完毕，所以滑动条无法正常滑动，所以我们可以将c步骤的代码放入 组件的monted中先进行初始化
   F、根据接口获取分类列表数据并渲染
2. 制作底部的图片列表
### 制作顶部
1、图片列表需要使用懒加载技术，我们可以使用Mint-UI 的Lazy-load组件来制作该需求