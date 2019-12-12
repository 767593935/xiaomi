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
        <p class="haveSend">您设置的手机号码为<span> {{phone}}</span></p>
        <p class="setPwd">请设置您的密码:</p>
        <el-form
          ref="form"
          :rules="rules"
          :model="form"
          label-width="300px"
          label-position="top"
        >
          <el-form-item prop="password">
            <el-input
              class="inp"
              v-model="form.password"
              auto-complete="true"
              style="width:300px"
              placeholder="请输入密码"
              show-password
            ></el-input>

          </el-form-item>
          <el-form-item prop="reqPassword">
            <el-input
              class="inp"
              v-model="form.reqPassword"
              auto-complete="true"
              style="width:300px"
              placeholder="请输入确认密码"
              show-password
            ></el-input>

          </el-form-item>

          <el-button
            type="warning"
            class="next"
            @click="login('form')"
          >提交</el-button>
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
import { reqSendCode, reqSmsLogin } from "../../api/index";
import { Message } from "element-ui";
import { mapState } from "vuex";
export default {
  data() {
     var passwordReg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,16}$/
     var validatePassword = (rule, password, callback) => {
      if (!password) {
        return callback(new Error('号码不能为空!!'))
      }
      setTimeout(() => {
        if (!passwordReg.test(password)) {
          callback(new Error('密码长度8~16位，数字、字母、字符至少包含两种'))
        } else {
          callback()
        }
      }, 1000)
    }

    var reqPasswordReg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,16}$/
     var validateReqPassword = (rule, reqPassword, callback) => {
      if (!reqPassword) {
        return callback(new Error('号码不能为空!!'))
      }
      setTimeout(() => {
        if (!reqPasswordReg.test(reqPassword)) {
          callback(new Error('密码长度8~16位，数字、字母、字符至少包含两种'))
        } else {
          callback()
        }
      }, 1000)
    }

    return {
      input: "",
      form: {
        password: "",
        reqPassword: ""
      },
      phone: "",

      // 校验规则
      rules: {
         password: [{ required: true, validator: validatePassword, trigger: 'blur' }],
         reqPassword: [{ required: true, validator: validateReqPassword, trigger: 'blur' }],
      }
    };
  },
  mounted() {
    this.phone = this.$store.state.user.phone;
  },
  computed: {},
  methods: {
    login(form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
          console.log("注册成功");
          const{ password ,reqPassword}=this.form
          if(password===reqPassword){
            console.log(password)
            this.$store.dispatch('savePassword',password)
            this.$router.replace("/login")
            
          }else{
             Message.error("两次密码不一致");
          }
        } else {
          Message.error("密码格式不正确");
        }
      });
    }
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
    color #666
    .haveSend
      font-size 14px
      font-weight bold
      margin 5px 0
      span
        color #FF6700
    .setPwd
      font-size 14px
      font-weight bold
      margin 0 0 10px 0
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