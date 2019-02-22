import Vue from 'vue'
import App from './App.vue'
// rem设置
import 'utils/common'

Vue.config.productionTip = false

window.vm = new Vue({
  render: h => h(App),
}).$mount('#app')
