<template>
    

    <div class="goodsInfo-container">

       
<div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>


    </div>


</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,     //商品信息Id   
            lunbotu:[]
        }
    },
    created:{

    },
    methods:{
        getLunbotu(){
            this.$http.get("api/getthumimages/"+this.id)
            .then(result=>{
                if(result.body.status == 0){

                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .goodsInfo-container{
        background-color: #eee;
        overflow: hidden;
    }
</style>