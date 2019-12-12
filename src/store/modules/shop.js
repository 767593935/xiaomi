/* // 包含了多个状态数据,直接修改状态数据的方法的对象,间接修改状态数据的方法的对象,状态数据的计算属性的get操作的方法
import { RECEIVE_SHOPS, ADD_FOOD_COUNT, REDUCE_FOOD_COUNT } from '../mutation-types'
import {  reqshops } from '../../api'
// 引入Vue
import Vue from 'vue'
const state = {
  // 获取可以进行点击购买的商品
  shops:{},
  cartFoods:[]
}
const mutations = {
  // 更新点餐信息
  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops
  },
  // 增加食物
  [ADD_FOOD_COUNT] (state, { food }) {
    // 此时vuex中的数据--food对象是响应式数据:
    // 响应式数据:当数据变化,界面会重新渲染,
    // 判断是否有count属性
    if (!food.count) {
      // 第一次点击加的时候,添加了这个count属性,并且默认添加了1个属性
      // food.count = 1
      Vue.set(food,'count',1)
      // 立刻把食物对象添加到数组中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  // 减少食物
  [REDUCE_FOOD_COUNT] (state, { food }) {
    if (food.count > 0) {
      food.count--
      if(food.count===0){
        // 从食物的数组中删除当前添加的食物
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
}
const actions = {
  // 获取点餐信息
  async getShops ({ commit }) {
    const result = await reqshops()
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
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
  }
}
const getters = {
  // 总数量
  totalCount(state){
    return state.cartFoods.reduce((pre,food)=>pre+food.count ,0)
  },
  // 总价格
  totalPrice(state){
    return state.cartFoods.reduce((pre,food)=>pre+food.count*food.price ,0)
  }

} */
import {SAVE_COMMODITY,ADD_GOOD,REMOVE_GOOD,REDUCE_GOOD,UPDATE_ISCHECKED} from "../mutation-types"
import Vue from "vue"

const state={
  commodity:JSON.parse(localStorage.getItem('goodDetail'))||{},
  // 商品列表
  cartGoods:JSON.parse(localStorage.getItem('cartGoods'))||[]
}
const mutations={
  [SAVE_COMMODITY](state,commodity){
    state.commodity=commodity
  },
  // 添加商品
  [ADD_GOOD](state,good){
    const result=state.cartGoods.find((item)=>{
       return item.name===good.name
     })
     console.log(result)
    if(result){
      result.count++
    }else{
      Vue.set(good,'count',1)
      Vue.set(good,'isChecked',true)
      state.cartGoods.push(good)
    }
    localStorage.setItem('cartGoods',JSON.stringify(state.cartGoods))
    
  },
  // 减少商品
  [REDUCE_GOOD] (state, { good }) {
    const result = state.cartGoods.find((item) => {
      return item.name === good.name
    })
    if (result) {
      result.count--
      if (result.count === 0) {
        console.log(this)
        this._vm.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this._vm.$message({
            type: 'success',
            message: '删除成功!'
          });
          state.cartGoods.splice(state.cartGoods.indexOf(good), 1)
          localStorage.setItem('cartGoods', JSON.stringify(state.cartGoods))
        }).catch(() => {
          this._vm.$message({
            type: 'info',
            message: '已取消删除'
          });
          Vue.set(good, 'count', 1)
        });
      }
    }
    localStorage.setItem('cartGoods', JSON.stringify(state.cartGoods))
  },

  // 删除商品
  [REMOVE_GOOD] (state, { good }) {
    this._vm.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this._vm.$message({
        type: 'success',
        message: '删除成功!'
      });
      state.cartGoods.splice(state.cartGoods.indexOf(good), 1)
      localStorage.setItem('cartGoods', JSON.stringify(state.cartGoods))
    }).catch(() => {
      this._vm.$message({
        type: 'info',
        message: '已取消删除'
      });
    });
  },
  // // 删除商品
  // [REMOVE_GOOD](state,good){
  //   const result=state.cartGoods.find((item)=>{
  //     return item.name===good.name
  //   })

  //  if(result){
  //    result.count--
  //    result.isChecked=false
  //  }
  //   localStorage.setItem('cartGoods',JSON.stringify(state.cartGoods))
  // },
  // 更改是否被选中
// [UPDATE_ISCHECKED](state,good){
//   const result=state.cartGoods.find((item)=>{
//     return item.name===good.name
//   })
//   console.log(result)
//   result.isChecked=!result.isChecked
//   localStorage.setItem('cartGoods',JSON.stringify(state.cartGoods))
// },

}

const actions={
  saveCommodity ({ commit }, commodity) {
    localStorage.setItem('goodDetail', JSON.stringify(commodity))
    commit(SAVE_COMMODITY, commodity)
  },
  addGood ({ commit }, { isAdd, good }) {
    if (isAdd) {
      commit(ADD_GOOD,  good )
    } else {
      // 修改操作
      commit(REDUCE_GOOD, { good })
    }
  },
  removeGood ({ commit }, { good }) {
    commit(REMOVE_GOOD, { good })
  }
  
}
const getters={

}
export default {
  state,
  mutations,
  actions,
  getters
}