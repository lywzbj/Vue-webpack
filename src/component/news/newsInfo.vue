<template>
    

    <div class="newsInfo-container">
            <!-- 大标题 -->
           <h3 class="title">{{newsInfo.title}}</h3> 

            <!-- 子标题 -->
            <p class="subTitle">
                <span>发表时间:{{newsInfo.add_time}}</span>
                <span>点击:{{newsInfo.click}}</span>
            </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="newsInfo.content"></div>

        <!-- 评论子组件 -->
            <!-- 评论子组件区域 -->
        <comment-box :id="this.newsId"></comment-box>

    </div>
</template>



<script>
import Toast from 'mint-ui'
//导入评论子组件
import comment from '../subComponent/remark.vue'
export default {
    
    data(){
        return{
            // 获取新闻列表页面传递过来的Id
            newsId:this.$route.params.id,
            // 新闻对象
            newsInfo:{}
        }
    },
    created() {
        this.getNewsInfo();
    },

    methods:{
        getNewsInfo(){
         // 获取新闻详情
      this.$http.get("api/getnew/" + this.newsId).then(result => {
        if (result.body.status === 0) {
          this.newsInfo = result.body.message[0];
        } else {
          Toast("获取新闻失败！");
        }
      });

        }
    },
    
    components:{
        // 注册评论子组件
        "comment-box":comment
    }


}
</script>


<style lang="scss" scoped>

.newsInfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subTitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>