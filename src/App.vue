<template>
  <div class="app">
    <!--路由视图:显示路由组件的-->
    <router-view />
    <!--底部组件-->
   <Category />
  </div>
</template>
<script>
// 引入底部组件
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category
  },
 



}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%


</style>
