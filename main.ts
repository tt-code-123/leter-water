import App from "./App.vue";
import uviewPlus from '@/uni_modules/uview-plus'

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
import mpHtml from "./uni_modules/mp-html/components/mp-html/mp-html.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  app.component("uni-icons", uniIcons);
  app.component("mp-html",mpHtml)
  return {
    app,
  };
}
// #endif
