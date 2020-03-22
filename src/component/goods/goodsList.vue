<template>
    

    <!-- flex-container -->
    <div class="goods-container">

            <!-- flex-item -->
          <div class="goods-item" v-for="item in goodsList" :key="item.id"  @click="getInfo(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>goodsList
        </p>
      </div>





    </div>
                <!-- 加载更多按钮，即分页组件   这里使用Mint-ui的按钮组件 -->
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

            

    </div>

</template>


<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            goodsList:[],  //商品列表
            currentPage:1,
        }
    },
    created(){
        this.getGoodsList();
    },
    methods:{
            getGoodsList() {
      // 获取商品列表
      this.$http
        .get("api/getgoods?pageindex=" + this.currentPage)
        .then(result => {
          if (result.body.status === 0) {
            // this.goodsList = result.body.message;
            //自动追加数组

            if(result.body.message.length==0){
                Toast('已经没有更多给你了(⊙o⊙)…');
            }

             this.goodsList = this.goodsList.concat(result.body.message);
          }
        });
    },
        getMore(){
            this.currentPage++;
            this.getGoodsList();
        },
        getInfo(id){
            //跳转路由
             this.$router.push("/index/goodsInfo/"+id);
        }
    }


}
</script>


<style  lang="scss" scoped>





    .goods-container{

        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;

.goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }



    }


</style>