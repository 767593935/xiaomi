// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入user
import user from './modules/user.js'
// 使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})