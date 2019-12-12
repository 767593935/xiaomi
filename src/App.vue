<template>
  <div>
    <router-view></router-view>
  </div>
  
</template>
<script>
import axios from "axios"


export default {
  data(){
    return {
      imgUrl:""
    }
  },
  components:{
   
  },
  async mounted(){}
  
}
</script>
<style lang="stylus">

</style>