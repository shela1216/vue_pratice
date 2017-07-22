import App from 'components/App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
sync(store, router)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
const app = new Vue({
  router,
  store,
  ...App
})
export { app, router, store }

