// 引入Vue
import Vue from 'vue'
// 引入表单验证插件
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
const config = {
  errorBagName: 'errorBags', // change if property conflicts.
  fieldsBagName: 'fieldBags',
}
// 声明使用
Vue.use(VeeValidate, config)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  // 属性的提示信息
  attributes: {
    phone: '手机号码',
    code: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '图形验证码'
  }
})
VeeValidate.Validator.extend('changePhone', {
  getMessage: (field) => `请输入正确的` + field,
  validate: (value) => {
    return /[1]\d{10}/.test(value)
  }
});

VeeValidate.Validator.extend('code', {
  getMessage: (field) => `请输入正确的` + field,
  validate: (value) => {
    return /\d{6}/.test(value)
  }
});
