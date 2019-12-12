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
        <el-form
          ref="form"
          :rules="rules"
          :model="form"
          label-position="top"
        >
          <el-form-item label="国家/地区">
            <el-select
              v-model="countryValue"
              placeholder="中国"
              style="width:300px"
            >
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label"
              >
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-option-group>
            </el-select>
            <p>
              成功注册帐号后，国家/地区将不能被修改</p>
          </el-form-item>
          <el-form-item
            label="手机号码"
            prop="phone"
          >
            <el-select
              v-model="phoneValue"
              placeholder="+86"
              style="width:70px"
            >
            </el-select>
            <el-input
              class="inp"
              v-model="form.phone"
              auto-complete="true"
              style="width:300px"
            ></el-input>
          </el-form-item>
          <el-button
            class="btn-login"
            type="warning"
            size="medium"
            @click="submitForm('form')"
          >立即注册</el-button>
        </el-form>

      </article>
      <footer>

        <p class="haveRead">已阅读并同意：小米 <span>用户协议</span>和 <span>隐私政策</span></p>
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
import { Message } from "element-ui";
import { mapActions, mapState } from "vuex";
import {reqSendCode} from "../../api"
export default {
  data() {
    var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入电话号码"));
      }
      setTimeout(() => {
        if (!phoneReg.test(value)) {
          callback(new Error("格式有误"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        phone: ""
      },
      options: [
        {
          label: "A",
          options: [
            {
              value: "America",
              label: "美国"
            },
            {
              value: " Austria",
              label: " 澳大利亚"
            }
          ]
        },
        {
          label: "B",
          options: [
            {
              value: "brazil",
              label: "巴西"
            }
          ]
        },
        {
          label: "C",
          options: [
            {
              value: "China",
              label: "中国"
            }
          ]
        },
        {
          label: "D",
          options: [
            {
              value: "Holland",
              label: " 荷兰"
            }
          ]
        },
        {
          label: "E",
          options: [
            {
              value: "England",
              label: " 英国"
            }
          ]
        },
        {
          label: "F",
          options: [
            {
              value: "Finland",
              label: " 芬兰"
            },
            {
              value: "France",
              label: " 法国"
            }
          ]
        },
        {
          label: "G",
          options: [
            {
              value: "Germany",
              label: " 德国"
            },
            {
              value: " Greece",
              label: " 希腊"
            }
          ]
        },
        {
          label: "I",
          options: [
            {
              value: " India",
              label: " 印度"
            },
            {
              value: "  Italy",
              label: " 意大利"
            }
          ]
        },
        {
          label: "J",
          options: [
            {
              value: " Japan",
              label: " 日本"
            }
          ]
        },
        {
          label: "K",
          options: [
            {
              value: " Korea",
              label: " 韩国"
            }
          ]
        },
        {
          label: "N",
          options: [
            {
              value: "  Nigeria",
              label: "  尼日利亚"
            },
            {
              value: "  Norway",
              label: "  挪威"
            }
          ]
        },
        {
          label: "R",
          options: [
            {
              value: "   Russia",
              label: "  俄罗斯"
            }
          ]
        },
        {
          label: "S",
          options: [
            {
              value: "   Spain",
              label: "  西班牙"
            },
            {
              value: "   Sweden",
              label: "  瑞典"
            }
          ]
        },
        {
          label: "T",
          options: [
            {
              value: "   Thailand",
              label: "  泰国"
            },
            {
              value: "   turkey",
              label: "  土耳其"
            }
          ]
        }
      ],
      countryValue: "",
      phoneValue: "",

      rules: {
        // 校验手机号码，主要通过validator来指定验证器名称
        phone: [{ required: true, validator: validatePhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
          //如果通过验证 to do...
          console.log(this.form.phone);
          const phone = this.form.phone;
          this.$store.dispatch("savePhone", phone);
          const result = await reqSendCode(phone);
          if (result.code === 0) {
            Message.success("发送成功");
            this.$router.replace("/registerSend");
          } else {
            Message.error("提示", "发送失败");
          }
         
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  computed: {
    ...mapState({
      phone: state => state.phone
    })
  }
};
</script>
<style lang="stylus">
body
  background-color #F9F9F9
.main
  width 800px
  height 550px
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
    .btn-login
      width 350px
      margin-bottom 30px
      background-color #FF6700
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
      padding 0 10px
      font-size 14px
      color #777
      border-right 1px solid #ccc
      margin 10px
    li:hover
      color #000
    li:nth-child(4)
      border-right none
  p
    font-size 14px
    color #999
</style>