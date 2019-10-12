// 引入@babel/polyfill处理兼容
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './api/get.js'
// import './api/post.js'
import './plugins/element-ui.js'
import './style/index.less'
import './style/mobile.less'
import './guard' // 守卫
import '@/icons' // icon

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
