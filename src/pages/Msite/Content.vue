<template>
  <div>
    <div class="contentContainer">
      <div class="banner">
        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8bdd93c2aad57ede093b09d40000a48.jpg?thumb=1&w=1471&h=144&f=webp&q=90" alt />
      </div>
      <h2 class="title">手机</h2>
      <div class="more">
        <img
          class="left"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=281&h=737&f=webp&q=90"
          alt
        />
        <ul class="wraper">
          <li
            class="des_item"
            v-for="(item,index) in phone"
            :key="index"
            @click="goto('phone',item.id)"
          >
            <img :src="item.phoneImg" alt />
            <h2 class="title">{{item.name}}</h2>
            <p class="des">{{item.minDesc}}</p>
            <p class="price">
              <span class="now">{{item.price}}元</span>
              <span class="old" v-show="item.oldPrice">{{item.oldPrice}}元</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="contentContainer">
      <div class="banner">
        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e63ab43e7c32296f18f34c8efb41534.jpg?thumb=1&w=1471&h=144&f=webp&q=90" alt />
      </div>
      <h2 class="title">家电</h2>
      <div class="more">
        <ul class="wraper twoWrapper">
          <li
            class="des_item two_des_item"
            v-for="(item,index) in household"
            :key="index"
            @click="goto('household',item.id)"
          >
            <img :src="item.householdImg" alt />
            <h2 class="title" >{{item.name}}</h2>
            <p class="des">{{item.minDesc}}</p>
            <p class="price">
              <span class="now" v-show="item.price">{{item.price}}元</span>
              <span class="old" v-show="item.oldPrice">{{item.oldPrice}}元</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import PubSub from 'pubsub-js'
export default {
  name: 'Content',
  mounted() {
    this.$store.dispatch('getPhone'),
    this.$store.dispatch('getHousehold')
  },
  computed: {
    ...mapState({
      phone: state => state.msite.phone,
      household: state => state.msite.household
    })
  },
  methods: {
    goto(identify, index) {
      localStorage.setItem('identify', identify)
      localStorage.setItem('index', index)
      this.$router.push('/category')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.contentContainer
  width 1226px
  margin 40px auto
  background-color #f5f5f5
  .banner
    width 100%
    height 120px
    img
      width 100%
      height 120px
  .title
    width 100%
    height 58px
    font-size 22px
    line-height 58px
    text-align left
  .more
    width 1226px
    height 614px
    display flex
    .left
      width 234px
      height 614px
      margin-right 8px
    .wraper
      width 978px
      height 614px
      display flex
      align-items center
      justify-content space-between
      flex-wrap wrap
      &.twoWrapper
        width 1226px
      .des_item
        background-color #fff
        width 22%
        height 280px
        display flex
        flex-direction column
        align-items center
        margin-bottom 14px
        z-index 40
        margin 1px
        margin-bottom 10px
        &.two_des_item
          width 17%
        &:hover
          transform scale(1.05)
        img
          width 160px
          height 160px
          vertical-align middle
        .title
          color #3c3c3c
          text-align center
          font-size 14px
        .des
          color #b0b0b0
          text-align center
          margin 0px 10px 10px
        .price
          color #FF6700
          font-size 14px
          margin 0 10px 10px
          text-align center
          .now
            color #f87355
            font-size 14px
          .old
            color #f87355
            margin-left 10px
            font-size 12px
            color #94999c
            text-decoration line-through
</style>