<template>
  <div class='SearchList'>
    <ul class='ul' >
      <li v-for='(item,index) in alllist[currentPage-1]'
          :key='index'>
        <router-link class="routerLink"
                     to="/detail">
          <img class="bigImg"
               :src="item.image"
               alt="">
        </router-link>
        <p class='text'>{{item.title}}</p>
        <p class='price'>{{item.price}}&nbsp; <span class='oldPrice'>{{item.oldPrice}}</span></p>
        <div class='smallImg'>
          <img src="./images/ia_100000295.jpg"
               alt="">
          <img src="./images/ia_100000295.jpg"
               alt="">
        </div>
        <div class='options'>
          <span v-show='item.oldPrice'>秒杀</span>
          <span v-show='item.oldPrice'>赠</span>
          <span v-show='item.stages'>分期</span>
        </div>
      </li>
      <!-- <li>
        <img class='bigImg' src="./images/ia_100000295.jpg" alt="">
        <p class='text'>九号平衡车 白色</p>
        <p class='price'>1199元</p>
        <div class='smallImg'>
          <img src="./images/ia_100000295.jpg" alt="">
          <img src="./images/ia_100000295.jpg" alt="">
        </div>
        <div class='options'>
          <span>秒杀</span>
          <span>赠</span>
          <span>分期</span>
        </div>
      </li>
       <li>
        <img class='bigImg' src="./images/ia_100000295.jpg" alt="">
        <p class='text'>九号平衡车 白色</p>
        <p class='price'>1199元</p>
        <div class='smallImg'>
          <img src="./images/ia_100000295.jpg" alt="">
          <img src="./images/ia_100000295.jpg" alt="">
        </div>
        <div class='options'>
          <span>秒杀</span>
          <span>赠</span>
          <span>分期</span>
        </div>
      </li>
       <li>
        <img class='bigImg' src="./images/ia_100000295.jpg" alt="">
        <p class='text'>九号平衡车 白色</p>
        <p class='price'>1199元</p>
        <div class='smallImg'>
          <img src="./images/ia_100000295.jpg" alt="">
          <img src="./images/ia_100000295.jpg" alt="">
        </div>
        <div class='options'>
          <span>秒杀</span>
          <span>赠</span>
          <span>分期</span>
        </div>
      </li>
       <li>
        <img class='bigImg' src="./images/ia_100000295.jpg" alt="">
        <p class='text'>九号平衡车 白色</p>
        <p class='price'>1199元</p>
        <div class='smallImg'>
          <img src="./images/ia_100000295.jpg" alt="">
          <img src="./images/ia_100000295.jpg" alt="">
        </div>
        <div class='options'>
          <span>秒杀</span>
          <span>赠</span>
          <span>分期</span>
        </div>
      </li>
       <li>
        <img class='bigImg' src="./images/ia_100000295.jpg" alt="">
        <p class='text'>九号平衡车 白色</p>
        <p class='price'>1199元</p>
        <div class='smallImg'>
          <img src="./images/ia_100000295.jpg" alt="">
          <img src="./images/ia_100000295.jpg" alt="">
        </div>
        <div class='options'>
          <span>秒杀</span>
          <span>赠</span>
          <span>分期</span>
        </div>
      </li>
       <li>
        <img class='bigImg' src="./images/ia_100000295.jpg" alt="">
        <p class='text'>九号平衡车 白色</p>
        <p class='price'>1199元</p>
        <div class='smallImg'>
          <img src="./images/ia_100000295.jpg" alt="">
          <img src="./images/ia_100000295.jpg" alt="">
        </div>
        <div class='options'>
          <span>秒杀</span>
          <span>赠</span>
          <span>分期</span>
        </div>
      </li>
       <li>
        <img class='bigImg' src="./images/ia_100000295.jpg" alt="">
        <p class='text'>九号平衡车 白色</p>
        <p class='price'>1199元</p>
        <div class='smallImg'>
          <img src="./images/ia_100000295.jpg" alt="">
          <img src="./images/ia_100000295.jpg" alt="">
        </div>
        <div class='options'>
          <span>秒杀</span>
          <span>赠</span>
          <span>分期</span>
        </div>
      </li>   -->
    </ul>
  </div>
</template>
<script>

export default {
  name: 'SearchList',
  props: ['alllist','currentPage'],
  data () {
    return {
      i:0//默认显示第一个小数组    
    }
  },
  watch:{
    currentPage(){
     return this.currentPage
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.SearchList
  width 1226px
  margin 0 auto
  // background-color #321321
  ul
    overflow hidden
    width 1250px
    li
      display block
      width 296px
      height 430px
      float left
      background-color #fff
      margin-right 14px
      margin-bottom 14px
      display flex
      flex-direction column
      align-items center
      padding-top 90px
      .oldPrice
        text-decoration line-through
        color #b0b0b0
      .bigImg
        width 200px
        height 200px
        margin-bottom 50px
      .smallImg
        margin 15px 0
        img
          width 34px
          height 34px
      .options
        span
          margin 0 5px
          padding 0 10px
          border-radius 2px
          &:nth-child(1)
            background-color #EA4C40
          &:nth-child(2)
            background-color #EA4C40
          &:nth-child(3)
            background-color #5FB5F0  
</style>