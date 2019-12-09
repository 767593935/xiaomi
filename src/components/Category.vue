<template>
  <div class="Category_Container">
    <div class="left_content">
      <img src="../components/images/vivio.jpg_.webp" alt />
    </div>
    <div class="right_content">
      <div class="category_title">
        <h1 class="title">Redmi全自动波轮洗衣机1S 8kg</h1>
        <p class="detail">支持24小时预约洗8kg洗涤容量，紧凑机身1/10种洗涤模式紧凑机身 1/10种洗涤模式,</p>
        <p class="detail1">小米自营</p>
        <p class="category_price">
          <span class="now">799元</span>
          <span class="old">899元</span>
        </p>
      </div>
      <div class="category_car">
        <span class="addCar on">加入购物车</span>
        <span class="love">
          <i class="iconfont icon-xihuan">喜欢</i>
        </span>
      </div>
      <div class="category_detail">
        <div class="detail_top">
         <p class="title">Redmi全自动波轮洗衣机1S 8kg</p>
         <p class="category_price">
          <span class="now">799元</span>
          <span class="old">899元</span>
        </p>
        </div>
      <p class="total_price"></p>
        
      </div>
      <div class="category_footer">
        <a href="###">
          <i class="iconfont icon-true">小米自营</i>
        </a>
        <a href="###">
          <i class="iconfont icon-true">小米发货</i>
        </a>
        <a href="###">
          <i class="iconfont icon-true">7天无理由退货</i>
        </a>
        <a href="###">
          <i class="iconfont icon-true">运费说明</i>
        </a>
        <a href="###">
          <i class="iconfont icon-true">30天价格保护</i>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.Category_Container
  width 100%
  height 100%
  display flex
  justify-content center
  padding 20px
 /*  background-color pink */
  .left_content
    flex 1
    position relative
    img
      width 50%
      height 50%
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
  .right_content
    flex 1
    padding 10px
    .category_title
      border-bottom 1px solid #fafafa
      padding 15px
      background-color #f9f9f9
      .title
        margin-top 59px
        line-height 34px
        margin-bottom 8px
        font-size 18px
        font-weight 700
        color rgb(7, 17, 27)
      .detail
        font-size 15px
        color #3c3c3c
        height 20px
        line-height 20px
      .detail1
        font-size 16px
        margin-top 25px
        margin-bottom 20px
        color #f87355
      
      .category_price
        display flex
        margin-top 40px
        .now
          color #f87355
          font-size 24px
          font-weight 700
          margin-left 10px
        .old
          color #f87355
          font-size 16px
          font-weight 700
          margin-left 10px
          color #94999c
          text-decoration line-through
          padding-top 8px
    .category_car
      display flex
      margin-top 10px
      .addCar
        width 200px
        height 50px
        display inline-block
        line-height 50px
        background-color #b0b0b0
        border-radius 10px
        text-align center
      &.on
        width 200px
        height 50px
        display inline-block
        line-height 50px
        background-color #ff6801
        border-radius 10px
        text-align center
      .love
        display inline-block
        width 137px
        height 50px
        line-height 50px
        color white
        background-color #b0b0b0
        text-align center
        margin-left 10px
        border-radius 10px
    .category_detail
      margin-top 10px
      background-color #f9f9f9
      height 100px
      line-height 100px
      .detail_top
        display flex
        justify-content space-between
        height 20px
        text-align center
        padding-top 30px
        text-indent 16px
        .title
          font-size 15px
          color #3c3c3c
          height 20px
          line-height 20px 
          text-align center
        .category_price
          font-size 15px
          color #3c3c3c
          height 20px
          line-height 20px  
          text-align center
          .now 
            color #f87355
            font-size 16px
            font-weight 700
            margin-left 10px 
          .old
            color #f87355
            font-size 16px
            font-weight 700
            margin-left 10px
            color #94999c
            text-decoration line-through
            padding-top 8px  
    .category_footer
      margin-top 60px
      height 50px
      display flex
      align-items center
      justify-content space-around
</style>