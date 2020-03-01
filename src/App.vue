<template>
    <div class="app-container">

		<mt-header fixed title="Vue">
			
		</mt-header>

        <!--底部选项卡 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link  class="mui-tab-item-ly" to="/index">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-ly" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-ly" to="/shopCart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-ly" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.app-container{
	
padding-top: 40px;    //留出Header的高度
  padding-bottom: 50px;   //留出Tabbr的高度
  overflow-x: hidden;
}



.mui-bar-tab .mui-tab-item-ly.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-ly {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-ly .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-ly .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>