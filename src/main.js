import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入组件
import Vant from 'vant'

//引入组件css
import 'vant/lib/index.css';

//注册组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
