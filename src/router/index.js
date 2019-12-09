// 引入vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由 routes
import routes from './routes.js'
// 声明使用插件
Vue.use(VueRouter)
// 暴露路由器
export default new VueRouter({
  mode: 'history',
  routes
})
