<template>
  <div>
   <div class="mu7"><span class="icon iconfont icon0" @click="gohome()">&#xe608;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="read-history">
       阅读记录</span>
       <span class="icon iconfont dels" @click="alldel()">&#xe62d;</span>
   </div>
   <div class="hisdiv" v-if="isflag">
    <ul class="history-ul">
       <li v-for="item in arr3" @click="gomulu(item.xsurl)">
         <div class="hisbox1"><img :src="item.pic" alt=""></div>
         <div class="hisbox2">
           <p class="hisname">{{item.name}}</p>
           <p class="hiscon">{{item.content}}</p>
            <p class="hiscon">{{item.timer}}</p>
         </div>
       </li>
     </ul>
   </div>
  </div>
</template>

<script>
  import store from "../js/store.js"
  import storage from 'good-storage'
  import {
    mapState,
    mapGetters,
    mapActions
  } from "vuex"
  export default{
    name:"bookhistory",
    store,
    data(){
      return{
        arr:[],
        arr3:[],
        isflag:true
      }
    },
    created(){
      var local = window.localStorage
      for (let key in local) {
        if (key.indexOf('his') != -1) {
          this.arr3.push(JSON.parse(local[key]))
        }
      }
      console.log(this.arr3)

    },
    methods:{
      gohome(){
        this.$router.go(-1)
      },
      gomulu(url){
          this.$router.push({
            name: 'mulu',
            query: {
              nameid: url
            }
          })
          console.log(url)
      },
      alldel(){
        this.isflag=false
        this.arr3.map((item)=>{
          console.log(item.name)
          window.localStorage.removeItem('his'+item.name)
          this.$router.push('/bookhistory')
        })
      }
    },

  }
</script>

<style>
  .dels{
    color: gray;
    font-size: 4rem;
    margin-left: 60%;
  }
.mu7{
  width: 100%;
  height: 4.5rem;
  line-height: 4.5rem;
  border-bottom: 1px solid rgb(154,154,154);
}
.icon0{
  font-size: 3.5rem;
 vertical-align: top;
}
.read-history{
  font-size: 2.5rem;
 /* margin-left: 30%; */
  font-weight: bold;
}
.history-ul li{
  width: 100%;
  height: 13rem;
  display: flex;
 margin-bottom: 1rem;
}
.hisbox1{
  flex: 1;
}
.hisbox1 img{
  width: 95%;
  height:100%;
  border-radius: 0.5rem;
}
.hisbox2{
  flex: 2;
  padding: 1.5rem;
}
.hisdiv{
  width: 95%;
  margin: 1rem auto;
}
.hisname{
  font-size: 2.5rem;
  font-weight: bold;
}
.hiscon{
  font-size: 2.3rem;
  color: rgb(161,161,161);
  margin-top: 1rem;
}
</style>
