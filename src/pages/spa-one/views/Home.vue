<template>
  <h2>Home page 2222</h2>
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