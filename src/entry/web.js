// 引入Vue模块
import Vue from 'vue';
// 使用桌面端组件
import web from '../components/web.vue';
// 引入Vue-Router模块
import VueRouter from 'vue-router';
import webRouter from "../route/web-router.js";
Vue.use(VueRouter);
let webRouterObj = new VueRouter(webRouter);

// PC端组件
const vm = new Vue({
  el: '#web',
  render: function (createComponent) {
    return createComponent(web);
  },
  router: webRouterObj
})