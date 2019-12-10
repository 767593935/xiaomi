<template>
  <div>
     <!-- <Register/> -->
     <RegisterSend/>
     <!-- <router-link to="/category">点击跳转</router-link>
     <router-view></router-view> -->
  </div>
  
</template>
<script>
import axios from "axios"
// import Register from "./components/Register"
import RegisterSend from "./components/RegisterSend"
import {reqFirstView} from "./api/index"

export default {
  data(){
    return {
      imgUrl:""
    }
  },
  components:{
    // Register,
    RegisterSend
  },
  async mounted(){
    /* const result=await reqFirstView()
    console.log(result) */
    axios.get(`/api/shops`)
    .then((res)=>{
      console.log(res)
    })
  }
}
</script>
<style lang="stylus">

</style>