import 'es6-promise/auto';
import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import router from './router';

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = false;

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
