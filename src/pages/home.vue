<template>

  <div>
    <Titles></Titles>
  </div>

</template>

<script>
  import Titles from '../components/titles.vue'
  export default {
    name: "home",
    components: {
      Titles
    },
    mounted(){
      // var dd = new Date();
      //   var y = dd.getFullYear();
      //   var m = dd.getMonth() + 1;
      //   var d = dd.getDate();
      //   var data = y + " " + m + " " + d
      //   console.log(data)
      //   if (this.judgetime(data)) == 0) {
      //   console.log('日期为今天')
      // }
    },
    created() {
      var dd = new Date();
        var y = dd.getFullYear();
        var m = dd.getMonth() + 1;
        var d = dd.getDate();
        // var data =y+'m'+d
        // console.log(data)
      //   if (this.judgetime(data))==0){
      //   console.log('日期为今天')
      // }
     // console.log(this.judgetime(data))
  },
  methods: {
    // judgetime(data){
    //       var date = data.toString();
    //       var year = date.substring(0, 4);
    //       var month = date.substring(4, 6);
    //       var day = date.substring(6, 8);
    //       var d1 = new Date(year + '/' + month + '/' + day);
    //       var dd = new Date();
    //       var y = dd.getFullYear();
    //       var m = dd.getMonth() + 1;
    //       var d = dd.getDate();
    //       var d2 = new Date(y + '/' + m + '/' + d);
    //       var iday = parseInt(d2 - d1) / 1000 / 60 / 60 / 24;
    //       return iday;
    //     }
  }
  }
</script>

<style>
</style>
