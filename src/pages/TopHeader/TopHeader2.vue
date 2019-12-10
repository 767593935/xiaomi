<template>
  <div class="wrapper">
    <div class="beijin">
      <div id="site-topbar">
        <div class="shopCart"
             @click="show1 = !show1">
          <i class="iconfont icon-gouwuche"></i>
          <a href="javascript:;"
             class="gouwuche2">购物车</a>
          <span class="count">(0)</span>
          <div style="height: 100px; z-index:10000">
            <el-collapse-transition>
              <div v-show="show1">
                <div class="come">购物车中还没有商品，赶紧选购吧！</div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
        <div class="userInfo">
          <a href="javascript:;"
             class="login">登录</a>
          <a href="javascript:;"
             class="register">注册</a>
        </div>
      </div>
    </div>
    <div class="beijin2">
      <div class="top-header">
        <div class="container">
          <img src="./images/login.png"
               alt
               class="logo" />
          <div class="header-navs">
            <ul class="navs">
              <li class="nav"
                  @click="show2 = !show2"
                  v-for="(item,index) in navs"
                  :key="index">
                <a>{{item.name}}</a>
                <div style="height: 200px;">
                  <el-collapse-transition>
                    <div v-show="show2">
                      <ul class="phones">
                        <li class="phone"
                            v-for="(item2,index) in item.type"
                            :key="index">
                          <p class="title">{{item2.name}}</p>
                          <p class="price">2799元起</p>
                        </li>
                      </ul>
                    </div>
                  </el-collapse-transition>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
// 引入Swiper的样式文件
import 'swiper/css/swiper.css'
export default {
  data () {
    return {
      show1: true,
      show2: false,
      hotStatus: true,
      headerStatus: false,
      tids: '',
      currentPhones: this.xiaomi,
      hotItems: ['红米pro', '小米笔记本air'],
      //轮播图
      imgs: [
        {
          src:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad84d80e7fc5990162a387a6b103af01.jpeg?thumb=1&w=1379&h=518&f=webp&q=90'
        },
        {
          src:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e52c3e98602b90f198ec316dce253cba.jpg?thumb=1&w=1379&h=518&f=webp&q=90'
        },
        {
          src:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/05bc8af40fc9f9941808d253034c279d.jpg?thumb=1&w=1379&h=518&f=webp&q=90'
        },
        {
          src:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad84d80e7fc5990162a387a6b103af01.jpeg?thumb=1&w=1379&h=518&f=webp&q=90'
        },
        {
          src:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e3bb63711cc0e361e31617c11694894.jpg?w=2452&h=920'
        }
      ],
      //点击购物
      shopImgs: [
        {
          shopImg:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c5524bbd8d8e2d8b4fec3774915d2fb.jpg?w=632&h=340'
        },
        {
          shopImg:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/daae21ecb17e628f5255412f103c626f.jpg?w=632&h=340'
        },
        {
          shopImg:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340'
        }
      ],
      xiaomi: [
        {
          name: '小米Max',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/maxdingbu!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1299元起'
        },
        {
          name: '小米手机5',
          imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mi5!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1499元起'
        },
        {
          name: '小米手机4c',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mi4c!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1099元'
        }
      ],
      red: [
        {
          name: '红米pro',
          imgUrl:
            'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1499元起'
        },
        {
          name: '红米note3',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/hongmi3s!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '899元起'
        },
        {
          name: '红米手机3S',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/note3!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '699元起'
        },
        {
          name: '红米手机3',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hongmi3!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '699元起'
        },
        {
          name: '红米手机3X',
          imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/320-220!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '799元'
        }
      ],
      flats: [
        {
          name: '小米平板2 16GB',
          imgUrl:
            'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '999元'
        },
        {
          name: '小米平板2 64GB',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1299元'
        },
        {
          name: '小米平板2 64GB Windows版',
          imgUrl:
            'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64-win!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1299元'
        },
        {
          name: '小米笔记本Air 12.5',
          imgUrl:
            'http://c1.mifile.cn/f/i/g/2015/video/bijiben32012.5!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '3499元'
        },
        {
          name: '小米笔记本Air 13.3',
          imgUrl:
            'http://c1.mifile.cn/f/i/g/2015/cn-index/bijiben320!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '4999元'
        }
      ],
      tv: [
        {
          name: '小米电视3S 43英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3s/43/',
          price: '1499元'
        },
        {
          name: '小米电视3S 48英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3s48!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3s/48/',
          price: '1999元'
        },
        {
          name: '小米电视3 55英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv355!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3/55/',
          price: '3299元起'
        },
        {
          name: '小米电视3 60英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3/60/',
          price: '3499元'
        },
        {
          name: '小米电视3S 65英寸 曲面',
          imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-65!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '8999元'
        },
        {
          name: '小米电视3 70英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv70!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3/70/',
          price: '8999元'
        }
      ],
      box: [
        {
          name: '小米盒子mini版',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezimini.png',
          sourcePath: 'http://www.mi.com/hezimini/',
          price: '179元'
        },
        {
          name: '小米盒子3',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3.png',
          sourcePath: 'http://www.mi.com/hezi3/',
          price: '249元'
        },
        {
          name: '小米盒子3 增强版',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3s!160x110.jpg',
          sourcePath: 'http://www.mi.com/hezi3s/',
          price: '399元'
        },
        {
          name: '小米电视主机',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhuji!160x110.jpg',
          sourcePath: 'http://www.mi.com/tvzj/',
          price: '999元'
        },
        {
          name: '小米家庭音响 金属版',
          imgUrl:
            'http://c1.mifile.cn/f/i/g/2015/cn-index/jinshuban!160x110.jpg',
          sourcePath: 'http://item.mi.com/1160800073.html',
          price: '899元'
        },
        {
          name: '小米家庭音响 标准版',
          imgUrl:
            'http://c1.mifile.cn/f/i/g/2015/cn-index/putonban!160x110.jpg',
          sourcePath: 'http://item.mi.com/1160800074.html',
          price: '699元'
        }
      ],
      router: [
        {
          name: '全新小米路由器',
          imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3s/43/',
          price: '699元起'
        },
        {
          name: '小米路由器 3',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifi-3!160x110.jpg',
          sourcePath: 'http://www.mi.com/miwifi3/',
          price: '149元'
        },
        {
          name: '小米路由器 mini',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifimini!160x110.jpg',
          sourcePath: 'http://www.mi.com/miwifimini/',
          price: '119元'
        },
        {
          name: '小米路由器 3C',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3/60/',
          price: '99元'
        },
        {
          name: '小米路由器 青春版',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifilite!160x110.jpg',
          sourcePath: 'http://www.mi.com/miwifilite/',
          price: '69元'
        },
        {
          name: '小米WiFi放大器',
          imgUrl:
            'http://c1.mifile.cn/f/i/15/goods/nav/wifiExtension!160x110.jpg',
          sourcePath: 'http://item.mi.com/1153200003.html',
          price: '35元'
        }
      ],
      hardware: [
        {
          name: '九号平衡车',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/scooter!160x110.jpg',
          sourcePath: 'http://www.mi.com/scooter/',
          price: '1999元'
        },
        {
          name: '小米净水器',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/water2!160x110.jpg',
          sourcePath: 'http://www.mi.com/water/',
          price: '1299元起'
        },
        {
          name: '米家压力IH电饭煲',
          imgUrl:
            'http://c1.mifile.cn/f/i/g/2015/cn-index/dianfanbao!160x110.jpg',
          sourcePath: 'http://www.mi.com/dianfanbao/',
          price: '999元'
        },
        {
          name: '小米空气净化器 2',
          imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/air2!160x110.jpg',
          sourcePath: 'http://www.mi.com/air2/',
          price: '649元'
        },
        {
          name: '智能摄像机',
          imgUrl:
            'http://c1.mifile.cn/f/i/g/doodle/zhinengyingjian!160x110.jpg',
          sourcePath: 'http://list.mi.com/accessories/tag?id=shexiangji',
          price: '149元起'
        }
      ],
      navs: [
        { name: '小米手机', type: 'xiaomi' },
        { name: '红米', type: 'red' },
        { name: '平板 · 笔记本', type: 'flats' },
        { name: '电视', type: 'tv' },
        { name: '盒子 · 影音', type: 'box' },
        { name: '路由器', type: 'router' },
        { name: '智能硬件', type: 'hardware' },
        { name: '服务', sourceUrl: '//www.mi.com/service/' },
        { name: '社区', sourceUrl: 'http://www.xiaomi.cn' }
      ]
      /* 	results: [
				{name: '小米手机5', number: '11'},
				{name: '空气净化器2', number: '1'},
				{name: '活塞耳机', number: '4'},
				{name: '小米路由器', number: '8'},
				{name: '移动电源', number: '21'},
				{name: '运动相机', number: '3'},
				{name: '小米摄像机', number: '2'},
				{name: '小米体重秤', number: '1'},
				{name: '小米插线板', number: '13'},
				{name: '配件优惠套装', number: '32'}
			] */
    }
  },
  ready () { },
  methods: {
    shouldShow (isShouldShow) {
      if (!isShouldShow) {
        //this.$refs.rPhones.heigt = '200px'
        // alert(1)
      } else {
        // this.$refs.rPhones.heigt = 0
        // alert(2)
      }
      this.isShouldShow = !this.isShouldShow
    }
  },
  async mounted () {
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.wrapper
  background-color white
  .beijin
    width 100%
    background-color #333
    #site-topbar
      width 1226px
      margin 0 auto
      height 40px
      line-height 40px
      background-color #333
      clearFix()
      .userInfo
        color #b0b0b0
        float right
        .login
          font-size 14px
          &:hover
            color white
        .register
          margin 0 20px
          font-size 14px
          &:hover
            color white
      .shopCart
        width 120px
        height 40px
        text-align center
        background-color #424242
        float right
        font-size 14px
        color #b0b0b0
        .icon-gouwuche
          font-size 20px
        .gouwuche2
          margin 0 5px
          color #b0b0b0
        .come
          width 250px
          height 100px
          line-height 100px
          background-color pink
          margin 0px 0 0 -130px
          color black
          z-index 10000
        &:hover
          color #ff6700
          background-color white
          .gouwuche2
            color #ff6700
  .beijin2
    width 100%
    .top-header
      width 1226px
      height 100px
      margin 0 auto
      .container
        position relative
        display flex
        flex-flow row
        flex-wrap nowrap
        justify-content flex-start
        align-items center
        width 1226px
        height 100%
        margin 0 auto
        .icon-mi
          width 55px
          height 55px
          background-size 100% 100%
        .pic-gif
          width 163px
          height 66px
          margin-left 10px
          background-size 100% 100%
        .header-navs
          position relative
          .navs
            height 88px
            line-height 88px
            margin 0px
            padding 0
            list-style none
            .nav
              display inline-block
              margin-left -58px
              a
                margin-left 100px
              /* .phone-container
              margin 93px 0 0 -137px
              display flex
              align-items center
              padding 20px 0
              background-color green
              z-index 1000 */
              .phones
                border-top 1px solid #ccc
                position relative
                width 1226px
                display flex
                align-items center
                margin 0 auto
                background-color white
                z-index 100000
                .phone
                  width 16.66%
                  display flex
                  flex-direction column
                  align-items center
                  justify-content center
                  padding-top 30px
                  &:nth-last-child(1) img
                    border-right none
                    padding 0 0 0 21px
                  img
                    border-right 1px solid #ccc
                    padding 0 21px 0
                  p
                    font-size 14px
                    width 80px
                    height 20px
                    line-height 20px
                    text-align center
                    &.title
                      margin 15px 0 0px 0
                    &.price
                      color #ff6700
                      margin-bottom 20px
              .nav-item
                display block
                height 88px
                line-height 88px
                font-size 16px
                padding 0 10px
                text-decoration none
                color #333
                &:hover
                  color #ff6700
        .header-search
          position absolute
          top 23px
          right 0px
          width 295px
          height 50px
          border 1px solid #e0e0e0
          .hot-word
            position absolute
            top 14px
            right 62px
            z-index 2
            text-align right
            .hot-item
              float left
              width auto
              height 18px
              line-height 18px
              padding 0 5px
              font-size 12px
              background #eee
              color #757575
              margin-right 5px
              cursor pointer
              &:hover
                color #fff
                background #ff6300
          .fadeOut-transition
            transition all 0.3s ease
            opacity 1
          .fadeOut-enter, .fadeOut-leave
            opacity 0
          .search-ipt
            float left
            width 240px
            height 100%
            border 0
            outline none
            padding-left 5px
          .search-btn
            display block
            float right
            width 50px
            height 50px
            line-height 50px
            text-align center
            border-left 1px solid #e0e0e0
            cursor pointer
            .icon-tubiao-
              font-size 35px
              z-index 100
            &:hover
              background #ff6700
              .icon-tubiao-
                color white
        .search-active
          border 1px solid #ff6700
          .search-btn
            border-left 1px solid #ff6700
        .header-menu
          position absolute
          left 0
          top 140px
          width 100%
          height 230px
          background #fff
          box-shadow 0 1px 5px #ccc
          z-index 11
          .menus
            list-style none
            margin 0
            padding 30px 0 0 150px
            min-width 1500px
            .product
              float left
              a
                display block
                padding 0 30px
                border-right 1px solid #ccc
              &:nth-last-child(1)
                a
                  border-right 0
              .product-img
                width 100%
                width 160px
                height 110px
              .product-name
                width 100%
                height 16px
                margin-top 16px
                font-size 12px
                text-align center
              .product-price
                width 100%
                height 14px
                margin-top 10px
                font-size 10px
                text-align center
                color #ff6700
        .fadein-transition
          transition all 0.3s ease-in
          height 230px
          opacity 1
          overflow hidden
        .fadein-enter, .fadein-leave
          height 0
          opacity 0
  .scroll
    width 1226px
    height 480px
    margin 0 auto
    position relative
    z-index 1
  .goshop
    width 1226px
    margin 0 auto 20px
    display flex
    .shop
      width 340px
      height 170px
      &:nth-child(2)
        margin 0 103px
      img
        width 340px
        height 170px
</style>



