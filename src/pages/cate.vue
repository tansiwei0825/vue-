<template>
 <div>
   <div id="cate-div">
 <ul id="cate-ul">
   <li></li>
   <router-link to="/cate/man" tag="li" active-class="active5">男生</router-link>
    <router-link to="/cate/woman" tag="li" active-class="active5">女生</router-link>
    <li></li>
 </ul>
 </div>
  <div style="width: 100%;height: 4rem;"></div>
   <router-view></router-view>
 </div>

</template>

<script>
  export default{
    name:"cate",
    methods:{

    }
  }
</script>

<style>
  #cate-div{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    background: white;
  }
  #cate-ul li{
    width: 25%;
    float: left;
    list-style: none;
    text-align: center;
    font-size: 3rem;
    box-sizing: border-box;
    height: 4rem;
    line-height: 4rem;
  /*  border-bottom: 1px solid rgb(64,158,255); */
    /* color: rgb(153,153,153); */
    font-weight: bold;
  }
  #cate-ul{

  }
  .active5{
    color: red;
    border-bottom: 1px solid #DF5000;
  }
</style>
