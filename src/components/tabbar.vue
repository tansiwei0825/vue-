<template>
  <div class="tabbar" v-if="bols">
       <Item text="书城" mark="home" :cell=selected @fun="get">
         <img src="../assets/item/p5.png" alt="" slot="defaultimg">
         <img src="../assets/item/p6.png" alt="" slot="activeimg">
       </Item>
       <Item text="分类" mark="cate" :cell=selected @fun="get">
         <img src="../assets/item/p3.png" alt="" slot="defaultimg">
         <img src="../assets/item/p4.png" alt="" slot="activeimg">
       </Item>
       <Item text="书架" mark="book" :cell=selected @fun="get">
         <img src="../assets/item/p13.png" alt="" slot="defaultimg">
         <img src="../assets/item/p14.png" alt="" slot="activeimg">
       </Item>
       <Item text="发现" mark="find" :cell=selected @fun="get">
         <img src="../assets/item/p11.png" alt="" slot="defaultimg">
         <img src="../assets/item/p12.png" alt="" slot="activeimg">
       </Item>
       <Item text="我的" mark="my" :cell=selected @fun="get">
         <img src="../assets/item/p15.png" alt="" slot="defaultimg">
         <img src="../assets/item/p16.png" alt="" slot="activeimg">
       </Item>
  </div>
</template>

<script>
  import Item from './item'
  export default{
    name:"tabbar",
    components:{
      Item
    },
    props:{
      bols:{
        default:false
      }
    },
    data(){
      return{
        selected:'home',

      }
    },
    methods:{
      get(val){
        this.selected=val
      }
    }

  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .tabbar {
  				width: 100%;
  				height: 5rem;
  				border-top: 0.1rem solid #E3E3E3;
  				position: fixed;
  				bottom: 0;
          background: white;
		  z-index: 99;

  			}
</style>
