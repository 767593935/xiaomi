

import {reqshops} from "../../api/index"
import {RECEIVE_HOUSEHOLD,RECEIVE_PHONE,RECEIVE_RECOMMEND,RECEIVE_IDENTIFY,RECEIVE_ID} from "../mutation-types"
const state={
  household:[],
  phone:[],
  recommend:[]
}
const mutations={
  [RECEIVE_HOUSEHOLD](state,household){
    state.household=household
  },
  [RECEIVE_PHONE](state,phone){
    state.phone=phone
  },
  [RECEIVE_RECOMMEND](state,recommend){
    state.recommend=recommend
  },
  [RECEIVE_IDENTIFY](state,identify){
    state.identify=identify
  },
  [RECEIVE_ID](state,id){
    state.id=id
  }
}
const actions={
  async getHousehold({commit}){
    const result=await reqshops()
    if(result.code===0){
      const household=result.data.household
      commit(RECEIVE_HOUSEHOLD,household)
    }
  },
  async getPhone({commit}){
    const result=await reqshops()
    if(result.code===0){
      const phone=result.data.phone
      commit(RECEIVE_PHONE,phone)
    }
  },
  async getRecommend({commit}){
    const result=await reqshops()
    if(result.code===0){
      const recommend=result.data.recommend
      commit(RECEIVE_RECOMMEND,recommend)
    }
  }
  
}
const getters={}
export default {
  state,
  mutations,
  actions,
  getters

}