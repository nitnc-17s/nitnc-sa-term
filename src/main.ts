import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueScrollTo, { offset: 200 });

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
