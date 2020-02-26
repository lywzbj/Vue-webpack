<template>

    <!--轮播图 -->
    <div>
        <mt-swipe :auto="4000">
     <mt-swipe-item v-for="item in swipeImges" :key="item.src">
         <img :src="item.img" alt="" />
     </mt-swipe-item>

        </mt-swipe>



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
                    if(result.body.status === 0){
                        this.swipeImges= result.body.message;
                    }else{
                        Toast("加载轮播图失败。。。。")
                    }
                }
              )

        }
    }


}
</script>


<style  scoped>



</style>