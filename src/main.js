import Vue from 'vue'

import router from './router'
import index from './index'
import store from './store'
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(index)
}).$mount('#app')
