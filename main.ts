import App from "./App.vue";

// #ifndef VUE3
import Vue from "vue.vue";
import "./uni.promisify.adaptor";
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
import uniIcons from "@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.component("uni-icons", uniIcons);
  return {
    app,
  };
}
// #endif
