<template>
  <div class="contentContainer">
    <div class="banner">
      <img src="./images/banner.webp" alt />
    </div>
    <h2 class="title">主题</h2>
    <div class="more">
      <ul class="wraper">
          <li class="des_item" key="box1">
            <a href="###">
              <img src="./images/01.webp" alt />
              <h2 class="title">米家互联网空调C1</h2>
              <p class="des">变频节能省电</p>
              <p class="price">
                <span class="now">2599元</span>
                <span class="no">2799元</span>
              </p>
            </a>
          </li>
        <li class="des_item">
          <a href="###">
            <img src="./images/01.webp" alt />
            <h3 class="title">米家互联网空调C1</h3>
            <p class="des">变频节能省电</p>
            <p class="price">
              <span class="now">2599元</span>
              <span class="no">2799元</span>
            </p>
          </a>
        </li>
        <li class="des_item">
          <a href="###">
            <img src="./images/01.webp" alt />
            <h3 class="title">米家互联网空调C1</h3>
            <p class="des">变频节能省电</p>
            <p class="price">
              <span class="now">2599元</span>
              <span class="no">2799元</span>
            </p>
          </a>
        </li>
        <li class="des_item">
          <a href="###">
            <img src="./images/01.webp" alt />
            <h3 class="title">米家互联网空调C1</h3>
            <p class="des">变频节能省电</p>
            <p class="price">
              <span class="now">2599元</span>
              <span class="no">2799元</span>
            </p>
          </a>
        </li>
        <li class="des_item">
          <a href="###">
            <img src="./images/01.webp" alt />
            <h3 class="title">米家互联网空调C1</h3>
            <p class="des">变频节能省电</p>
            <p class="price">
              <span class="now">2599元</span>
              <span class="no">2799元</span>
            </p>
          </a>
        </li>
        <li class="des_item">
          <a href="###">
            <img src="./images/01.webp" alt />
            <h2 class="title">米家互联网空调C1</h2>
            <p class="des">变频节能省电</p>
            <p class="price">
              <span class="now">2599元</span>
              <span class="no">2799元</span>
            </p>
          </a>
        </li>
        <li class="des_item">
          <a href="###">
            <img src="./images/01.webp" alt />
            <h2 class="title">米家互联网空调C1</h2>
            <p class="des">变频节能省电</p>
            <p class="price">
              <span class="now">2599元</span>
              <span class="no">2799元</span>
            </p>
          </a>
        </li>
        <li class="des_item">
          <a href="###">
            <img src="./images/01.webp" alt />
            <h2 class="title">米家互联网空调C1</h2>
            <p class="des">变频节能省电</p>
            <p class="price">
              <span class="now">2599元</span>
              <span class="no">2799元</span>
            </p>
          </a>
        </li>
        <li class="des_item">
          <a href="###">
            <img src="./images/01.webp" alt />
            <h2 class="title">米家互联网空调C1</h2>
            <p class="des">变频节能省电</p>
            <p class="price">
              <span class="now">2599元</span>
              <span class="no">2799元</span>
            </p>
          </a>
        </li>
        <li class="des_item">
          <a href="###">
            <img src="./images/01.webp" alt />
            <h2 class="title">米家互联网空调C1</h2>
            <p class="des">变频节能省电</p>
            <p class="price">
              <span class="now">2599元</span>
              <span class="no">2799元</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Content'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.contentContainer
  width 1226px
  margin 0 auto
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
    .wraper
      width 100%
      display flex
      align-items center
      justify-content space-between
      flex-wrap wrap
      .des_item
        background-color #fff
        width 18%
        height 280px
        display flex
        flex-direction column
        align-items center
        margin-bottom 14px
        z-index 40
        margin 1px
        margin-bottom 10px
        &:hover 
          transform translateX(6px) scale(1.1)
        img
          padding-top 5px
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
</style>