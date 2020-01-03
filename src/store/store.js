import Vuex from "vuex"
import Vue from "vue"
import axios from 'axios'
Vue.use(Vuex)
 const state={
      arr1:[]
 }
 const getters={
    getarr1(state){
      return state.arr1
    }
 }
 const actions={
    search({commit},val){
      commit('search',val)
    }
 }
 const mutations={
    search(state,val){
      state.arr1.push(val)
      console.log(arr1)
    }
 }

 const store=new Vuex.Store({
  state,getters,actions,mutations
 })

 export default store
