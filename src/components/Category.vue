<template>
  <div>
    <TempHeader />
    <div class="Category_Container">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li
            v-for="(item,index) in goods.imgs"
            :key="index"
            class="swiper-slide"
          >
            <img
              :src="item"
              alt=""
            >
          </li>
        </ul>
        <div class="swiper-pagination"></div>
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-prev"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
      <div class="right_content">
        <div class="category_title">
          <h1 class="title">{{goods.name}}</h1>
          <p class="detail">{{goods.desc}}</p>
          <p class="detail1">{{goods.category}}</p>
          <p class="category_price">
            <span class="now">{{goods.price}}</span>
            <span class="old">{{goods.oldPrice}}</span>
          </p>
        </div>

        <div class="category_detail">
          <div class="detail_top">
            <p class="title">{{goods.name}}</p>
            <p class="category_price">
              <span class="now">{{goods.price}}</span>
              <span class="old">{{goods.oldPrice}}</span>
            </p>

          </div>
          <p class="goodPrice">秒杀价:{{goods.price}}</p>
        </div>
        <div class="category_car">
          <el-button
            class="addCar"
            @click="gotoCarts"
          >立即抢购</el-button>
          <span
            class="love"
            :class="islike?'like':''"
            @click="islike=!islike"
          >
            <span class="iconfont icon-xin1">喜欢</span>
          </span>
        </div>
        <div class="category_footer">
          <span
            v-for="(item,index) in goods.supports"
            :key="index"
            class="iconfont icon-duihaocheckmark17"
          >{{item.description}}</span>
        </div>

      </div>

    </div>
    <div class="explain">
      <div class="inner">
        <p>价格说明</p>
        <img
          src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a482afa34053b1b32ece1023475af7fb.jpeg"
          alt=""
        >
      </div>
    </div>
    <TempFooter />
  </div>
</template>


<script>
import axios from "axios";
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import PubSub from "pubsub-js";

export default {
  name: "Category",
  data() {
    return {
      goods: {},
      islike: false
    };
  },

  async mounted() {
    await this.$store.dispatch("getHousehold");
    await this.$store.dispatch("getPhone");
    await this.$store.dispatch("getRecommend");
    const identify = localStorage.getItem("identify");
    const id = localStorage.getItem("index");
    this.goods = this.$store.state.msite[identify][id];
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    });
  },
  computed: {},
  methods: {
    async gotoCarts() {
      await this.$store.dispatch("saveCommodity", this.goods);
      console.log(this.goods);
      this.$store.dispatch("addGood", { isAdd: true, good: this.goods });
      this.$router.push("/cartcontrol");
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.Category_Container
  height 100%
  display flex
  justify-content center
  padding 20px
  background-color #fff
  .swiper-wrapper
    flex 2
    position relative
    width 600px
    img
      width 380px
      height 400px
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      text-align center
  .right_content
    flex 1
    padding-top 30px
    .category_title
      border-bottom 1px solid #fafafa
      padding-top 50px
      .title
        margin-top 59px
        line-height 34px
        margin-bottom 8px
        font-size 18px
        font-weight 700
      .detail
        font-size 12px
        color #aaa
        height 30px
        width 600px
      .detail1
        font-size 12px
        margin 30px 0
        color #f87355
      .category_price
        display flex
        margin-bottom 10px
        .now
          color #f87355
          font-size 14px
        .old
          color #f87355
          margin-left 10px
          font-size 12px
          color #94999c
          text-decoration line-through
          // padding-top 8px
    .category_car
      display flex
      margin-top 30px
      .addCar
        width 200px
        height 50px
        // border-radius 10px
        background-color #FF6700
        color #fff
      .love
        display inline-block
        width 137px
        height 50px
        line-height 50px
        color white
        background-color #b0b0b0
        text-align center
        margin-left 10px
        &.like
          background-color red
    .category_detail
      margin-top 10px
      background-color #f9f9f9
      height 100px
      width 600px
      .detail_top
        display flex
        justify-content space-between
        padding 30px 30px 20px
        .title
          font-size 15px
          color #3c3c3c
          text-align center
        .category_price
          color #3c3c3c
          text-align center
          margin-right 20px
          .now
            color #f87355
            font-size 12px
            margin-left 10px
          .old
            color #f87355
            font-size 12px
            margin-left 10px
            color #94999c
            text-decoration line-through
      .goodPrice
        color #FC6402
        margin-left 30px
    .category_footer
      margin-top 60px
      width 500px
      font-size 12px
      display flex
      align-items center
      justify-content space-around
      .iconfont
        font-size 12px
        color #999
.explain
  background-color #F5F5F5
  width 100%
  height 300px
  position relative
  .inner
    width 1226px
    position absolute
    top 50%
    left 50%
    transform translateY(-50%) translatex(-50%)
    p
      font-size 20px
      padding 0 0 15px 0
</style>