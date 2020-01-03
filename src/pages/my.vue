<template>
 <div>
 <Login></Login>

 <h1 ref="hello">{{ value }}</h1>
 <button @click="get">点击</button>
 </div>
</template>

<script>
  import Login from '../components/login.vue'
  export default{
    name:"my",
    components:{
      Login
    },
    data(){
      return{
        msg:"xiaohu",
        value:'hello'
      }
    },
    mounted(){

    },
     beforeRouteEnter:(to,from,next)=>{
            next(vm=>{
                console.log("hello" + vm.msg);
            })
        },
//          beforeRouteUpdate(to, from, next) {
//             //在当前路由改变，但是该组件被复用时调用
//             //对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
//             // 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
//             // 可以访问组件实例 `this`
//             console.log(this, 'beforeRouteUpdate'); //当前组件实例
//             console.log(to, '组件独享守卫beforeRouteUpdate第一个参数');
//             console.log(from, '组件独享守beforeRouteUpdate卫第二个参数');
//             console.log(next, '组件独享守beforeRouteUpdate卫第三个参数');
//             next();
// },
        beforeRouteLeave:(to,from,next)=>{
                if(confirm("确定离开此页面吗？") == true){
                    next();
                }else{
                    next(false);
                }
            },
    methods:{
       get() {
              this.value = '你好啊';
              console.log(this.$refs['hello'].innerText);
              this.$nextTick(() => {
                console.log(this.$refs['hello'].innerText);
              });
            }
    }
  }
</script>

<style>
</style>
