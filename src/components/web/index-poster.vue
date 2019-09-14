<template>
  <div class="box">
    <div ref="bgPic" id="backgroundPic"></div>
    <div id="posterCover"></div>
  </div>
</template>
<script>
export default {
  methods: {
    // 鼠标滚动驱动函数
    scrollEvent() {
      window.removeEventListener("scroll", this.scrollEvent);

      setTimeout(() => {
        let scrollHeight = parseInt(
          document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop
        );
        if (+scrollHeight >= 600) {
          window.addEventListener("scroll", this.scrollEvent);
          return;
        }
        this.$refs.bgPic.style.filter =
          "blur(" + 15 * (+scrollHeight / 600) + "px)";
        window.addEventListener("scroll", this.scrollEvent);
      }, 100);
    }
  },
  mounted() {
    // 挂载页面滚动驱动函数以使背景跟随页面滚动调节模糊度
    window.addEventListener("scroll", this.scrollEvent);
  }
};
</script>
<style scoped>
div#backgroundPic {
  width: 100%;
  height: 800px;
  position: fixed;
  top: 0;
  left: 0;
  background: #000 url("/public/images/girl.jpg") center center no-repeat;
  background-size: 100% auto;
  filter: blur(0px);
  z-index: -100;
}

div#posterCover {
  width: 100%;
  height: 600px;
}
</style>