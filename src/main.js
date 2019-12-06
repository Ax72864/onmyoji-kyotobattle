import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.gConfig = {
  mapX: 30,
  mapY: 26
}
new Vue({
  render: function(h){
    return h(App)
  },
}).$mount('#app')