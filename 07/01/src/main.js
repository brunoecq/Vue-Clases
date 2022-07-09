import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/* eslint-disable */
Vue.filter('formattedId', (value, decimals = 2)=> {
  if (!value) return 0
  return value.toFixed(decimals)
 })

Vue.mixin({
  methods:{
    globalAlert(msg){
      alert(msg)
    }
  }
 })
 

new Vue({
  render: h => h(App),
}).$mount('#app')
