
import Vue from 'vue'
import App from './App'
// 注册成全局组件(在任何组件中可以直接使用,可以叫公共组件)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  
})
