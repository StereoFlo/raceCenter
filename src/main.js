// for vuex
import 'es6-promise/auto';

import Vue from 'vue';
import App from '@/components/App';
import routes from '@/router';
import store from '@/store';
import '@/assets/styles/variables.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/form-item.css';
// import 'element-ui/lib/theme-chalk/carousel.css';
import 'font-awesome/css/font-awesome.min.css';

const router = routes(store);

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
