import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from "./router"
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store"
import "./vee-validate"
import TempFooter from './components/foot/TempFooter'
import TempHeader from './components/header/TempHeader'
// 引入图片懒加载的插件
import VueLazyload from 'vue-lazyload'
// 引入图片
import loading from './common/images/loading.png'
// collapse 展开折叠
import 'element-ui/lib/theme-chalk/base.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
Vue.component(CollapseTransition.name, CollapseTransition)
//全局注册
Vue.component(TempFooter.name, TempFooter)
Vue.component(TempHeader.name, TempHeader)
Vue.use(ElementUI);
// 声明使用懒加载的插件
Vue.use(VueLazyload, {
  loading
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store
})