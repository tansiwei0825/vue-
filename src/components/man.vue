<template>
  <div>
     <el-tabs :tab-position="tabPosition" style="height: 100%;width: 100%;">
       <el-tab-pane label="奇幻">
         <div class="man-box" v-for="item in arr1">
           <div class="man-box1"><img :src="item.src" alt="" class="man-img"></div>
           <div class="man-box2">
              <p class="man-title">{{item.title}}</p>
               <p class="man-brief">{{item.brief}}</p>
                <p class="novel-author">{{item.author}}</p>
           </div>
         </div>
       </el-tab-pane>
       <el-tab-pane label="玄幻">
         <div class="man-box" v-for="item in arr2">
           <div class="man-box1"><img v-bind:src="item.src" alt="" class="man-img"></div>
           <div class="man-box2">
              <p class="man-title">{{item.title}}</p>
               <p class="man-brief">{{item.brief}}</p>
                <p class="novel-author">{{item.author}}</p>
           </div>
         </div>
       </el-tab-pane>
       <el-tab-pane label="都市">角色管理</el-tab-pane>
       <el-tab-pane label="武侠">定时任务补偿</el-tab-pane>
       <el-tab-pane label="仙侠">用户管理</el-tab-pane>
       <el-tab-pane label="历史">配置管理</el-tab-pane>
       <el-tab-pane label="军事">角色管理</el-tab-pane>
       <el-tab-pane label="科幻">定时任务补偿</el-tab-pane>
       <el-tab-pane label="职场">角色管理</el-tab-pane>
       <el-tab-pane label="游戏">定时任务补偿</el-tab-pane>
     </el-tabs>
  </div>
</template>

<script>
    import axios from 'axios'
  export default{
    name:"man",
    data(){
      return{
         tabPosition: 'left',
         arr1:[],
         arr2:[]
      }
    },
    created(){
      this.axios.get('/../../static/data/data1.json').then((res)=>{
        console.log(res.data)
        this.arr1=res.data.data
      })

      this.axios.get('/../../static/data/data2.json').then((res)=>{
        console.log(res.data)
        this.arr2=res.data.data
        console.log(this.arr2)
      })
     
    }
  }
</script>

<style>
  .el-tabs--left .el-tabs__nav.is-left,{
    position: fixed;
    top: 5rem;
    left: 0rem;
    height: 100%;
  }
  .el-tabs--left{
    width: 20%;
  }
  .el-tabs__item{
    height: 5rem;
    line-height: 5rem;
    width: 15%;
    font-size: 2.5rem;
    border-right: none;
  }
.man-box{
  width: 100%;
  height: 13rem;
  display: flex;
  margin-top: 1rem;
  float: right;
}
.man-box1{
  flex: 2;
}
.man-box2{
  flex: 3;
  padding: 1rem;
}
.man-img{
  width: 100%;
  height: 13rem;
  border-radius: 0.5rem;
}
.man-title{
  font-weight: bold;
  font-size: 2rem;
}
.man-brief {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: rgb(155,155,155);
    font-size: 2rem;
    margin-top: 1rem;
  }
  .novel-author{
    color: rgb(155,155,155);
    margin-top: 1.5rem;
     font-size: 1.7rem;
  }

</style>
