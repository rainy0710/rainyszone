// 引入Vue模块
import Vue from 'vue';
// 使用桌面端组件
import movie from '../../components/web/page/movie.vue';
// 引入ajax方法
window.ajax = require('../../lib/ajax');

// PC端组件
const vm = new Vue({
  el: '#movie',
  render: function (createComponent) {
    return createComponent(movie);
  }
})