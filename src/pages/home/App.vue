<template>
  <div id="app">
    <div @click="gotToPage('../mpa-one/detail/index.html')">mpa-one/detail/index.html</div>
    <div @click="gotToPage('../mpa-one/list/index.html')">mpa-one/list/index.html</div>
    <div @click="gotToPage('../mpa-two/detail/index.html')">mpa-two/detail/index.html</div>
    <div @click="gotToPage('../mpa-two/list/index.html')">mpa-two/list/index.html</div>
    <div @click="gotToPage('../spa-one/index/index.html')">spa-one/index/index.html</div>
  </div>
  
</template>

<script>

export default {
  data() {
    return {
    }
  },
 
  methods: {
    gotToPage(page) {
      location.assign(page)
    }
  }
}
</script>

<style scoped>
#app div{
  width:460px;
  background: #409EFF;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #409EFF;
  color: #fff;
  box-sizing: border-box;
  outline: none;
  margin: 30px auto;
  transition: .1s;
  font-weight: 500;
  padding: 24px 20px;
  font-size: 28px;
  border-radius: 10px;
}
</style>


