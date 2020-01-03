<template>
  <div>
    <div class="tops"><span class="kms">行千里路 掘万卷书</span> <span class="icon iconfont icon5"  @click="gosearch()">&#xe613;</span>
      <span class="icon iconfont icon6" @click="gohistory()">&#xe609;</span>
      <span class="icon iconfont icon6" @click="del()">&#xe86d;</span>
    </div>
    <div>
      <div class="timer">
        <p style="float:left;">本周已读{{shi}}时{{fen}}分{{miao}}秒</p>
        <div class="vips">时长兑换VIP</div>
      </div>
    </div>
    <div class="allbook">
    <div class="his" v-for="(item,index) in arr3">
     <div class="shop-box1" v-if="isflag">
     	<input type="checkbox" class="checks" v-model="item.ischeck" @click="chk(index)">
     	 <label for="checkbox"></label>
     </div>
      <img :src="item.bkpic" alt="" @click="reading(item.burl)">
      <p>{{item.bkname}}</p>
    </div>
    <div class="book-div"><el-button type="danger" v-if="isflag" @click="checkDel">选择删除</el-button></div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import storage from 'good-storage'
  export default {
    name: "book",
    data() {
      return {
        lan: "zh",
        pdt: 301,
        vol: 9,
        rate: 0,
        per: 0,
        text2: "你好",
        about: "播放",
        values: '',
        list: [],
        urls: '',
        atr: '',
        arr: [],
        books: '',
        img:'',
        list1:[],
        miao:0,
        fen:0,
        shi:0,
        arr2:[],
        isflag:false,
        arr3:[]
      }
    },
    methods: {
      del(){
        this.isflag=!this.isflag
      },
      dodel(name){
        console.log(name)
      },
        reading(name){
            this.$router.push({
              name: 'mulu',
              query: {
                nameid: name
              }
            })
        },
        gosearch(){
          console.log('aa')
          this.$router.push('/search')
        },
        gohistory(){
          this.$router.push('/bookhistory')
        },
        chk(index){
          console.log(index)
          this.arr3[index].ischeck=!this.arr3[index].ischeck
          console.log( this.arr3)
        },
        checkDel(){
          for(var i=0;i<this.arr3.length;i++){
            if(this.arr3[i].ischeck==true){
               window.localStorage.removeItem('book'+this.arr3[i].bkname)
              this.arr3.splice(i,1)
            }
          }

        }
    },
    created() {
      if(storage.get('cout')){
        this.miao=storage.get('miao')
        this.fen=storage.get('fen')
        this.shi=storage.get('shi')
      }

      var local = window.localStorage
      for (let key in local) {
        if (key.indexOf('book') != -1) {
          this.books = key.substr(4, key.length - 1)
          this.arr.push(this.books)
          this.arr2.push(JSON.parse(local[key]))
        }
      }
      console.log(this.arr2)
      this.arr3=this.arr2
    for(var i=0;i<this.arr3.length;i++){

      this.arr3[i]['ischeck']=false
    }
      console.log(this.arr3)
    },
    mounted() {


    }

  }
</script>

<style>
  .book-div{
    position: fixed;
    top: 85%;
    left: 40%;
  }
  .checks{
  	width: 2.5rem;
  	height: 2.5rem;
  	opacity: 0;
  	margin-left: 0.5rem;
  	position: absolute;
  	right: 0.5rem;
  	top: 11rem;
  	z-index: 99;
  }
  label{
  	position: absolute;
  	right: 0.5rem;
  	top: 11rem;
  	width: 2.5rem;
  	height: 2.5rem;
  	border-radius: 50%;
  	z-index: 1;
  	background-image: url('../assets/item/check1.png');
  	background-size: 2.5rem 2.5rem;
  	background-repeat: no-repeat;
  }
  input:checked+label{
  	background-image: url('../assets/item/check2.png');
  }
  .allbook{
    width: 90%;
    margin: 0 auto;
   text-align: center;
    padding-top: 1rem;

  }
  .his {
   float: left;
    width: 30%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    height: 15rem;
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }
  .del{
    font-size: 3rem;
    color: #55A532;
    position: absolute;
    top: 13rem;
    right: 0;
    background: white;
    vertical-align: middle;
    z-index: 99;
  }
  .his img{
    width: 100%;
    height: 13rem;
    border-radius: 0.5rem;
  }
  .vips {
    float: right;
    width: 15rem;
    color: orangered;
    text-align: right;
  }

  .timer {
    width: 100%;
    height: 6rem;
    padding: 1rem;
    box-sizing: border-box;
    background: rgb(246, 247, 246);
    font-size: 2.5rem;
    font-weight: bold;
    padding-top: 1.5rem;

  }

  .tops {
    width: 100%;
    height: 4.5rem;
    background: rgb(246, 247, 246);
    line-height: 4.5rem;
    box-sizing: border-box;
    padding-right: 1rem;
  }

  .kms {
    font-size: 3rem;
    font-weight: bold;
    padding-left: 1rem;
  }

  .icon5 {
    vertical-align: top;
    margin-left: 21%;

    display: inline-block;
    font-size: 3.5rem;
  }

  .icon6 {
    vertical-align: top;

    font-size: 4rem;
    display: inline-block;
    margin-left: 0.5rem;
  }
</style>
