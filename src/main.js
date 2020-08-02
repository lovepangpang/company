import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// 引入全部组件
import 'normalize.css/normalize.css'
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Index from './components/Index'
import Join from './components/Join'
import {remEvent} from './common/event.js'

const routes = [
  { path: '/', component: Index },
  { path: '/join', component: Join }
];
const router = new VueRouter({
  routes
});
// Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

remEvent();