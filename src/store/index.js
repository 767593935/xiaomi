// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入4个组件
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getter'
// 引入模块
import msite from './modules/msite.js'
import shops from './modules/shops.js'
import user from './modules/user.js'
// 使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    msite,
    shops,
    user
  }
})