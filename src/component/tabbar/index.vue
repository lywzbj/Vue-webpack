<template>

    <!--轮播图 -->
    <div>


        <mt-swipe :auto="4000">
     <mt-swipe-item v-for="item in swipeImges" :key="item.src">
         <img :src="item.src" alt="" />
     </mt-swipe-item>

        </mt-swipe>

    		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/index/newsList">
		                    <img src="/src/imges/menu/menu6.png" alt="" >
		                    <div class="mui-media-body">新闻列表</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/index/photoList">
		                    <img src="/src/imges/menu/menu2.png" alt="" >
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="/src/imges/menu/menu3.png" alt="" >
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/src/imges/menu/menu4.png" alt="" >
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/src/imges/menu/menu5.png" alt="" >
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/src/imges/menu/menu1.png" alt="" >
		                    <div class="mui-media-body">联系我们</div></a></li>
	
		        </ul> 



    </div>
</template>


<script>

//导入Mint-ui的提示框组件
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            swipeImges:[]     //轮播图图片数组
        };
    },
    //该方法会在组件被创建完成后被触发执行
    created(){
        //调用获取数据的方法
        this.getSwipeImages();
    },
    methods:{
                getSwipeImages(){
              //发送异步请求获取数据     请注意，使用下面的发送请求指令需要安装Vue-resource组件
              this.$http.get("api/getlunbo").then(result =>
                {  
                    var image1={"src":"/src/imges/111.png"};
                    var image2={"src":"/src/imges/222.png"};
                    var image3={"src":"/src/imges/333.png"};
                    this.swipeImges.push(image1);
                    this.swipeImges.push(image2);
                    this.swipeImges.push(image3);
                }
              )

        }
    }


}
</script>


<style lang="scss" scoped>

.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9 {
    background-color:#fff;
    border: none;
    img{
        width: 60px;
        height: 60px;
    }
}
.mui-table-view {
    background-color: white;
}
.mui-table-view-cell{
    margin: 16px;
}

</style>