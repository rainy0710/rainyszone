import Vue from 'vue';
import app from '../../components/app.vue';

// 移动端组件
const vm = new Vue({
  el: '#app',
  render: function (createComponent) {
    return createComponent(app);
  }
})
