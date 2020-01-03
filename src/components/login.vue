<template>
  <div>
    <div class="login-top">
      <div class="login-about" @click="login()">登录/注册</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"login",
    methods:{
      login(){
         this.$router.push('/mylogin')
      }
    }
  }
</script>

<style>
  .login-top{
    width: 100%;
    height: 13rem;
    background: rgb(53,220,150);
    padding: 3rem;
    padding-top: 5rem;
    box-sizing: border-box;
  }
  .login-about{
    color: white;
    font-size: 2.5rem;


  }
</style>
