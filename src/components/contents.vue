<template>
  <div>
    <div class="mu2"><span class="icon iconfont icon9" @click="gohome()">&#xe608;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="sname2">{{list1.num}}</span>
    </div>
    <div style="width: 100%;height: 4.5rem;"></div>
    <div :class="{bg:isflag,bg2:!isflag}" :style="{filter:'brightness('+light+')',fontSize:sizes+'rem',background:activecolor,color:activefont}">
    <div v-for="item in list">{{item}}</div>
    </div>
    <div class="bookcase1">
      <ul>
        <li class="oli0"> <el-dropdown>
        <el-button type="primary">
          设置<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>背景切换</el-dropdown-item>
          <el-dropdown-item>
            <ul class="omg">
              <li @click="shows('0')">
                <div class="color1"></div>
              </li>
              <li @click="shows('1')">
                <div class="color2"></div>
              </li>
              <li @click="shows('2')">
                <div class="color3"></div>
              </li>
              <li @click="shows('3')">
                <div class="color4"></div>
              </li>
            </ul>
          </el-dropdown-item>
          <el-dropdown-item>字体大小</el-dropdown-item>
          <el-dropdown-item>
            <mt-range v-model="rangeValue2" @change="slide2()" :bar-height="1"></mt-range>
          </el-dropdown-item>
          <el-dropdown-item>亮度</el-dropdown-item>
          <el-dropdown-item>
            <mt-range v-model="rangeValue" @change="slide()" :bar-height="1"></mt-range>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown></li>
        <li class="oli1" @click="prev()">上一章</li>
        <li class="oli2" @click="next()">下一章</li>
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
  import Vue from 'vue'
  import {
    Range
  } from 'mint-ui';
  Vue.component(Range.name, Range);
  export default {
    name: "contents",
    store,
    beforeRouteLeave(to, from, next) {
      // 设置下一个路由的 meta
      to.meta.keepAlive = true; // 让 文章列表页面 缓存，即不刷新
      next();
    },
    data() {
      return {
        list: {},
         list1: {},
        rangeValue: 90,
        light: 0.9,
        rangeValue2: 40,
        isflag: true,
        sizes: 3,
        arrs: [
          'rgb(225, 209, 176)',
          'rgb(49,79,67)',
          'rgb(41,52,67)',
          'rgb(164,163,148)'
        ],
        colorarrs: ['rgb(41,39,37)', 'rgb(170,179,161)', 'rgb(173,171,163)', 'rgb(41,39,37)'],
        activecolor: 'rgb(225, 209, 176)',
        activeindex: 0,
        activefont: 'rgb(41,39,37)',
        zhang: '',
        urls: '',
        sec:0,
        minute:0,
        hour:0,
        timer:null,
        sec_count:0
      }
    },
    computed: {
      ...mapGetters(['getbookindex', 'getbooks','getname','gettops','getpicture'])
    },
    updated(){
        if(storage.get(this.list1.num)){
           document.documentElement.scrollTop=storage.get(this.list1.num)
        }else{
           document.documentElement.scrollTop=0
        }

         // var sec_count = 0;
        storage.set(this.getname,this.getbookindex)
        storage.set('top'+this.getname,this.gettops)
    },
    created() {
      var id = this.$route.query.nameid
      this.zhang = id
      var obj = {
        xsurl2: id
      }
      this.$ajax.get('/novel', obj).then((res) => {
        console.log(res)
        this.list1=res
        this.list = res.content
      })
       let This=this
       if(storage.get('cout')){
         this.sec_count=storage.get('cout')

        }
      this.timer=setInterval(function(){
         This.sec_count++
        This.sec = This.sec_count%60;
        This.minute = Math.floor(This.sec_count / 60);
        This.hour = Math.floor(This.sec_count / 3600);
      },1000)
    },
    methods: {
      gohome() {
        this.$router.go(-1)
        clearInterval(this.timer)
        console.log(this.sec)
        console.log(this.minute)
        console.log(this.hour)
        storage.set('cout',this.sec_count)
        storage.set('miao',this.sec)
        storage.set('fen',this.minute)
        storage.set('shi',this.hour)
       var contop=document.documentElement.scrollTop
        storage.set(this.list1.num,contop)
        var dd = new Date();
              var y = dd.getFullYear();
              var m = dd.getMonth() + 1;
              var d = dd.getDate();
              var times=y+'年'+m+'月'+d+'日'
        var objs={
          name:this.getname,
          content:this.list1.num,
          pic:this.getpicture,
          timer:times,
          xsurl:this.getbooks
        }
        var local = window.localStorage;
        local.setItem('his'+this.getname,JSON.stringify(objs))

      },
      handleClick() {
        alert('button click');
      },
      slide() {
        console.log(this.rangeValue)
        if (this.rangeValue <= 60) {
          this.isflag = false
        } else {
          this.isflag = true
        }
        this.light = this.rangeValue / 100
      },
      slide2() {
        this.sizes = this.rangeValue2 / 10
      },
      shows(num) {
        this.activecolor = this.arrs[num]
        this.activefont = this.colorarrs[num]
      },
      next() {
        this.$store.dispatch('next')
        var obj = {
          xsurl1: this.getbooks
        }
        this.$ajax.get('/novel', obj).then((res) => {
          console.log(res.list[this.getbookindex])
          this.urls = res.list[this.getbookindex].url
          var obj2 = {
            xsurl2: this.urls
          }
          this.$ajax.get('/novel', obj2).then((res) => {
            console.log(res)
             this.list=res.content
            this.list1 = res
          })
        })

      },
      prev() {
        this.$store.dispatch('prev')
        var obj3 = {
          xsurl1: this.getbooks
        }
        this.$ajax.get('/novel', obj3).then((res) => {
          console.log(res.list[this.getbookindex])
          this.urls = res.list[this.getbookindex].url
          var obj4 = {
            xsurl2: this.urls
          }
          this.$ajax.get('/novel', obj4).then((res) => {
            console.log(res)
            this.list=res.content
            this.list1 = res
          })
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

  .bookcase1 {
    width: 100%;
    height: 4.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
  }

  .bookcase1 ul li {
    float: left;
    width: 33.3%;
    list-style: none;
    text-align: center;
    line-height: 4.5rem;
    font-size: 2.5rem;
  }
  .oli0{
      background: #9A6E3A;
  }
  .oli1 {
    color: orangered;
    background: cadetblue;
  }

  .oli2 {
    color: white;
    background: rgb(255, 196, 1);
  }

  .omg li {
    float: left;
    width: 25%;
    list-style: none;

  }

  .color1 {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: rgb(225, 209, 176);
  }

  .color2 {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: rgb(49, 79, 67);
  }

  .color3 {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: rgb(41, 52, 67);
  }

  .color4 {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: rgb(164, 163, 148);
  }

  .mu2 {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: white;
    width: 100%;
    height: 4.5rem;
  }

  .bg {
    background: rgb(225, 209, 176);
    font-size: 3rem;
    padding: 1rem;

  }

  .bg2 {
    background: rgb(225, 209, 176);
    font-size: 3rem;
    color: black;
    padding: 1rem;
  }

  .icon9 {
    font-size: 4rem;
    vertical-align: middle;
  }

  .sname2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 0.8rem;
    display: inline-block
  }

  .el-dropdown {
    vertical-align: top;
  }

  .el-dropdown+.el-dropdown {
    margin-left: 0px;
  }

  .el-icon-arrow-down {
    font-size: 1.2rem;
  }

  .el-button {
    background: #9A6E3A;
   /* margin-top: 0.3rem; */
    width: 100%;
    height: 100%;
    border: none;
  }

  .el-dropdown-menu {
    width: 97%;
  }
</style>
