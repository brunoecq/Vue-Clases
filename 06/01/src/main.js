import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/* eslint-disable */
var vm = new Vue({
  render: h => h(App),
}).$mount('#app')

window.vm = vm
//vm.$children[0].$children[1].nombreCompleto = "Mario Vargas"
//vm.$children[0].$children[1].nombre
//vm.$children[0].manolo.nombre = "Ernesto"
