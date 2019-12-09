<template>
  <el-container class="loginContainer">
    <el-header class="login_header">
      <h1 class="login_logo">
        <img src="./images/login.png"
             alt="小米商城">
      </h1>
    </el-header>
    <el-container class="login_content">
      <div class="login_header_title">
        <a href="javascript:;"
           :class="{on:loginWay}"
           @click="loginWay=true">短信登录</a>
        <span class="shu">|</span>
        <a href="javascript:;"
           :class="{on:!loginWay}"
           @click="loginWay=false">密码登录</a>
        <el-form :model="ruleForm"
                 :rules="rules"
                 status-icon
                 class="demo-ruleForm">
          <div :class="{on:loginWay}">
            <el-form-item prop="phone">
              <el-input type="tel"
                        v-model="ruleForm.phone"
                        placeholder="手机号" />
              <button disabled="disabled"
                      class="get_verification">获取验证码</button>
            </el-form-item>
            <el-form-item prop="code">
              <el-input type="tel"
                        v-model="ruleForm.code"
                        placeholder="验证码" />
            </el-form-item>
          </div>
          <div :class="{on:!loginWay}">
            <section>
              <el-form-item prop="phone">
                <el-input type="tel"
                          v-model="ruleForm.phone"
                          placeholder="手机/邮箱/用户名" />
              </el-form-item>
              <el-form-item prop="pwd">
                <el-input type="tel"
                          v-model="ruleForm.pwd"
                          placeholder="密码" />
              </el-form-item>
              <el-form-item>
                <el-input type="text"
                          placeholder="验证码" />
                <img class="get_verification"
                     src="./images/captcha.svg"
                     alt="captcha">
              </el-form-item>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </el-form>
      </div>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      loginWay: true, // 默认显示
      isPwdShow: false,// 是否显示密码
      ruleForm: { // 表单验证
        phone: '',// 手机号码
        code: '', // 短信验证码
        name: '', // 用户名
        pwd: '', // 密码
        captcha: '' // 图形验证码
      },
      rules: {
        phone: [
          { required: true, message: "请输入11位手机号", trigger: 'blur' },
        ],
        code: { required: true, message: '请输入6位验证码', trigger: 'blur' },
        name: { required: true, message: '请输入用户名', trigger: 'blur' },
        pwd: { required: true, message: '请输入密码', trigger: 'blur' },
        captcha: { required: true, message: '请输入图形验证码', trigger: 'blur' },
      }

    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.loginContainer
  height 100%
  width 100%
  .login_header
    width 1140px
    margin 0 auto
    .login_logo
      margin 0 30px
      font-size 40px
      zoom 1
      &::after
        content ''
        display block
        clear both
  .login_content
    margin-top 30px
    background url('./images/bj.jpg')
    height 590px
    position relative
    .login_header_title
      padding-top 40px
      text-align center
      font-size 30px
      width 500px
      position absolute
      top 15px
      right 30px
      background-color #fff
      .shu
        margin-right 30px
        font-weight 300
        color #666
      >a
        color #333
        font-size 26px
        &:hover
          color rgb(255, 103, 0)
        &:first-child
          margin-right 40px
        &.on
          color rgb(255, 103, 0)
          font-weight 400
      >.demo-ruleForm
        >div
          display none
          &.on
            display block
          .input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid rgb(255, 103, 0)
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color 0.3s, border-color 0.3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background rgb(255, 103, 0)
              >.switch_circle
                // transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.1)
                transition transform 0.3s
                &.on
                  transform translateX(27px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color rgb(255, 103, 0)
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background rgb(255, 103, 0)
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
</style>
