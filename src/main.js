import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// 引入全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Index from './components/Index'
import Join from './components/Join'

const routes = [
  { path: '/', component: Index },
  { path: '/join', component: Join }
];
const router = new VueRouter({
  routes
});
Vue.use(Mint);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
