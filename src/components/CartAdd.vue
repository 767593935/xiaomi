
<template>
  <div class="cartcontrol">
    <transition name="fade">
      <div class="icon-remove_circle_outline"
           v-show="good.count>0"
           @click.stop="addGood(false)">-</div>
    </transition>
    <div class="cart-count"
         v-show="good.count>0">{{good.count?good.count:1}}</div>
    <div class="icon-add_circle"
         @click.stop="addGood(true)">+</div>
  </div>
  <!-- @change="addGood" -->
  <!-- <el-input-number v-model="good.count"
                   :min="1"
                   :max="10"
                   label=""
                   @change="addGood"></el-input-number> -->
</template>
<script>
export default {
  name: 'CartAdd',
  // data () {
  //   return {
  //     oldCount: 1,
  //     isAdd: false
  //   }
  // },
  props: {
    good: {}
  },
  methods: {
    // 增加或者减少食物数量的方法---回调
    addGood (isAdd) {
      // 不能直接操作shopList对象----->去vuex中,修改vuex中的shopList对象的数据----mutations直接修改---actions间接修改
      this.$store.dispatch('addGood', { isAdd, good: this.good })
      console.log(this.good)
      console.log('执行')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/mixins.styl'
.cartcontrol
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
  .icon-remove_circle_outline
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
    &.fade-enter-active, &.fade-leave-active
      transition all 0.5s
    &.fade-enter, &.fade-leave-to
      opacity 0
      transform translateX(15px) rotate(180deg)
  .cart-count
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147, 153, 159)
  .icon-add_circle
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
</style>


