<template>
  <div id="app">
    <h3>我是单页面路由</h3>
    <router-link to="/home">Home</router-link><br/>
    <router-link to="/detail">Detail</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

