// 引入ajax
import ajax from './ajax.js'
// 定义一个常量,设置地址
const BASE = '/api'

// 获取可购买商品列表
export const reqshops=()=>ajax({
  method:'GET',
  url:BASE+'/shops'
})
// 发送手机验证码
export const reqSendCode = (phone) => ajax({
  method: 'GET',
  url: BASE + `/sendcode`,
  params: {
    phone
  }
})

// 手机号码登录
export const reqSmsLogin = (phone, code) => ajax({
  method: 'POST',
  url: BASE + `/login_sms`,
  data: {
    phone,
    code
  }
})

// 用户名和密码和图形验证码
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax({
  method: 'POST',
  url: BASE + `/login_pwd`,
  data: {
    name,
    pwd,
    captcha
  }
})

// 自动登录
export const reqAutoLogin = () => ajax({
  method: 'GET',
  url: BASE + `/auto_login`,
  headers: {
    needToken: true // 标识:需要携带token
  }
})
// 搜索
export const reqSearch = (name) => ajax({
  method: 'GET',
  url: BASE + `/search`,
  params:{
    name
  }
})

// 首页头部数据
export const reqFirstView = () => ajax({
  method: 'GET',
  url: BASE + `/firstView`
})
// 搜索
export const reqSearchList = (searchName) =>ajax({
  method:'GET',
  url:BASE+`/search?name=${searchName}`,
})



/* // 获取点餐
export const reqGoods = () => ajax('/goods')
// 获取评价
export const reqRatings = () => ajax('/ratings')
// 获取商家
export const reqInfo = () => ajax('/info') */