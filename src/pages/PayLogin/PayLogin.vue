<template>
  <div class="outer">
    <!-- 头部 -->
    <div class=header>
      <div class="com-cart">
        <div class="header-log">
          <a class="logo ar"
             href=""></a>
        </div>
        <h2>我的购物车</h2>
        <span class="title-cart">温馨提示：产品是否购买成功，以最终下单为准。去请尽快结算</span>
        <div class="login-cart" v-if="!user.name">
          <router-link class="pref"
            to="/login">登录</router-link>
          <span calss="sep">| </span>
          <router-link class="pref"
            to="/register">注册</router-link>
        </div>
        <div class="login-cart" v-else>
          <span>{{user.name}}</span>
        </div>
      </div>
    </div>
    <!-- 主页 -->
    <div class="cart-main">
      <div class="top">
        <div class="topLeft">
          <el-checkbox type='checkbox'
                       v-model="checkedAll">全选</el-checkbox>
        </div>
        <div class="topRignt">
          <div class="Trade-name">商品名称</div>
          <div class="Price">单价</div>
          <div class="Number">数量 </div>
          <div class="Subtotal">小计</div>
          <div class="operation">操作</div>
        </div>
      </div>
      <ul class="cart">
        <li class="titleCart"
            v-for="(good,index) in cartGoods"
            :key="index">
          <el-checkbox type='checkbox'
                       class="titleCart-check"
                       v-model='good.isChecked'
                       @change='handleCheckSingle(good.isChecked)'></el-checkbox>
          <div class="title-name"> {{good.name}} </div>
          <div class="title-price">{{parseInt(good.price)}}元</div>
          <div class="title-number">
            <CardAdd :good='good' />
          </div>
          <div class="title-subtotal">{{parseInt(good.price) * good.count}}元</div>
          <div class="el-icon-circle-close"
               @click="remove(good)"></div>
        </li>
        <!-- </el-checkbox-group> -->
      </ul>
      <div class="item-footer">
        <div class="footLeft">
          <div class="gshop"><router-link to="/msite">继续购物</router-link></div>
          <div class="shopNumber">共{{cartGoods.length}}件商品，以选择{{singleNumber}}件 </div>
        </div>
        <div class="Settlement">
          <button @click="toPay">去结算</button>
        </div>
        <div class="shopPrice">合计：{{finalPrice}}元</div>

      </div>
    </div>
    <TempFooter/>
  </div>

</template>
<script>
import { mapState, mapGetters } from 'vuex'
import CardAdd from '../../components/CartAdd'
export default {
  data () {
    return {
      isIndeterminate: true
    }
  },
  mounted(){
   this.$store.dispatch('autoLogin')
  },
  computed: {
    ...mapState({
      cartGoods: state => state.shop.cartGoods,
      user:state=>state.user.user
    }),
    finalPrice () {
      let finalPrice = 0
      // this.cartGoods.every((good, index) => {
      //   finalPrice += parseInt(good.price) * good.count
      // })
      for (let i = 0; i < this.cartGoods.length; i++) {
        if (this.cartGoods[i].isChecked) {
          finalPrice += parseInt(this.cartGoods[i].price) * this.cartGoods[i].count
        }
      }
      return finalPrice
    },
    checkedAll: {
      get () {
        let Blooen
        Blooen = this.cartGoods.every((item, index) => {
          return item.isChecked
        })
        if (this.cartGoods.length === 0) {
          Blooen = false
        }
        return Blooen
      },
      set (val) {
        this.cartGoods.map((item, index) => {
          return item.isChecked = val
        })
      }
      // get () {
      //   let Blooen = this.cartGoods.map((item, index) => {
      //     return item.isChecked
      //   })
      //   // if (this.cartGoods.length === 0) {
      //   //   Blooen = false
      //   // }
      //   return Blooen
      // },
      // set (val) {
      //   this.cartGoods.map((item, index) => {
      //     return item.isChecked = val
      //   })
      // }
    },
    singleNumber () {
      let Number = 0
      for (let i = 0; i < this.cartGoods.length; i++) {
        if (this.cartGoods[i].isChecked === true) {
          Number += 1
        }
      }
      return Number
    }
  },
  methods: {
    remove (good) {
      this.$store.dispatch('removeGood', { good })
    },
    //点击单个按钮
    handleCheckSingle (isChecked) {
      // const as = document.querySelectorAll(".cart>.titleCart input ")
      this.isChecked = !this.isChecked

    },
    toPay(){
      if(!this.user.name){
        this.$router.push('/login')
      }
    }
  },
  components: {
    CardAdd
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.el-checkbox__input
  margin-left 20px
.outer
  width 100%
  height 100%
  color black
  .header
    width 100%
    margin 0 auto
    height 102px
    background-color #fff
    color #b0b0b0
    border-bottom 1px solid #ff6701
    margin-bottom 20px
    .com-cart
      width 1226px
      margin 0 auto
      .logo
        float left
        margin-top 26px
        width 93px
        height 48px
        background-color #ff6700
        background url('./imgs/logo.png') no-repeat 50% 50%
      h2
        height 48px
        text-align center
        line-height 48px
        font-size 28px
        float left
        color #424242
        margin-top 26px
      .title-cart
        color #757575
        font-size 12px
        text-align center
        float left
        margin 50px 0 0 15px
      .login-cart
        color #b0b0b0
        float right
        height 40px
        line-height 40px
        margin-top 40px
        .pref
          padding 0 5px
        .sep
          font-size 12px
          line-height 40px
          color #e0e0e0
  .cart-main
    // padding 20px
    width 1226px
    background-color #fff
    margin 0 auto 50px 
    display flex
    flex-direction column
    border 1px solid #dddddd
    .top
      height 70ox
      // padding 0 20px
      border-bottom 1px solid #dddddd
      .topLeft
        float left
        margin-right 45px
        line-height 70px
      .topRignt
        float left
        display flex
        flex-direction row
        .Trade-name
          font-size 14px
          color #424242
          line-height 70px
          text-align center
          width 500px
        .Price
          font-size 14px
          color #424242
          line-height 70px
          text-align center
          width 140px
          padding-right 18px
        .Number
          font-size 14px
          color #424242
          line-height 70px
          text-align center
          width 150px
        .Subtotal
          font-size 14px
          color #424242
          line-height 70px
          text-align center
          width 120px
          padding-right 81px
        .operation
          font-size 14px
          color #424242
          line-height 70px
          text-align center
          width 80px
    .cart
      float left
      display flex
      flex-direction column
      line-height 46px
      text-align center
      // height 80px
      width 100%
      clearFix()
      // align-content center
      .titleCart
        margin-top 10px
      .titleCart-check
        float left
        // margin-top 33px
        text-align left
        width 5%
      .title-name
        // flex 5
        width 45%
        float left
        font-size 14px
        color #333
      .title-price
        float left
        width 13%
        font-size 14px
        color #424242
      .title-number
        width 15%
        float left
        font-size 14px
        color #424242
      .title-subtotal
        float left
        font-size 14px
        color #424242
        width 5%
      .el-icon-circle-close
        float right
        margin-top 15px
        font-size 16px
        text-align right
        color #424242
        margin-right 60px
        // flex 1
        // width 17%
  .item-footer
    height 50px
    background #fff
    margin-top 20px
    .footLeft
      width 283px
      height 50px
      float left
      .gshop
        float left
        margin-left 32px
        font-size 14px
        color #757575
        line-height 50px
        margin-right 16px
      .shopNumber
        color #757575
        line-height 50px
    .Settlement
      float right
      margin-left 50px
      line-height 50px
      button
        width 150px
        height 50px
        background #ff6700
    .shopPrice
      font-size 14px
      float right
      line-height 50px
</style>
