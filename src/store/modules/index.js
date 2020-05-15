import Vue from 'vue'
import Vuex from 'vuex'
import a from './a.js'
import b from './b.js' 
//must call Vue.use(Vuex) before creating a store instance
//必须在创建了store实例前调用Vue.use(Vuex)
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        a,
        b
    }
})