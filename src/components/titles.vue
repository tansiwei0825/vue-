<template>
  <div>
    <div class="titles">
      <div class="bookCity">书城</div>
      <div class="bookSearch" @click="gosearch()"><span class="icon iconfont icon1">&#xe613;</span>
      <span class="search">精彩热搜</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'titles',
    methods:{
      gosearch(){
        this.$router.push('/search')
      }
    }
  }
</script>

<style>
  .titles{
    width: 95%;
    margin: 0 auto;
    height: 4rem;
    display: flex;
    margin-top: 0.5rem;
  }
  .bookCity{
    flex: 1;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "宋体";
    font-weight: bold;
  }
  .icon1{
    font-size: 4rem;
    color:rgb(105,105,105);
    margin-left: 1rem;
    vertical-align: middle;
  }
  .bookSearch{
    flex: 5;
    background: rgb(246,246,247);
      height: 4rem;
      line-height: 4rem;
      border-radius: 1rem;
  }
  .search{
    font-size: 2.5rem;
    margin-left: 1.5rem;
    color: rgb(153,153,153);
  }
</style>
