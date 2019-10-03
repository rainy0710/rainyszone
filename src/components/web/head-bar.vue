<template>
  <div class="box">
    <div class="left" ref="toHome">
      <img src="/public/images/favicon.ico" class="logo" alt="Logo Img" />
      <p class="title">小雨宙</p>
    </div>
    <div class="right">
      <ul class="nav">
        <router-link to="home" tag="li" ref="home">首页</router-link>
        <router-link to="note" tag="li" ref="note">随笔</router-link>
        <router-link to="music" tag="li" ref="music">音乐</router-link>
        <router-link to="movie" tag="li" ref="movie">电影</router-link>
        <router-link to="essay" tag="li" ref="essay">文章</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
  mounted() {
    // 添加点击Logo回到主页功能
    this.$refs.toHome.addEventListener("click", () => {
      window.location.hash = "/";
    });
  }
};
</script>
<style scoped>
/* 导航栏整体样式 */
div.box {
  width: 100%;
  height: 100px;
  /* 设置文字不能被选中 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* 导航栏左侧Logo区域 */
div.left {
  display: flex;
  align-items: center;
  float: left;
  height: 100%;
  cursor: pointer;
}

div.left img.logo {
  height: 80px;
  margin: 0 30px;
}

div.left p.title {
  font-size: 48px;
  font-family: "Bahnschrift SemiBold", "华文隶书";
}

/* 导航栏右侧导航区域 */
div.right {
  float: right;
  width: 40%;
  height: 100%;
}

div.right ul.nav {
  display: flex;
  position: relative;
  list-style: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

div.right ul.nav li {
  font-size: 20px;
  font-family: "Arial", "Microsoft Yahei";
  width: 15%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #666;
  cursor: pointer;
  transition: all 0.5s ease;
}

div.right ul.nav li:hover {
  color: black;
  text-shadow: 5px 5px 5px #666;
  font-weight: bold;
}

/* 选中的导航栏标签加上下划线 */
div.right ul.nav li.router-link-active {
  border-bottom: 2px solid #666;
  box-shadow: 0 2px 0 #666;
}
</style>