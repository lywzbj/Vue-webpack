<template>
    <div>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/chexk">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/menber">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
            			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-contact"></span>
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


<style scoped>

.mui-bar-tab .mui-tab-item.mui-active{
	color: #007aff;
}
</style>