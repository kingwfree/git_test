import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    increment(state){
      //console.log("mutations ",state)
      state.count++;
    },
    decrement(state){
      state.count--;
    }
  },
  getters:{
    money:state=>state.count*1000
  },
  actions: {
    increment(obj){
      const {commit} = obj
      //console.log("actions ",obj)
      commit("increment")
    },
    decrement({commit}){
      commit("decrement")
    }
  }
})
