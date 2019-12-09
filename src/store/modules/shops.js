// 包含了多个间接修改状态数据的方法的对象
import { RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS, ADD_FOOD_COUNT, REDUCE_FOOD_COUNT, CLEAR_FOOD } from '../mutation-types'
// 引入api
import { reqGoods, reqInfo, reqRatings } from '../../api'
// 引入vue
import Vue from 'vue'
export default {
  state: {
    // goods 点餐
    goods: [],
    // 评论 ratings 
    ratings: [],
    // 商家 info
    info: {},
    // 用来存储购物车中的食物的
    cartFoods: []
  },
  mutations: {
    // 更新点餐信息
    [RECEIVE_GOODS] (state, { goods }) {
      state.goods = goods
    },
    // 更新评价信息
    [RECEIVE_RATINGS] (state, { ratings }) {
      state.ratings = ratings
    },
    // 更新商家信息
    [RECEIVE_INFO] (state, { info }) {
      state.info = info
    },
    // 增加食物
    [ADD_FOOD_COUNT] (state, { food }) {
      // 此时vuex中的数据--- food对象是响应式数据
      // 响应式数据:当数据变化,界面会重新渲染
      // 判断是否有count属性
      if (!food.count) {
        // 第一次点击加的时候 添加了这个count属性,并且默认添加了一个属性
        // food.count = 1
        Vue.set(food, 'count', 1)
        // 立即把食物对象添加到数组中
        state.cartFoods.push(food)
      } else {
        food.count++
      }
    },
    // 减少食物
    [REDUCE_FOOD_COUNT] (state, { food }) {
      if (food.count > 0) {
        food.count--
        if (food.count === 0) {
          // 从食物的数组中删除当前添加的食物
          state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
        }
      }
    },
    // // 清空食物
    // [CLEAR_FOOD] (state, { food }) {
    //   if (food.count > 0) {
    //     food.count === 0
    //     state.cartFoods.splice(0)
    //   }
    // }
  },
  actions: {
    // 获取点餐信息
    async getGoods ({ commit }) {
      const result = await reqGoods()
      if (result.code === 0) {
        const goods = result.data
        commit(RECEIVE_GOODS, { goods })
      }
    },
    // 获取商家信息
    async getInfo ({ commit }) {
      const result = await reqInfo()
      if (result.code === 0) {
        const info = result.data
        commit(RECEIVE_INFO, { info })
      }
    },
    // 获取评论信息
    async getRatings ({ commit }) {
      const result = await reqRatings()
      if (result.code === 0) {
        const ratings = result.data
        commit(RECEIVE_RATINGS, { ratings })
      }
    },
    // 增加或者减少食物的数量
    updateFoodCount ({ commit }, { isAdd, food }) {
      // 判断,是增加还是修改
      if (isAdd) {
        // 增加操作
        commit(ADD_FOOD_COUNT, { food })
      } else {
        // 修改操作
        commit(REDUCE_FOOD_COUNT, { food })
      }
    },
    // async clearFood ({ commit }, { food }) {
    //   commit(CLEAR_FOOD, { food })
    // },

  },
  getters: {
    // 总数量
    totalCount (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
    },
    // 总价格
    totalPrice (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count * food.price, 0)
    }
  }
}
