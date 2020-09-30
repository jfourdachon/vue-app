import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vueLayers'
import App from './App.vue'
import router from './router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


Vue.config.productionTip = false;

// Use componets
Vue.component('app-nav-bar', Navbar);
Vue.component('app-footer', Footer);
Vue.filter('toUpperCase', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

/**
 * Chapter 12 video 3
 */
