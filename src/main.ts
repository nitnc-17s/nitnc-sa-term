import SmoothScroll from "smooth-scroll";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  offset: 100,
  updateURL: true,
  popstate: true,
  emitEvents: true
});

let BeforeEvent: any;
document.addEventListener(
  "scrollStart",
  (event: any) => {
    if (BeforeEvent != undefined) {
      BeforeEvent.detail.anchor.classList.remove("doc-link-target");
    }
    event.detail.anchor.classList.add("doc-link-target");
    BeforeEvent = event;
  },
  false
);
