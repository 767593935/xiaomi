import Vue from 'vue';
// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// 引入路由组建
import router from "./router"
import store from './store'
// 引入表单验证的插件
import './vee-validate'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
});
