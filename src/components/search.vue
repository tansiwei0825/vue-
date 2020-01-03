<template>
  <div>
    <div class="searchbox1">
      <div class="bookCity1"><span class="icon iconfont icon2" @click="gohome();dodel()">&#xe608;</span></div>
      <div class="bookSearch1">
        <span class="icon iconfont icon3">&#xe613;</span>
        <input type="text" v-model="value" class="ipt" placeholder="热门搜索" ref="ipt" @click="tog()">
        <button @click="search1(value);search()" class="btn1">搜索</button>
      </div>
    </div>
    <ul v-if="isflag">
      <li v-for="item in list2" class="his-name">{{item}}</li>
    </ul>
    <ul id="searchoul" v-if="!isflag">
      <li v-for="(item,index) in list" @click="godetail(item.url)">
        <div class="search-box1">
          <img :src="item.cover" alt="">
        </div>
        <div class="search-box2">
          <p class="novel-name">{{item.name}}</p>
          <p class="introduce">{{item.introduce}}</p>
          <p class="tag">{{item.tag}}</p>
          <p class="novel-author">{{item.author}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  import storage from 'good-storage'
  import axios from 'axios'
  import store from "../js/store.js"
  import {
    mapState,
    mapGetters,
    mapActions
  } from "vuex"
  export default {
    name: 'search',
    store,
    data() {
      return {
        value: '',
        list: [],
        list2:[],
        isflag:true
      }
    },
    computed: {
      ...mapGetters(['getarr1'])
    },
    created() {
      if(storage.session.get('name')){
        var name=storage.session.get('name')
        console.log(name)
        var name2=JSON.parse(name)
        for(let i=0;i<name2.length;i++){
          if(name2[i]!=''){
             this.list2.push(name2[i])
             for(var i=0;i<this.list2.length;i++){
                   for(var j=i+1;j<this.list2.length;j++){
                     if(this.list2[i]==this.list2[j]){
                       this.list2.splice(j,1)
                       j--
                     }
                   }
                 }
          }
        }
        console.log(this.list2)
      }


      // console.log(this.list2)
      this.value=this.getarr1
      this.search()
    },
    updated(){

    },
    mounted() {
      this.$refs.ipt.focus()
    },
    methods: {
      ...mapActions(['search1','dodel']),
      tog(){
         this.isflag=true
      },
      search() {
         this.isflag=false
        var obj = {
          xsname: this.value
        }
        this.$ajax.get('/novel', obj).then((res) => {
          this.list = res.list
        })
      },

      gohome() {
         this.value=this.getarr1
        this.$router.go(-1)
      },
      godetail(id) {
        // this.$router.push('/noveldetail/'+id)
        // this.$router.push({name:'noveldetail',params:{id}})
        this.$router.push({
          name: 'noveldetail',
          query: {
            nameid: id
          }
        })
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .icon3 {
    font-size: 3rem;
    margin-left: 1rem;
    vertical-align: middle;
  }
  .btn1{
    border: none;
    height: 3.5rem;
    width: 4rem;
  }
  .introduce {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: rgb(169, 169, 169);
  }

  .tag {
    margin-top: 1rem;
  }

  .novel-author {
    margin-top: 0.5rem;
  }

  .novel-name {
    font-size: 2.5rem;
    color: darkorange;
  }

  #searchoul {
    margin: 1rem auto;
  }

  #searchoul li {
    list-style: none;
    width: 95%;
    height: 10rem;
    display: flex;
    margin-top: 1rem;
  }

  .ipt {
    width: 70%;
    height: 3.5rem;
    margin-left: 3%;
    outline: none;
    border: none;
    background: rgb(246, 246, 247);
  }

  .search-box1 {
    flex: 1;
    padding: 1rem;
  }
  .search-box1 img {
    height: 10rem;
    border-radius: 0.5rem;
    border: 1px solid darkgray;
    width: 8rem;
  }
  .search-box2 {
    flex: 4;
    padding: 1rem;
  }
  .mint-searchbar {
    width: 99%;
    height: 4rem;
  }
  .searchbox1 {
    display: flex;
    width: 95%;
    margin: 0.5rem auto;
    height: 4rem;
  }
  .bookCity1 {
    flex: 1;
    font-size: 3rem;
    display: flex;
    align-items: center;
    font-family: "宋体";
    font-weight: bold;
    text-align: left;
  }
  .icon2 {
    font-size: 3rem;
  }
  .bookSearch1 {
    flex: 7;
    background: rgb(246, 246, 247);
    height: 4rem;
    line-height: 4rem;
    border-radius: 1rem;
  }
  .his-name{
    float: left;
    width: 33%;
    list-style: none;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 2.5rem;
    color: orange;
  }
</style>
