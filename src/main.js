import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import './assets/static/css/iconfont.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
  // template:`
  // <div>
  // <button>替换按钮</button>
  // <h2>哈哈哈~~~~~1</h2>
  // </div>
  // `,
  
}).$mount('#app')
