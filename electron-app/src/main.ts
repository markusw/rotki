import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './filters';
import { Api } from '@/plugins/api';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
import vuetify from '@/plugins/vuetify';
import '@babel/polyfill';
import { setupPremium } from '@/utils/premium';

Vue.config.productionTip = false;

Vue.use(Api);
setupPremium();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
