<template>
  <div class="out-box">
    <head-bar></head-bar>
    <router-view></router-view>
    <foot-info></foot-info>
  </div>
</template>
<script>
// 组件
import headBar from "./web/head-bar.vue";
import footInfo from "./web/foot-info.vue";

export default {
  components: {
    headBar,
    footInfo
  }
};
</script>
<style>
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
  border: none;
}

body {
  background-color: #eee;
}

div.out-box {
  width: 80%;
  margin: 0 auto;
}
</style>