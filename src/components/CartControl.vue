<template>
<div>
  <TempHeader/>
  <div class="buyContainer" v-if="goodList">
    <div class="buy_header">
      <div class="good_left">
        <img
          src="../components/images/success.png"
          alt
        />
        <div class="good-success">
          <p class="addCar">已成功加入购物车!</p>
          <p class="addDes">{{commodity.name}}</p>
        </div>
      </div>
      <div class="good_right">
        <el-button
          type="primary"
          class="back"
          @click="$router.back()"
        >
          返回上一级
        </el-button>
        <el-button
          class="cart"
          type="success"
          @click="$router.push('/paylogin')"
        >
          去购物车
        </el-button>
      </div>
    </div>
    <h2 class="title">买购物车中的商品的人还买了</h2>
    <div class="more">
      <ul class="wraper">
        <li
          class="des_item"
          v-for="(item,index) in goodList"
          :key="index"
        >
          <a href="###">
            <img
              :src="item.image"
              alt
            />
            <p class="des">{{item.title}}</p>
            <p class="price">{{item.price}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <TempFooter/>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { reqSearch } from "../api"
import Swiper from "swiper"
import "swiper/css/swiper.css"
export default {
  name: "CartControl",
  data(){
    return {
      goodList:[]
    }
  },

  async mounted() {
    const result = await reqSearch(" ");
    const newResult=[]
    if (result.code === 0) {
      for (var i = 0; i < 10; i++) {
        const start = Math.ceil(Math.random() * 76);
        newResult.push(result.datalist[start]);
      }
      this.goodList=newResult
    }
  },
  computed:{
    ...mapState({
      commodity: state => state.shop.commodity
    })
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.buyContainer
  width 1226px
  margin 0 auto
  background-color #f5f5f5
  padding-top 30px
  .buy_header
    width 100%
    height 97px
    padding-top 20px
    display flex
    justify-content space-between
    border-bottom 1px solid #a6a2a2
    .good_left
      height 64px
      display flex
      // text-align center
      .iconfont
        font-size 64px
        width 64px
        height 64px
        display inline-block
      .good-success
        color #3c3c3c
        margin 0 0 0 30px
        padding-top 25px
        .addCar
          font-size 24px
          color #424242
          margin-bottom 15px
        .addDes
          font-size 12px
          color #757575
    .good_right
      height 64px
      display flex
      text-align center
      padding-top 20px
      .back
        display inline-block
        width 180px
        height 40px
        border-radius 10px
        margin-right 10px
      .cart
        display inline-block
        width 180px
        height 40px
        border-radius 10px
        margin-right 10px
      .on
        color #757575
        font-size 14px
        width 182px
        height 40px
        border 1px solid #3c3c3c
        text-align center
        line-height 40px
        background-color #e53605
        margin-right 20px
        border-radius 10px
  .title
    width 100%
    height 58px
    font-size 30px
    line-height 58px
    text-align center
    margin 0 0 20px
  .more
    padding 10px
    width 1226px
    height 614px
    .wraper
      width 100%
      display flex
      flex-wrap wrap
      .des_item
        width 18%
        height 248px
        background-color #fff
        display flex
        align-items center
        justify-content space-around
        margin 10px
        img
          width 140px
          height 140px
        .des
          font-size 14px
          color #3c3c3c
          text-align center
          line-height 14px
          height 14px
        .price
          color #cb1919
          font-size 14px
          margin-bottom 10px
          text-align center
          margin-top 10px
</style>