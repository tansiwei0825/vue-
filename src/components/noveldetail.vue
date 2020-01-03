<template>
  <div class="noveldetail">
    <div class="back1"><span class="icon iconfont icon7" @click="back()">&#xe608;</span><span class="shuname2">{{list1.name}}</span></div>
    <div class="bookdetail">
        <div class="bookdetail-box1">
          <img :src="list1.cover" alt="">
        </div>
        <div class="bookdetail-box2">
          <p class="shuname">{{list1.name}}</p>
           <p class="myauthor">{{list1.author}}</p>
           <p class="status">状态:{{list1.status}}</p>
        </div>
    </div>
    <div class="jianjie">
        <h1>简介</h1>
        <p style="margin-top: 1rem;font-size: 2rem;color: gray;">{{list1.introduce}}</p>
    </div>
    <div class="mulu">
        <h1>查看目录</h1>
        <p style="font-size: 2rem;margin-top: 1rem;color:gray;float: left;">已完结共{{lens}}章</p>
        <p class="see">已完结 <span class="icon iconfont" @click="gomulu(did)">&#xe61e;</span></p>
    </div>
    <div class="bookcase">
      <ul>
       <keepAlive> <li class="oli1" @click="join()">{{joins}}</li></keepAlive>
        <li class="oli2"  @click="gomulu(did)">开始阅读</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import storage from 'good-storage'
  export default{
    name:'noveldetail',
    data(){
      return{
        list1:{},
        list2:[],
        lens:'',
        did:'',
        joins:'加入书架',
        bname:'',
        bpic:'',
        address:''
      }
    },
    updated(){
      if(storage.get('book'+this.bname)){
        this.joins="已加入"
      }
    },
    created(){
      var id=this.$route.query.nameid
      this.did=id
      var obj={
          xsurl1:id
      }
      this.$ajax.get('/novel',obj).then((res)=>{
        console.log(res.data)
        console.log(res)
        this.list1=res.data
        this.bname=this.list1.name
        this.bpic=this.list1.cover
        this.list2=res.list
        this.address=this.list2[0].url
        console.log(this.address)
        this.lens=res.list.length
        console.log(res)
      })
    },
    beforeRouteLeave(to, from, next) {
         // 设置下一个路由的 meta
        to.meta.keepAlive = false; // 让 文章列表 不缓存，即刷新
        next();
      },
    methods:{
      back(){
        this.$router.go(-1)
      },
     gomulu(id){
        this.$router.push({
          name: 'mulu',
          query: {
            nameid: id
          }
        })
     },
     join(){
       this.joins="已加入"
        var obj={
          bkname:this.bname,
          bkpic:this.bpic,
          burl:this.did
        }
          var local = window.localStorage;
         local.setItem("book"+this.bname,JSON.stringify(obj))
     }
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .shuname2{
    font-size: 2.5rem;
   display: inline-block;
   margin-left: 1.5rem;
  }
  .icon7{
    vertical-align: middle;
    font-size: 3rem;
  }
 .bookcase{
   width: 100%;
   height: 4.5rem;
   position: fixed;
   bottom: 0;
   left: 0;
 }
 .bookcase ul li{
   float: left;
   width: 50%;
   list-style: none;
   text-align: center;
   line-height: 4.5rem;
   font-size: 2.5rem;
 }
 .oli1{
   color: orangered;
 }
 .oli2{
   color: white;
   background: rgb(255,196,1);
 }
  .see{
    float: right;
    margin-top: 1rem;
    font-size: 2rem;
    color: orange;
  }
  .jianjie{
    width: 85%;
    margin: 0 auto;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightsteelblue;
  }
  .mulu{
    width: 85%;
    margin: 1rem auto;
    height: 7rem;
    border-bottom: 1px solid lightsteelblue;
  }
  .back1{
   margin-left: 0rem;
   margin-top: 0.5rem;
    padding-bottom: 1rem;
   border-bottom: 1px solid lightsteelblue;
  }
 .bookdetail{
   width: 85%;
   margin: 1rem auto;
   height: 15rem;
   display: flex;
  background: white;
 }
 .bookdetail-box1{
    flex: 2;
    padding: 0.5rem;
 }
 .bookdetail-box1 img{
  height: 18rem;
  border-radius: 0.5rem;
  max-height: 100%;
  max-width: 100%;
box-shadow:2px 2px 6px #000
 }

 .bookdetail-box2{
    flex: 3;
    padding: 1rem;
 }
 .shuname{
   font-size: 2.5rem;
   font-weight: bold;
 }
 .myauthor{
   margin-top: 1rem;
 }
 .status{
   color: #007AFF;
 }
</style>
