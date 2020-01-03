<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->

    <Tabbar :bols="isflag"></Tabbar>
     <transition :name="direction"><router-view class="appView"/></transition>

  </div>
</template>

<script>
  import Tabbar from './components/tabbar'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: 'App',
  components:{
    Tabbar
  },
  data(){
    return{
      isflag:true,
      direction: "slide-right",
      msn:'msb'
    }
  },
  beforeMount(){
    this.$router.push('/home')
  },
  watch:{
       $route:{
         handler:function(val,oldval){
           let url=val.path
             if(url=='/home' || url=='/cate' ||  url=='/book' || url=='/find' || url=='/my' || url=='/cate/man' || url=='/cate/woman'){
                 this.isflag=true
             }else if(url == "/mulu"){
                this.direction = "slide-left";
             }
             else{
               this.isflag=false
                this.direction = "slide-right";
             }
         },
         deep:true
       }
        // $route(to, from) {
        //       if (to.path == "/mulu") {
        //         this.direction = "slide-left";
        //       }else{
        //          this.direction = "slide-right";
        //       }
        //     }
  },
  created(){
    // var obj={
    //   xsname:'狂神'
    // }
    // axios.get('/novel',{
    //   params:{
    //     ...obj
    //   }
    // }).then((res)=>{
    //   console.log(res)
    // })
    // axios.get('http://api.pingcc.cn',{
    //   params:{
    //     ...obj
    //   }
    // }).then((res)=>{
    //   console.log(res)
    // })
  }
}

</script>

<style>
  html,body{
    font-size:10px
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}


.appView {
  position: absolute;
  width:100%;
  transition: transform 0.3s ease-out;
}
.slide-left-enter{
  transform: translate(100%, 0);
}
.slide-left-leave-active{
  transform: translate(-50%, 0);
}
.slide-right-enter {
  transform: translate(-50%, 0);
}
.slide-right-leave-active{
  transform: translate(100%, 0);
}
</style>
