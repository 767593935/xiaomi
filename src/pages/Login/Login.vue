<template>
  <el-container class="loginContainer">
    <el-header class="login_header">
      <h1 class="login_logo">
        <img
          src="./images/login.png"
          alt="小米商城"
        >
      </h1>
    </el-header>
    <div class="login_content">
      <div class="login_main">
        <div class="login_form">
          <div class="login_header_title">
            <a
              href="javascript:;"
              :class="{on:!loginWay}"
              @click="loginWay=false"
            >密码登录</a>
            <span class="shu">|</span>
            <a
              href="javascript:;"
              :class="{on:loginWay}"
              @click="loginWay=true"
            >短信登录</a>

          </div>
          <div class="login_header_center">
            <el-form
              :model="ruleForm"
              :rules="rules"
              class="demo-ruleForm"
              label-width="100px"
            >
              <div :class="{on:loginWay}">
                <el-form-item prop="phone">
                  <el-input
                    type="tel"
                    v-model="ruleForm.phone"
                    maxlength="11"
                    placeholder="手机号"
                    v-validate="'required|changePhone'"
                  />
                  <button
                    class="get_verification"
                    :class="{right:isRightPhone}"
                    :disabled="!isRightPhone||computedTime>0"
                    @click.prevent="sendCode"
                  >{{computedTime>0?`已发送(${computedTime}s)`:`获取验证码`}}</button>
                </el-form-item>
                <el-form-item prop='code'>
                  <el-input
                    type="tel"
                    v-model="ruleForm.code"
                    maxlength="6"
                    placeholder="验证码"
                    v-validate="'required|code'"
                  />
                </el-form-item>
              </div>
              <div :class="{on:!loginWay}">
                <section>
                  <el-form-item prop="name">
                    <el-input
                      type="tel"
                      v-model="ruleForm.name"
                      placeholder="手机/邮箱/用户名"
                    />
                  </el-form-item>
                  <el-form-item prop="pwd">
                    <el-input
                      type="password"
                      v-model="ruleForm.pwd"
                      placeholder="密码"
                      v-validate="'required'"
                    />
                  </el-form-item>
                  <el-form-item prop="captcha">
                    <el-input
                      type="text"
                      v-model="ruleForm.captcha"
                      placeholder="验证码"
                    />
                    <img
                      class="get_verification"
                      ref="im"
                      src="http://localhost:5000/captcha"
                      alt="captcha"
                      @click="sendCaptcha"
                    >
                  </el-form-item>
                </section>
              </div>
              <button
                class="login_submit"
                @click.prevent="login"
              >登录</button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <el-footer class="login_footer">
      <div class="loginFooterT">
        <a href="javascript:;">简体</a>
        <span>|</span>
        <a href="javascript:;">繁体</a>
        <span>|</span>
        <a href="javascript:;">English</a>
        <span>|</span>
        <a href="javascript:;">常见问题</a>
        <span>|</span>
        <a href="javascript:;">隐私政策</a>
      </div>
      <div class="loginFooterB">
        <p>小米公司版权所有-京ICP备10046444-<span><img
              src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
              alt=""
            ></span> 京公网安备11010802020134号-京ICP证110507号</p>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
import { reqSendCode, reqSmsLogin, reqPwdLogin ,reqAutoLogin} from "../../api";
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loginWay: false, // 默认显示
      isPwdShow: false, // 是否显示密码
      computedTime: 0, // 用来倒计时的
      ruleForm: {
        // 表单验证
        phone: "", // 手机号码
        code: "", // 短信验证码
        name: "", // 用户名
        pwd: "", // 密码
        captcha: "" // 图形验证码
      },
      // 简单验证
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 11, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请填写短信验证码", trigger: "blur" },
          { max: 6, message: "请填写正确的短信验证码", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "请填写图形验证码", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 12, message: "长度在3到12位", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    isRightPhone() {
      return /[1]\d{10}/.test(this.ruleForm.phone);
    },
    ...mapState({
      phoneNum: state => state.user.phone,
      password: state => state.user.password
    })
  },
 /*  async mounted() {
    await this.$store.dispatch('autoLogin')
    this.$router.replace('/msite')
   /*  const result = await reqAutoLogin();
    if (result.code === 0) {
      console.log(this);
      this.$router.replace("/");
    } 
  }, */
  methods: {
    // 发送验证码
    async sendCode() {
      this.computedTime = 10;
      this.timeId = setInterval(() => {
        this.computedTime--;
        if (this.computedTime <= 0) {
          this.computedTime = 0;
          // 清除定时器
          clearInterval(this.timeId);
        }
      }, 1000);
      // 发送验证码
      const result = await reqSendCode(this.ruleForm.phone);
      if (result.code === 0) {
        // 断言
        this.$message({ message: "发送成功", type: "success" });
      } else {
        console.log(result);
        this.$message("发送失败");
        // 定时器归0
        this.computedTime = 0;
      }
    },
    // 获取图形验证码
    sendCaptcha() {
      this.$refs.im.src = `http://localhost:5000/captcha?time=` + Date.now();
    },
    // 登录操作
    async login() {
      // this.$validator.validateAll();  表单整体效验
      const { phone, code, name, pwd, captcha } = this.ruleForm;
      const { loginWay } = this;
      let names;
      // 判断
      if (loginWay) {
        // 手机号码登录
        names = ["phone", "code"];
      } else {
        // 用户名/密码/ 图形验证码
        names = ["name", "pwd", "captcha"];
      }
      // 表单的验证
      const success = await this.$validator.validateAll(names);
      // 判断表单验证是否通过
      if (success) {
        let result;
        // 判断是那种方式进行登录
        console.log(loginWay);
        if (loginWay) {
          // 调用手机登录的接口
          console.log(code);
          result = await reqSmsLogin(phone, code);
          console.log(result);
          this.code = ""; // 清掉验证码
        } else {
          //  调用用户名/密码的接口
          result = await reqPwdLogin({ name, pwd, captcha });
          if (result.code !== 0) {
            // 刷新图形码
            this.sendCaptcha();
            this.captcha = ""; // 清空图形码
          }
        }
        console.log(result);
        // 判断调用接口之后的返回的结果的状态码 --- code:0
        if (result.code === 0) {
          // 登录成功
          const user = result.data;
          // 保存当前的用户信息
          this.$store.dispatch("saveUser", user);
          // 跳转页面
          this.$router.replace('/msite') // 我的 界面
          this.$message({ message: "登录成功", type: "success" });
        } else {
          this.$message("登录失败");
        }
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.loginContainer
  height 100%
  width 100%
  .login_header
    width 80%
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
    background-position 40% 50%
    height 590px
    .login_main
      width 85%
      margin 0 auto
      position relative
      .login_form
        width 450px
        position absolute
        top 20px
        right 0
        background-color #fff
        .login_header_title
          margin 40px auto
          text-align center
          font-size 30px
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
        .login_header_center
          width 100%
          >.demo-ruleForm
            >div
              display none
              &.on
                display block
                .el-form-item
                  position relative
                  .el-form-item__content
                    margin 0 50px !important
                    .get_verification
                      position absolute
                      top 50%
                      right 10px
                      transform translateY(-50%)
                      border 0
                      color #ccc
                      font-size 14px
                      background transparent
                      z-index 1000
                      &.right
                        color black
            .login_submit
              display block
              width 80%
              height 42px
              margin-top 30px
              border-radius 4px
              background rgb(255, 103, 0)
              color #fff
              text-align center
              font-size 16px
              line-height 42px
              border 0
              margin 20px auto
  .login_footer
    height 90px
    width 80%
    margin 20px auto
    text-align center
    color #757575
    .loginFooterT
      a
        margin 20px
        &:hover
          color #666666
    .loginFooterB
      padding-top 20px
      font-size 18px
      line-height 30px
      height 30px
</style>
