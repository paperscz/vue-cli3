<template>
  <div id="app">
    <p>下面的内容是一张图片哦,原图是12MB,配置了vue.config.js里面的图片压缩后,为2.88MB</p>
    <img src="../assets/images/mpa-one-details.jpg"/>
  </div>
  
</template>

<script>

export default {
  data() {
    return {
     
    }
  },
 
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
#app{
  p{
    padding:0 30px;
    line-height:50px;
    background:#ff6363;
    color:#fff;
  }
  img{
    max-width:100%;
  }
}
</style>


