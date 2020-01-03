<template>
  <div class="itemwrap" @click="show()">
    <slot name="defaultimg"  v-if="!bol"></slot>
    <slot name="activeimg" v-if="bol"></slot>
    <p :class="{active:bol}">{{text}}</p>
  </div>
</template>

<script>
  export default{
    name:"item",
    props:['text','mark','cell'],
    methods:{
      show(){
        this.$emit('fun',this.mark)
         this.$router.push('/'+this.mark)
      }
    },
    computed:{
      "bol":function(){
        if(this.mark==this.cell){
          return true
        }else{
           return false
        }
      }
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .itemwrap{
    width: 20%;
    float: left;
    text-align: center;

  }
  .itemwrap img{
    width: 2.5rem;
    margin-top: 0.5rem;
  }
  .active{
    color: yellow;
  }
</style>
