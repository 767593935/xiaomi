<template>
  <div class='searchPage'>
    <nav class='nav'>
      <img class='logo'
           src="./images/ia_100000355.png"
           alt="">
      <ul class='list'>
        <li>全部手机分类</li>
        <li>小米手机</li>
        <li>Redmi红米</li>
        <li>电视</li>
        <li>笔记本</li>
        <li>家电</li>
        <li>路由器</li>
        <li>智能硬件</li>
        <li>服务</li>
        <li>社区</li>
      </ul>
      <div class='searchName'>
        <input type="text"
               v-model='searchName'
               ref='content'>
        <a @click='searchHandle'></a>
      </div>
    </nav>
    <!-- 头部>--->
    <div class='header-top'>
      <div>
        首页 > 全部结果 >
        <span class='searchName'>
          {{searchNameAll}}
        </span>
      </div>
    </div>
    <!-- 分类头部部分 -->
    <div class='header-bottom'>
      <span>分类:</span>
      <ul>
        <li v-for='(category,index) in categorys'
            :key='index'
            @click.stop="selectHandle(index,$event)"
             ><a href="javascript:" >{{category}}</a></li>
      </ul>
    </div>
    <!-- 搜索选项部分 -->
    <div class='checkAll'>
      <div class='checkLeft'>
        <ul>
          <li>综合</li>
          <li>新品</li>
          <li>销量</li>
          <li class='last'>价格↑</li>
        </ul>
      </div>
      <div class=check-right>
        <ul>
          <li></li>
          <li>
            <input type="checkbox"
                   v-model='ischecked'>
            促销
          </li>
          <li>
            <input type="checkbox"
                   v-model='isselected'>
            分期
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索结果部分 -->
    <!-- <div class='search-content'>
      <SearchList :lists='lists' />
    </div> -->
    <!-- 底部分页部分 -->
    <div class='search-pagination'>
      <div class="block">
        <!-- 搜索结果部分 -->
        <SearchList :alllist='alllist'
                    :currentPage='currentPage' />
        <el-pagination layout="prev, pager, next"
                       :total=lists.length
                       background
                       :page-size=pageSize
                       :current-page=currentPage
                       @current-change="handleCurrentChange"
                       hide-on-single-page>
        </el-pagination>
      </div>
    </div>
    <!-- 猜你喜欢部分 -->
    <div class='guessYouLike'>
      <h1>猜你喜欢</h1>
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
               
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1zoZ_Bybv1RXrhCrK.jpg" />
                   九号平衡车
            </div>
            <div class="swiper-slide">
              
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572941393.18077211.jpg" />
                  荣耀智能手机
            </div>
            <div class="swiper-slide">
               
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572837419.47939903.jpg" />
                  小米电视5 55英寸 灰色
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
      </div>
    </div>
    <TempFooter/>
    <!-- 底部部分 -->
    <!-- <footer class="footer-wrap">
      <div class="footer">
        <div class="foot-header">
          <div class="footer-service">
            <ul class="service clearfix">
              <li class="service-item">
                <a href="//www.mi.com/service/exchange#repaire"
                   target="_blank">
                  <span class="icon">
                    <i class="fa fa-gavel"></i>
                  </span>
                  1小时快修服务
                </a>
              </li>
              <li class="service-item">
                <a href="//www.mi.com/service/exchange#back"
                   target="_blank">
                  <span class="icon">
                    <i class="fa fa-history"></i>
                  </span>
                  7天无条件退货
                </a>
              </li>
              <li class="service-item">
                <a href="//www.mi.com/service/exchange#free"
                   target="_blank">
                  <span class="icon">
                    <i class="fa fa-history"></i>
                  </span>
                  15天免费换货
                </a>
              </li>
              <li class="service-item">
                <a href="//www.mi.com/service/exchange#mail"
                   target="_blank">
                  <span class="icon">
                    <i class="fa fa-gift"></i>
                  </span>
                  满150元包邮
                </a>
              </li>
              <li class="service-item">
                <a href="//www.mi.com/static/maintainlocation/"
                   target="_blank">
                  <span class="icon">
                    <i class="fa fa-location-arrow"></i>
                  </span>
                  520余家售后网点
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-info">
            <ul class="footer-content clearfix">
              <li class="footer-item">
                <article class="col-links">
                  <h3>帮助中心</h3>
                  <p>
                    <a href="//www.mi.com/service/account/register/"
                       target="_blank">账户管理</a>
                  </p>
                  <p>
                    <a href="//www.mi.com/service/buy/buytime/"
                       target="_blank">购物指南</a>
                  </p>
                  <p>
                    <a href="//www.mi.com/service/order/sendprogress/"
                       target="_blank">订单操作</a>
                  </p>
                </article>
              </li>
              <li class="footer-item">
                <article class="col-links">
                  <h3>服务支持</h3>
                  <p>
                    <a href="//www.mi.com/service/exchange"
                       target="_blank">售后政策</a>
                  </p>
                  <p>
                    <a href="http://fuwu.mi.com/"
                       target="_blank">自助服务</a>
                  </p>
                  <p>
                    <a href="http://xiazai.mi.com/"
                       target="_blank">相关下载</a>
                  </p>
                </article>
              </li>
              <li class="footer-item">
                <article class="col-links">
                  <h3>线下门店</h3>
                  <p>
                    <a href="//www.mi.com/c/xiaomizhijia/"
                       target="_blank">小米之家</a>
                  </p>
                  <p>
                    <a href="//www.mi.com/static/maintainlocation/"
                       target="_blank">服务网点</a>
                  </p>
                  <p>
                    <a href="//www.mi.com/static/familyLocation/"
                       target="_blank">零售网点</a>
                  </p>
                </article>
              </li>
              <li class="footer-item">
                <article class="col-links">
                  <h3>关于小米</h3>
                  <p>
                    <a href="//www.mi.com/about"
                       target="_blank">了解小米</a>
                  </p>
                  <p>
                    <a href="http://hr.xiaomi.com/"
                       target="_blank">加入小米</a>
                  </p>
                  <p>
                    <a href="//www.mi.com/about/contact"
                       target="_blank">联系我们</a>
                  </p>
                </article>
              </li>
              <li class="footer-item">
                <article class="col-links">
                  <h3>关注我们</h3>
                  <p>
                    <a href="http://e.weibo.com/xiaomishouji"
                       target="_blank">新浪微博</a>
                  </p>
                  <p>
                    <a href="http://xiaoqu.qq.com/mobile/share/index.html?url=http%3A%2F%2Fxiaoqu.qq.com%2Fmobile%2Fbarindex.html%3Fwebview%3D1%26type%3D%26source%3Dindex%26_lv%3D25741%26sid%3D%26_wv%3D5123%26_bid%3D128%26%23bid%3D10525%26from%3Dwechat"
                       target="_blank">小米部落</a>
                  </p>
                  <p>
                    <a href="javascript:void(0)"
                       target="_blank">官方微信</a>
                  </p>
                </article>
              </li>
              <li class="footer-item">
                <article class="col-links">
                  <h3>特色服务</h3>
                  <p>
                    <a href="//order.mi.com/queue/f2code"
                       target="_blank">F码通道</a>
                  </p>
                  <p>
                    <a href="//www.mi.com/mimobile/"
                       target="_blank">小米移动</a>
                  </p>
                  <p>
                    <a href="//order.mi.com/misc/checkitem"
                       target="_blank">防伪查询</a>
                  </p>
                </article>
              </li>
              <li class="footer-last-item">
                <div class="col-content">
                  <h3 class="phone-number">400-100-5678</h3>
                  <p class="phone-desc">
                    周一至周日 8:00-18:00
                    <br />（仅收市话费）
                  </p>
                  <a href="//www.mi.com/service/contact"
                     target="_blank">
                    <span class="server-btn">
                      <i></i>
                      24小时在线客服
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="site-info">
          <div class="footer-explan clearfix">
            <img class="logo-img"
                 src="http://s01.mifile.cn/i/logo-footer.png?v2"
                 alt />
            <div class="explan-content">
              <ul class="links clearfix">
                <li class="link-item">
                  <a href="//www.mi.com/index.html">小米商城</a>
                </li>
                <li class="link-item">
                  <a href="http://www.miui.com/"
                     target="_blank">MIUI</a>
                </li>
                <li class="link-item">
                  <a href="http://www.miliao.com/"
                     target="_blank">米聊</a>
                </li>
                <li class="link-item">
                  <a href="http://www.duokan.com/"
                     target="_blank">多看书城</a>
                </li>
                <li class="link-item">
                  <a href="http://www.miwifi.com/"
                     target="_blank">小米路由器</a>
                </li>
                <li class="link-item">
                  <a href="http://call.mi.com/"
                     target="_blank">视频电话</a>
                </li>
                <li class="link-item">
                  <a href="http://blog.xiaomi.com/"
                     target="_blank">小米后院</a>
                </li>
                <li class="link-item">
                  <a href="http://xiaomi.tmall.com/"
                     target="_blank">小米天猫店</a>
                </li>
                <li class="link-item">
                  <a href="http://shop115048570.taobao.com"
                     target="_blank">小米淘宝直营店</a>
                </li>
                <li class="link-item">
                  <a href="http://union.mi.com/"
                     target="_blank">小米网盟</a>
                </li>
                <li class="link-item">
                  <a href="javascript:void(0)">问题反馈</a>
                </li>
                <li class="link-item">
                  <a href="javascript:void(0)">Select Region</a>
                </li>
              </ul>
              <p class="explan-txt">
                ©
                <a href="//www.mi.com/index.html">mi.com</a> 京ICP证110507号 京ICP备10046444号
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
                   target="_blank">京公网安备11010802020134号</a>
                <a href="//c1.mifile.cn/f/i/2013/cn/jingwangwen.jpg"
                   target="_blank">京网文[2014]0059-0009号</a>
                <br />违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
              </p>
            </div>
            <img class="logo-explan logo-explan-first"
                 src="http://privacy-policy.truste.com/privacy-seal/seal?rid=4fc28a8c-6822-4980-9c4b-9fdc69b94eb8"
                 alt />
            <img class="logo-explan"
                 src="http://s01.mifile.cn/i/v-logo-2.png"
                 alt />
            <img class="logo-explan"
                 src="http://s01.mifile.cn/i/v-logo-1.png"
                 alt />
            <img class="logo-explan"
                 src="http://s01.mifile.cn/i/v-logo-3.png"
                 alt />
          </div>
          <p class="footer-desc"></p>
        </div>
      </div>
    </footer> -->
  </div>
</template>
<script>
//引入组件
import SearchList from '../../components/SearchList/SearchList.vue'
//引入
import { mapState } from 'vuex'
//引入swiper
import Swiper from 'swiper'
//引入swiper的样式文件
import 'swiper/css/swiper.css'
export default {
  name: 'Search',
  components: {
    SearchList
  },
  computed: {
    ...mapState({
      lists: state => state.search.searchList
    }),
    //get操作

  },
  watch: {
    //定义一个大的数组用来存储父组件传过来的全部lists
    lists () {
      // console.log(this)
      let { selectArr, lists } = this
      selectArr = lists
      // console.log(selectArr)
      let bigArr = []
      //定义一个小数组
      let smallArr = []
      lists.forEach(list => {
        if (smallArr.length === 0) {
          bigArr.push(smallArr)
        }
        smallArr.push(list)
        if (smallArr.length === 8) {
          smallArr = []
        }
      })
      this.alllist = bigArr
    },
    selectArr () {
      const { selectArr } = this
      let bigArr = []
      //定义一个小数组
      let smallArr = []
      selectArr.forEach(list => {
        if (smallArr.length === 0) {
          bigArr.push(smallArr)
        }
        smallArr.push(list)
        if (smallArr.length === 8) {
          smallArr = []
        }
      })
      this.alllist = bigArr
    },
    ischecked () {
      if (this.ischecked) {
        // console.log('1')
        // console.log(this.selectArr)
        const arr2 = this.lists
        const arr1 = []
        for (var i = 0; i < arr2.length; i++) {
          if (arr2[i].oldPrice !== '') {
            arr1.push(arr2[i])
          }
        }
        this.selectArr = arr1
        // console.log(arr1)

      } else {
        // console.log('123')
        this.selectArr = this.lists
      }
    },
    isselected () {
      if (this.isselected) {
        // console.log('1')
        // console.log(this.selectArr)
        const arr2 = this.lists
        const arr1 = []
        for (var i = 0; i < arr2.length; i++) {
          if (arr2[i].stages === '分期') {
            arr1.push(arr2[i])
          }
        }
        this.selectArr = arr1
        // console.log(arr1)

      } else {
        // console.log('123')
        this.selectArr = this.lists
      }
    }
  },
  data () {
    return {
      activeName: 'second',
      categorys: ['全部', '手机', '出行', '包', '日用百货', '手机配件', '手机贴膜', '更多>'],
      searchList: [], //默认搜索结果列表为空
      searchName: '小米', //默认搜索内容为空
      searchNameAll: '小米',
      currentPage: 1, //默认显示第一页
      pageSize: 8, //默认显示8条数据
      bigArr: [],
      isHandle: false, //默认都没点击
      selectArr: [],
      alllist: [],
      ischecked: false, //默认促销按钮不被选中
      isselected: false //默认分期按钮不被选中
    }
  },
  async mounted () {
    const searchName = localStorage.getItem('value')
    this.searchName=searchName
    await this.$store.dispatch('getsearchList', searchName)
    this.$nextTick(() => {
      this.selectArr = this.lists
    })
    new Swiper('.swiper-container',{
      loop:true,
      pagination:{
        el:'.swiper-pagination'
      }
    })
  },
  methods: {
    //搜索操作
    searchHandle () {
      const searchName = this.$refs.content.value
      this.$store.dispatch('getsearchList', searchName)
      this.searchNameAll = searchName
      this.selectArr = this.lists
    },

    //改变页码操作
    handleCurrentChange (val) {
      // console.log('111')  
      // this.currentPage = 
      // console.log(this.currentPage)
      this.currentPage = parseInt(val)
      // console.log(this.currentPage)
      // console.log(this.alllist[this.currentPage])
    },

    //处理选择分类信息
    selectHandle (index,e) {
      const as = document.querySelectorAll(".header-bottom>ul>li a ")
      // console.log(e.target.classList) 
      // console.log(as)
      for(var i=0; i<as.length; i++){
        as[i].style.color=''
      }
       e.target.style.color='red' 
      
      switch (index) {
        case 0:
          // console.log('全部')
          // this.lists = this.lists.filter((item,index)=>{
          //   return item.title
          // })
          this.selectArr = this.lists
          break;
        case 1:
          // console.log('手机')
          this.selectArr = this.lists.filter((item, index) => {
            return item.indentify === 1
          })
          // console.log(this.selectArr)
          break;
        case 2:
          // console.log('出行') 
          this.selectArr = this.lists.filter((item, index) => {
            return item.indentify === 2
          })
          break;
        case 3:
          // console.log('包') 
          this.selectArr = this.lists.filter((item, index) => {
            return item.indentify === 3
          })
          break;
        case 4:
          // console.log('日用百货') 
          this.selectArr = this.lists.filter((item, index) => {
            return item.indentify === 4
          })
          break;
        case 5:
          // console.log('手机配件') 
          this.selectArr = this.lists.filter((item, index) => {
            return item.indentify === 5
          })
          break;
        case 6:
          // console.log('手机贴膜')
          this.selectArr = this.lists.filter((item, index) => {
            return item.indentify === 6
          })
          break;
        case 7:
          // console.log('更多>'
          alert('客官,木有了,么好意思啊!')
          break;
        default:
          break;
      }
    }
    //点击促销按钮事件
    // ischeckedhandle(ischecked){
    //   // console.log(ischecked)
    //   if(!ischecked){
    //     console.log('1')
    //     // console.log(this.selectArr)
    //     this.selectArr.filter((item,index)=>{
    //       return item.oldPrice!==''
    //     })
    //     console.log(this.selectArr)
    //   }else{
    //     console.log('2')
    //     this.selectArr.filter((item,index)=>{
    //       return item.price!==""
    //     })
    //     console.log(this.selectArr)
    //   }
    // }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.searchPage
  width 100
  height 100
  background-color #F5F5F5
  .nav
    width 1200
    height 100
    // background-color #1234
    display flex
    justify-content space-around
    background-color #fff
    img
      width 50px
      height 50px
      transform translateY(50%)
      margin-left 40px
    .list
      width 850px
      display flex
      background-color white
      justify-content space-around
      li
        text-align center
        line-height 100px
    .searchName
      width 245px
      height 50px
      overflow hidden
      // background-color #fff
      padding-top 25px
      input
        float left
        width 193px
        height 45px
        border 1px solid #e0e0e0
        outline none
        &:focus
          border 1px solid #B22222
      a
        display inline-block
        float right
        width 50px
        height 50px
        background url('./images/fangdajing.jpg') center center no-repeat
        background-size 50px 50px
  .header-top
    margin-top 12px
    margin-bottom 12px
    font 12px Arial
    margin-left 70px
    color rgba(0, 0, 0, 0.5)
  .header-bottom
    width 1226px
    height 84px
    background-color #fff
    margin 0 auto
    display flex
    span
      display inline-block
      width 5%
      line-height 84px
    ul
      width 95%
      height 100%
      display flex
      justify-content space-around
      align-items center
  .checkAll
    width 1226px
    height 30px
    margin 0 auto
    // background-color pink
    display flex
    justify-content space-between
    .checkLeft
      height 100%
      width 30%
      ul
        height 100%
        display flex
        justify-content space-around
        align-items center
        li
          border-right 1px solid #ccc
          padding-right 30px
        .last
          border-right 1px solid #fff
    .check-right
      height 100%
      width 30%
      // background-color green
      ul
        margin-top 6px
        width 100%
        height 100%
        display flex
        justify-content space-between
  .search-pagination
    text-align center
    margin-bottom 220px
  .guessYouLike
    width 1226px
    margin 0 auto
    background-color #fff
    margin-bottom 100px
    position relative
    .swiper-container
      width 800 
      height 300
      .swiper-wrapper
        .swiper-slide
          display flex
          align-items center
    h1
      font-size 30px
      position absolute
      top -50px
      left 613px
      transform translateX(-50%)
  .temp-footer
    width 1226px
    height auto
    margin 0 auto
    padding-bottom 20px
    .foot-header
      background-color #fff
      .footer-service
        padding 45px 27px
        border-bottom 1px solid #e0e0e0
        .service
          .service-item
            float left
            width 234px
            height 27px
            line-height 27px
            font-size 16px
            color #616161
            padding 0 40px
            box-sizing border-box
            border-right 1px solid #e0e0e0
            &:nth-last-child(1)
              border-right 0
            .icon
              display inline-block
              height 27px
              line-height 27px
              font-size 24px
              margin-right 10px
      .footer-info
        padding 40px 0 40px 10px
      .footer-content
        height 100px
        .footer-item
          float left
          width 160px
          height 120px
          &:nth-last-child(2)
            border-right 1px solid #e0e0e0
            margin-right 20px
          h3
            font-size 14px
            font-weight normal
            margin-bottom 26px
          p
            font-size 12px
            margin-top 10px
            a
              text-decoration none
              color #333
              &:hover
                color #ff6700
        .footer-last-item
          float left
          .col-content
            margin-left 40px
            .phone-number
              margin 0 0 5px
              font-size 22px
              text-align center
              margin-bottom 5px
              color #ff6700
            .phone-desc
              font-size 12px
              line-height 1.5
              text-align center
              color #616161
            .server-btn
              display block
              width 120px
              height 30px
              line-height 30px
              font-size 12px
              text-align center
              margin 0 auto
              border 1px solid #ff6700
              color #ff6700
              cursor pointer
              &:hover
                background #ff6700
                color #fff
    .site-info
      padding 30px 0
      .footer-explan
        .logo-img
          float left
          width 57px
          height 57px
        .explan-content
          float left
          padding-left 10px
          .links
            .link-item
              float left
              padding 0 5px
              font-size 12px
              color #757575
              border-right 1px solid #757575
              &:nth-last-child(1)
                border-right 0
              a
                &:hover
                  color #ff6700
        .explan-txt
          margin 10px 0 0 5px
          line-height 18px
          font-size 12px
          color #b0b0b0
          a
            text-decoration none
            color #b0b0b0
            &:hover
              color #ff6700
        .logo-explan
          width 85px
          height 28px
          &.logo-explan-first
            margin 55px 0 0 -750px
      .footer-desc
        clear both
        margin 30px auto 0
        width 267px
        height 19px
        background url('//s02.mifile.cn/assets/static/image/slogan2016.png') no-repeat center 0 // s02.mifile.cn/assets/static/image/slogan2016.png) no-repeat center 0
</style>