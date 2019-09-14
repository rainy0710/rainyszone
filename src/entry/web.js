import Vue from 'vue';
import web from '../components/web.vue';

// PC端组件
const vm = new Vue({
  el: '#web',
  render: function (createComponent) {
    return createComponent(web);
  }
})