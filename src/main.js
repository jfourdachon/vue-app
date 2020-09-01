import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueResource from 'vue-resource'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/api/v1';

new Vue({
  render: h => h(App),
}).$mount('#app')
