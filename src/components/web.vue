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

/*
 * 以下样式属性为路由组件的公用样式
 */
div.box {
  width: 100%;
  margin: 10px auto;
}

table {
  width: 100%;
  text-align: center;
  vertical-align: center;
  color: #333;
  font-family: "Arial", "Microsoft YaHei";
  table-layout: fixed;
  /* 设置文字不能被选中 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

table tr {
  height: 36px;
}

table tr th {
  border-bottom: 1px solid #888;
  height: 40px;
}

table tr td {
  padding-left: 5px;
  font-size: 14px;
}

td,
th {
  /* 单行显示标题内容，超出字符用省略号表示 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
}

/* 标题部分的宽度 */
td:nth-child(1),
th:nth-child(1) {
  width: 30%;
}

/* 内容简介部分的宽度 */
td:nth-child(2),
th:nth-child(2) {
  width: 50%;
}

/* 发布日期部分的宽度 */
td:nth-child(3),
th:nth-child(3) {
  width: 20%;
}

tr:nth-child(even) {
  background-color: #ddd;
}

tr:nth-child(n + 2) {
  cursor: pointer;
  transition: all 0.5s ease;
}

tr:nth-child(n + 2):hover {
  background-color: white;
  box-shadow: 0 0 5px #888;
}
</style>