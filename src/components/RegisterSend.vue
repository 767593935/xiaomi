<template>
  <div class="out">
    <div class="main">
      <header>
        <div class="img">
          <img
            src="https://account.xiaomi.com/static/res/28f08d0/account-static/respassport/acc-2014/img/milogo.png"
            alt=""
          >
        </div>
        <h1>注册小米账号</h1>
      </header>
      <article>
        <p class="haveSend">我们已经发送一条验证短信至<span>+86 13874463302</span></p>
        <el-form
          ref="form"
          :rules="rules"
          :model="form"
          label-width="300px"
          label-position="top"
        >
          <el-form-item
            label="请输入短信中的验证码"
            prop="security"
          >
            <el-input
              class="inp"
              v-model="form.security"
              auto-complete="true"
              style="width:250px"
            ></el-input>
            <el-button
              class="sendAgain"
              @click="onSubmit"
            >重新发送</el-button>
          </el-form-item>

          <el-button
            type="warning"
            class="next"
          >下一步</el-button>
          <el-button
            plain
            class="back"
          >返回</el-button>
        </el-form>

      </article>
      <footer>
      </footer>

    </div>
    <div class="footer">
      <ul>
        <li>简体</li>
        <li>繁体</li>
        <li>English</li>
        <li>常见问题</li>
      </ul>
      <p>小米公司版权所有-京ICP备10046444-<i><img
            src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
            alt=""
          ></i>京公网安备11010802020134号-京ICP证110507号</p>
    </div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      input: "",
      form: {
        security: ""
      },
      // 校验规则
      rules: {
        security: [
          {
            required: true, //是否必填
            message: "请输入短信验证码", //规则
            trigger: "blur" //何事件触发
          }
        ]
      }
    };
  }
};
</script>
<style lang="stylus">
body
  background-color #F9F9F9
.main
  width 800px
  height 500px
  position absolute
  top 50%
  left 50%
  transform translateY(-60%) translateX(-50%)
  background-color #fff
  header
    display flex
    flex-direction column
    align-items center
    h1
      margin 30px
      font-size 30px
  article
    width 400px
    margin auto
    .haveSend
      span
        color #FF6700
    .sendAgain
      margin-left 10px
      &:hover
        background-color #eee
        color #666
    .next
      width 350px
      margin 30px 0 20px
      background-color #FF6700
      &:hover
        background-color #ffb380
    .back
      width 350px
      margin-left -1px
      color #666
      &:hover
        color #000
        border-color #ddd
  footer
    margin auto
    width 300px
    .haveRead
      span
        font-weight bold
.footer
  position absolute
  bottom 30px
  left 50%
  transform translateX(-50%)
  ul
    display flex
    justify-content center
    li
      padding 0 20px
      font-size 14px
      color #777
      border-right 1px solid #ccc
      margin 10px 0
    li:hover
      color #000
    li:nth-child(4)
      border-right none
  p
    font-size 14px
    color #999
</style>