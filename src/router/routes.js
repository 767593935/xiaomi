import Category from "../components/Category"
import Register from "../pages/Register/Register.vue"
import RegisterSend from "../pages/Register/RegisterSend.vue"
import Password from "../pages/Register/Password.vue"
import Login from "../pages/Login/Login"
import Msite from "../pages/Msite/Msite.vue"
import CartControl from "../components/CartControl"
import Search from "../pages/Search/Search"
import PayLogin from "../pages/PayLogin/PayLogin"
// import Miste from "../components/miste/Miste"
export default[
  {
    path:"/msite",
    component:Msite
  },
  {
    path:"/paylogin",
    component:PayLogin
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/register",
    component:Register
  },
  {
    path:'/cartcontrol',
    component:CartControl
  },
 
  {
    path:"/registerSend",
    component:RegisterSend
  },
  {
    path:"/password",
    component:Password
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/search",
    component:Search
  },
  {
    path:"/",
    redirect:"/msite"
  }
]