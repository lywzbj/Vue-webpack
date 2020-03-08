<template>
    
    <div class="login-container">

        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button type="primary" @click="login">登录</mt-button>
    </div>



</template>




<script>
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        login:function(){

            var data={
                username:this.username,
                password:this.password
            }

            this.$http.post('http://localhost:8080/manager_war_exploded/test/one',data,
            {
               headers:{},
               emulateJSON:true
            })
            .then(result=>{
                console.log("打印")
                console.log("打印响应头"+result)
            })
        }
    }
}
</script>



<style lang="scss" scoped>

</style>