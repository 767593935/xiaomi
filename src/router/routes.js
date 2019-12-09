
// 引入登录组件
import Login from '../pages/Login/Login.vue'


// 并暴露路由的数组配置
export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  }

]
