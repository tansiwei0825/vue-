<template>
  <div>
      <div class="woman-book">
        <ul>
          <li v-for="(item,index) in arr" @click="likes(index)" :class="{active9:womanindex==index}">{{item}}</li>
        </ul>
      </div>
      <div class="woman-book2" v-for="item in arr3">
          <div class="woman-box1">
              <img :src="item.src" alt="">
          </div>
          <div class="woman-box2">
              <p class="man-title">{{item.title}}</p>
               <p class="man-brief">{{item.brief}}</p>
                <p class="novel-author">{{item.author}}</p>
          </div>
      </div>
  </div>
</template>

<script>
  export default{
    name:"man",
    data(){
      return{
        arr:[],
        arr2:[],
        arr3:[],
        womanindex:0
      }
    },
    created(){
      this.axios.get('/../../static/data/data3.json').then((res)=>{
        this.arr2=res.data
       res.data.map((item)=>{
            this.arr.push(item.name)
       })
       this.likes('0')
      })
    },
    methods:{
      likes(index){
         this.womanindex=index
          document.documentElement.scrollTop=0
        this.arr3=this.arr2[index].data
      }
    }
  }
</script>

<style>
  .woman-book{
    width: 20%;
    height: 100%;
    background: rgb(246,247,249);
    float: left;
    position: fixed;
    top: 4rem;
    left: 0;
  }
  .woman-book ul li{
   height: 4rem;
   text-align: center;
   line-height: 4rem;
   font-size: 2rem;
   color: rgb(159,159,158);
  }
  .woman-book2{
    width: 80%;
    float: right;
    display: flex;
    height: 13rem;
    margin-bottom: 1rem;
  }
  .woman-box1{
    flex: 1;
  }
  .woman-box1 img{
    width: 100%;
    height: 13rem;
    border-radius: 0.5rem;
  }
  .woman-box2{
    flex: 2;
    padding: 1rem;
  }
 .active9{
   background: white;
   font-weight: bold;
   color: black !important;
 }
</style>
