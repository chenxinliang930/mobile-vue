import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
// 导入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
// 导入rem适配
import './js/rem'
// 注册
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
