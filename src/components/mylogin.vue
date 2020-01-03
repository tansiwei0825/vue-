<template>
  <div>
    <div class="mylogin">
        <p class="wel">Welcome</p>
        <div class="username">
          <input type="text" class="user-ipt" placeholder="用户名" v-model="username">
        </div>
        <div class="pwd">
          <input type="text" class="pwd-ipt" placeholder="密码" v-model="pwd">
        </div>
        <div class="btn">
            <p class="btn-p">立即登录</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"mylogin",
    data(){
      return{
        username:'',
        pwd:''
      }
    }
  }
</script>

<style>
  .mylogin{
    width: 100%;
   height: 56rem;
    background: rgb(90,179,187);
    text-align: center;
    padding-top: 8rem;
  }
  .wel{
    font-size: 9rem;
    color: white;
  }
.username{
  width: 90%;
  height: 4rem;
  border: 1px solid white;

  border-radius: 2rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
}
.user-ipt{
  float: left;
  margin-left: 2rem;
  height: 4rem;
  font-size: 3rem;
  border: none;
  background: transparent;
  outline: none;
  color: white;
}
.pwd{
  width: 90%;
  height: 4rem;
  border: 1px solid white;
  margin: 1rem auto;
  border-radius: 2rem;
}
.pwd-ipt{
  float: left;
  margin-left: 2rem;
  height: 4rem;
  font-size: 3rem;
  border: none;
  background: transparent;
  outline: none;
  color: white;
}
input::-webkit-input-placeholder {
color: white;
}
.btn{
 width: 90%;
 height: 4rem;
 border: 1px solid white;
 margin: 1rem auto;
 border-radius: 2rem;
 line-height: 4rem;
}
.btn-p{
  font-size: 3rem;
  color: white;
}
</style>
