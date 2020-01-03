// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/swiper/css/swiper.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './js/rem.js'
import './assets/font/iconfont.css'
Vue.use(MintUI)
import api from './js/api.js'
Vue.prototype.$ajax=api
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(function (item) {
//     return item.meta.login_require
//   })) {
//     alert('跳转我的')
//     next('/my')
//   } else
//     next()
// })
// router.beforeEach((to,from,next)=>{
//   if(to.path == '/home' || to.path == '/my'){
//     next();
//   }else{
//     alert('您还没有登录，请先登录');
//     next('/my');
//   }
// })


router.beforeEach((to,from,next)=>{
  if(to.path=='/home' ||  to.path=='/my'){
    next()
  }else{
    alert('没有登录')
    next({name:'my'})
  }
})
// router.afterEach((to,from)=>{
//   alert("after each");
//   console.log(to,from)
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
