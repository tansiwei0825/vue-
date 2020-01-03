import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home'
import Cate from '../pages/cate'
import Book from '../pages/book'
import Find from '../pages/find'
import My from '../pages/my'
import Search from '../components/search'
import Noveldetail from '../components/noveldetail'
import Mulu from '../components/mulu'
import Contents from '../components/contents'
import Bookhistory from '../components/bookhistory'
import Man from '../components/man'
import Woman from '../components/woman'
import Mylogin from '../components/mylogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cate',
      name: 'cate',
      component: Cate,
      meta: {
          login_require: true
        },
      children:[
        {path:'/',redirect:'man'},
        {path:'man',component:Man},
        {path:'woman',component:Woman}
      ]
    },
    {
      path: '/book',
      name: 'book',
      component: Book,
      beforeEnter:(to,from,next)=>{
        alert('非登录状态')
        next('/my')
      }
    },
    {
      path: '/find',
      name: 'find',
      component: Find,
      meta: {
          login_require: false
        },
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    // {
    //   path: '/noveldetail/:id',
    //   name: 'noveldetail',
    //   component: Noveldetail
    // },
    {
      path: '/noveldetail/',
      name: 'noveldetail',
      component: Noveldetail
    },
    {
      path: '/mulu',
      name: 'mulu',
      component: Mulu
    },
    {
      path: '/contents',
      name: 'contents',
      component: Contents
    },
    {
      path: '/bookhistory',
      name: 'bookhistory',
      component: Bookhistory
    },
    {
      path: '/mylogin',
      name: 'mylogin',
      component: Mylogin
    },
  ]
})
