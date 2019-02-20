<template>
  <h2>Detail page 1111</h2>
</template>

<script>
// 接口api
import {
  getWechatUser
} from '@/pages/spa-one/api/api'

export default {
  method:{
    getData(){
      
      getWechatUser({code:1}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

