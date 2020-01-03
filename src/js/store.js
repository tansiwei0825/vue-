import Vuex from "vuex"
import Vue from "vue"
import axios from 'axios'
import storage from 'good-storage'
Vue.use(Vuex)
 const state={
      arr1:[],
      arr2:[],
      arr3:[],
      pages:'',
      pages2:0,
      tops:0,
      books:'',
      bookindex:'',
      novelname:'',
      picture:''
 }
 const getters={
    getarr1(state){
      return state.arr1[0]
    },
    getarr2(state){
      return state.arr2
    },
    getarr3(state){
      return state.arr3
    },
    getpages(state){
      return state.pages
    },
    getpages2(state){
      return state.pages2
    },
    gettops(state){
      return state.tops
    },
    getbooks(state){
      return state.books
    },
    getbookindex(state){
      return state.bookindex
    },
    getname(state){
       return state.novelname
    },
    getpicture(state){
       return state.picture
    }
 }
 const actions={
    search1({commit},val){
      commit('search1',val)
    },
    dodel({commit}){
      commit('dodel')
    },
    readbook({commit},index){
       commit('readbook',index)
    },
    back2({commit}){
       commit('back2')
    },
    getposition({commit},position){
       commit('getposition',position)
    },
    getposition2({commit}){
       commit('getposition2')
    },
    getbookid({commit},id){
      commit('getbookid',id)
    },
    getindex({commit},index){
      commit('getindex',index)
    },
    next({commit}){
       commit('next')
    },
    prev({commit}){
       commit('prev')
    },
    about({commit},name){
       commit('about',name)
    },
    gethistory({commit},pic){
       commit('gethistory',pic)
    }
 }
 const mutations={
    search1(state,val){
      if(storage.session.get('name')){
        var demo=JSON.parse(storage.session.get('name'))
       state.arr1=state.arr1.concat(demo)
       console.log(state.arr1)
        state.arr1.unshift(val)
        console.log(state.arr1)
       for(var i=0;i<state.arr1.length;i++){
         for(var j=i+1;j<state.arr1.length;j++){
           if(state.arr1[i]==state.arr1[j]){
             state.arr1.splice(j,1)
             j--
           }
         }
       }
        if(state.arr1.length>6){
          state.arr1.pop()
        }
        storage.session.set('name',JSON.stringify(state.arr1))
      }else{
        state.arr1.unshift(val)
        console.log(state.arr1)
         storage.session.set('name',JSON.stringify(state.arr1))
      }
      // state.arr1.unshift(val)
      // console.log(state.arr1)
      //  storage.session.set('name',JSON.stringify(state.arr1))
    },
    dodel(state){
     var a=""
     state.arr1.unshift(a)
     console.log(state.arr1)
    },
    readbook(state,index){
      console.log(index)
        state.pages=index
    },
    back2(state){
        state.pages=0
        state.bookindex=0
    },
    getposition(state,position){
      console.log(position)
      state.tops=position
    },
    getposition2(state){
      state.tops=0
    },
    getbookid(state,id){
      state.books=id
      console.log(state.books)
    },
    getindex(state,index){
      state.bookindex=index
      console.log(state.bookindex)
    },
    next(state){
      state.bookindex++
       state.tops= state.tops+45
       console.log(state.bookindex)
    },
    prev(state){
      state.bookindex--
      state.tops= state.tops-45
       console.log(state.bookindex)
    },
    about(state,name){
      // storage.set(name,state.bookindex)
      // console.log(storage.get(name))
      state.novelname=name
    },
    gethistory(state,pic){
      state.picture=pic
    }
 }

 const store=new Vuex.Store({
  state,getters,actions,mutations
 })

 export default store
