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
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻列表</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
	
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
}
.mui-table-view {
    background-color: white;
}
.mui-table-view-cell{
    margin: 16px;
}

</style>