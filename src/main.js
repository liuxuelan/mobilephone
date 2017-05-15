// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/rem.js'
import '../static/js/zepto.min.js'
import '../static/css/reset.css'
import VueResource from 'vue-resource'
import MintUI from '../node_modules/mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
