<template>
    
        <div class="remark-container">

            <!-- 标题 -->
            <h3>发表评论</h3>
            <hr>

            <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="msg"></textarea>

            <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

                <div class="cmt-list">
                <div class="cmt-item" v-for="(item, i) in remarkes" :key="i">
                    <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time }}
                     </div>
                     <div class="cmt-body">
                         {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
                 </div>
                </div>

                 </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
        </div>



</template>


<script>
import Toast from 'mint-ui'

export default {
    data(){
        return{
            pageIndex:1,    //默认展示第一页数据
            remarkes:[],     //所有评论数据
            msg:""      // 评论输入的内容
        }
    },

    created() {
        this.getComments()
    },

    methods:{
        getMore(){
            // 加载下一页的数据并添加到数组的尾部
           this.pageIndex++;
        //    重新调用请求方法
           this.getComments();
        },
        postComment(){
            console.log(this)
            //先判断评论内容是否为null
            if(this.msg.trim().length === 0){
                return alert("评论内容不能为空!!")
            }


            // 发表评论
            // 想服务器发送请求，添加这条评论
            this.$http 
                .post("api/postcomment/"+this.$route.params.id,{content:this.msg.trim()})
                .then(function(result){
                    if(result.body.status ===0){
                        //拼接评论对象
                        var cmt = {
                            user_name:"潇湘夜雨",
                            add_time:Date.now(),
                            content:this.msg.trim()
                        };
                        //将该对象放入数组的首位
                        this.remarkes.unshift(cmt);
                        //清空评论区
                        this.msg="";
                    }
                })

        },
        getComments(){

            //获取评论
            this.$http
                .get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex)
                .then(result =>{
                            if (result.body.status === 0) {
            // this.remarkes = result.body.message;
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
                this.remarkes = this.remarkes.concat(result.body.message);
                } else {
                   
                }
                })
        },


    },



    //定义参数
   props: ["id"]
    };
</script>



<style lang="scss" scoped>

</style>