<template>
    
    <div>
        <!-- 顶部标签滑动条组件  这里使用的是Mui的区域滚动组件-->
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
    <div class="mui-scroll">
        <!-- 使用表达式，默认选择第一个为高亮 -->
        <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']" v-for="item in titles" :key="item.id" 
            @tap="getPhotoesById(item.id)">
            {{item.title}}
        </a>
    </div>
</div>

    <!-- 内容部分，加载图片，这里使用的是Mint-ui的 Lazy Load 组件 -->
    <ul class="photo-list">
  
      <router-link v-for="item in list" :key="item.id" :to="'/index/photoInfo/'+item.id" tag="li">
    <img v-lazy="item.img_url">
    <div class="info">
        <h1 class="info-title">{{item.title}}</h1>
        <div class="info-body">{{item.zhaiyao}}</div>
    </div>
    </router-link>
  
    </ul>


    </div>


</template>





<script>
// 导入mui的js文件
import mui from  '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
            titles:[],      //顶部滑动标签栏数组
            list:[]
        }
    },

    created(){
        //先获取顶部滑动标签栏数据
        this.getTopTitles();
        //进入页面默认获取全部的数据
        this.getPhotoesById(0);
    },



    methods:{

        getTopTitles(){
                //获取标签分类
                this.$http.get("api/getimgcategory").then(result => {
                if (result.body.status === 0) {
                // 手动拼接出一个最完整的 分类列表
                result.body.message.unshift({ title: "全部", id: 0 });
                this.titles = result.body.message;
        }
        });    
        },

        getPhotoesById(id){
        // 根据 分类Id，获取图片列表
            this.$http.get("api/getimages/" + id).then(result => {
             if (result.body.status === 0) {
             this.list = result.body.message;
             }
             });
        }

    },





    mounted(){
        mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>




<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>