
// 引入登录组件
import Login from '../pages/Login/Login.vue'
import Msite from '../pages/Msite/Msite.vue'
import TopHeader from '../pages/TopHeader/TopHeader.vue'

// 并暴露路由的数组配置
export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: "/msite",
    component: Msite
  },
  {
    path: "/header",
    component: TopHeader
  },
  {
    path: '/',
    redirect: '/header'
  }

]
