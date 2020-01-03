<template>
  <div>
    <div class="mu"><span class="icon iconfont icon4" @click="gohome(),back2()">&#xe608;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="sname">{{list1.name}}</span></div>
    <div style="width: 100%;height: 4rem;"></div>
    <ul>
      <li v-for="(item,index) in list2" @click="read(list1.name,item.url,index),readbook(index)">
        <div class="novelname" :class="{active3:activeindex==index}">{{item.num}}</div>
      </li>
    </ul>
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
  export default {
    name: "mulu",
    store,
    data() {
      return {
        list2: [],
        list1: [],
        activeindex: '',
        names: ''
      }
    },
    meta: {
      keepAlive: true // 需要被缓存
    },
    updated() {

      if(storage.get('top'+this.list1.name)){
        console.log(storage.get('top'+this.list1.name))
          document.documentElement.scrollTop=storage.get('top'+this.list1.name)
      }else{
         document.documentElement.scrollTop = this.gettops
         console.log(this.gettops)
      }

      // storage.set(this.list2., this.getbookindex)
    },
    created() {

      var id = this.$route.query.nameid
      this.$store.dispatch('getbookid', id)
      this.did = id
      var obj = {
        xsurl1: id
      }
      this.$ajax.get('/novel', obj).then((res) => {
        console.log(res.data)
        this.list1 = res.data
        console.log(this.list1)

        // var dd = new Date();
        // var y = dd.getFullYear();
        // var m = dd.getMonth() + 1;
        // var d = dd.getDate();
        // var timer = y + "年" + m + "月" + d + "日"
        // storage.session.set(this.list1.name,timer)

        // console.log(y + "年" + m + "月" + d + "日")
        console.log(res.list)
        this.list2 = res.list
        console.log(this.list2)
        if(this.getbookindex){
           this.activeindex = this.getbookindex
        }else if(storage.get(this.list1.name)){
          console.log(storage.get(this.list1.name))
             this.activeindex = storage.get(this.list1.name)
        }else{
          this.activeindex = this.getpages
        }
      })
      if (this.getbookindex) {
        this.activeindex = this.getbookindex
      } else {
        this.activeindex=this.getpages
      }
      console.log(this.activeindex)
    },
    methods: {
      ...mapActions(['readbook', 'back2']),
      gohome() {
        this.$router.go(-1)
        this.$store.dispatch('getposition2')

      },
      read(name,id,index) {
        console.log(name)
        this.$store.dispatch('about',name)
        this.$store.dispatch('getindex', index)
        var tops = document.documentElement.scrollTop
        this.$store.dispatch('getposition', tops)
         this.$store.dispatch('gethistory', this.list1.cover)
        // sessionStorage.setItem(name,tops)
        this.activeindex = index
        this.$router.push({
          name: 'contents',
          query: {
            nameid: id
          }
        })
      },
    },
    computed: {
      ...mapGetters(['getpages', 'getpages2', 'gettops', 'getbookindex'])
    }
  }
</script>

<style>
  .sname {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .mu {
    padding: 0.5rem;
    border-bottom: 0.2rem solid rgb(240, 240, 240);
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    width: 100%;
  }

  .icon4 {
    font-size: 4rem;
    vertical-align: middle;
  }

  .novelname {
    padding: 1rem;
    font-size: 2rem;
    border-bottom: 0.2rem solid rgb(239, 239, 239);
    background: rgb(245, 245, 245);
    padding-left: 4rem;
  }

  .active3 {
    background: white;
    color: red;
  }
</style>
