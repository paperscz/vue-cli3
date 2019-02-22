<template>
  <div id="app">
    <div class="tips">
      <img src="../assets/images/logo-absolute.png"/>
      <div>在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理</div>
    </div>
    
    <div class="tips">
      <img src="/logo-relative.png"/>
      <div>放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理</div>
    </div>

    <div class="tips">
      <img src="@/pages/mpa-one/assets/images/logo-@.png"/>
      <div>如果 URL 以 @ 开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 /src 的别名 @</div>
    </div>

    <p>下面的内容是一张图片哦,原图12MB,在压缩网站上压缩了一下后为1.71MB,配置了vue.config.js里面的图片压缩后,为1.54MB</p>
    <img src="../assets/images/mpa-one-details-zip.jpg"/>

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
  .tips{
    overflow: hidden;
    margin:30px 0;
    img{
      width:100px;
      height:100px;
      overflow: hidden;
      float:left;
    }
    div{
      width:600px;
      padding:10px;
      line-height:40px;
      float:left;
    }
  }

  p{
    padding:0 30px;
    line-height:50px;
    background:#ff6363;
    color:#fff;
    &+img{
      max-width:100%;
      width:100%;
    }
  }
  
}
</style>