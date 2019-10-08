<template>
  <div class="box" v-cloak>
    <div
      class="img"
      ref="imgBox"
      :style="{ background: '#222 url(\'' + dataObj.picture + '\') center center no-repeat', 'background-size': 'contain'}"
    ></div>
    <div class="title" ref="titleBox">
      <span>{{ dataObj.title }}</span>
      <span>{{ dataObj.rate }}</span>
    </div>
    <div class="scroll">
      <div class="content">
        <!-- 通过controlslist属性隐藏视频标签的下载按钮 -->
        <video :src="dataObj.url" controls controlslist="nodownload"></video>
        <p class="title">{{ dataObj.title }} ({{ time }})</p>
        <p class="detail">
          导演：{{ dataObj.director }}
          <br />
          上映时间：{{ time }}
          <br />
          类型：{{ type }}
          <br />
          地区：{{ region }}
          <br />
          简介：{{ dataObj.description }}
        </p>
        <p class="notice">* 特别声明：本资源仅供学习和交流，请勿用于任何商业用途，如有侵权，还望提前告知下架，谢谢：rainy0710@qq.com</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      dataObj: {},
      type: "", // 影片类型
      region: "", // 所属地区
      time: "" // 上映时间
    };
  },
  methods: {
    // 窗口尺寸调节事件驱动函数
    windowResize: function() {
      window.removeEventListener("resize", this.windowResize);

      let timer = setTimeout(() => {
        let windowHeight = window.innerHeight;
        this.$refs.titleBox.style.height = windowHeight + "px";
        this.$refs.imgBox.style.height = windowHeight + "px";
        this.$refs.imgBox.style.filter =
          "blur(" +
          (15 *
            (document.documentElement.scrollTop ||
              window.pageYOffset ||
              document.body.scrollTop)) /
            windowHeight +
          "px)";
        window.addEventListener("resize", this.windowResize);
        clearTimeout(timer);
      }, 100);
    },
    // 滚动事件驱动函数
    scrollEvent: function() {
      window.removeEventListener("scroll", this.scrollEvent);

      let timer = setTimeout(() => {
        let windowHeight = window.innerHeight;
        let scrollHeight =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop;
        if (scrollHeight > windowHeight) {
          window.addEventListener("scroll", this.scrollEvent);
          return;
        }
        this.$refs.imgBox.style.filter =
          "blur(" + Math.round((15 * scrollHeight) / windowHeight) + "px)";

        window.addEventListener("scroll", this.scrollEvent);
        clearTimeout(timer);
      }, 100);
    }
  },
  created: function() {
    let title = /(.*) —— 电影分享/.exec(document.title)[1];
    // 初始化页面数据
    window.ajax(
      "GET",
      "/query/movie",
      {
        title: title
      },
      xmlHttp => {
        this.dataObj = JSON.parse(xmlHttp.responseText);
        // 判断是否有有效数据返回
        if (!this.dataObj) {
          window.location.href =
            window.location.origin + "/error.html?title=" + title;
          return;
        }
        this.region = this.dataObj.region.join("，");
        this.type = this.dataObj.type.join("，");
        this.time = new Date(this.dataObj.time).getFullYear();
      },
      xmlHttp => {
        window.location.href = window.location.origin + "/error.html";
      }
    );
  },
  mounted: function() {
    let windowHeight = window.innerHeight;
    this.$refs.titleBox.style.height = windowHeight + "px";
    this.$refs.imgBox.style.height = windowHeight + "px";

    this.windowResize();
    this.scrollEvent();
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
  background-color: #222;
}

[v-cloak] {
  display: none;
}

div.box {
  width: 100%;
}

div.img {
  width: 100%;
  transition: all 0.1s ease;
  position: fixed;
  z-index: -10;
}

div.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 75%;
  margin: 0 auto;
}

div.title span:nth-child(1) {
  color: #eee;
  text-shadow: 0px 0px 20px #333;
  font-size: 45px;
  line-height: 100px;
  font-family: "Arial", "Microsoft YaHei";
}

div.title span:nth-child(2) {
  color: rgb(151, 185, 55);
  font-size: 40px;
  line-height: 75px;
  text-shadow: 0px 0px 1px #666;
  font-family: "Bell MT", "Harlow Solid Italic", "Arial";
}

div.scroll {
  width: 100%;
  padding: 20px 0;
  box-shadow: 0 -3px 20px 10px rgba(0, 0, 0, 0.7);
  background-color: #ddd;
}

div.content {
  width: 75%;
  margin: 0 auto;
}

div.content video {
  width: 100%;
  height: auto;
  background-color: black;
}

div.content p.title {
  height: 35px;
  line-height: 35px;
  font-size: 24px;
  font-weight: bolder;
  color: #333;
  font-family: "Arial", "Microsoft YaHei";
  margin-top: 20px;
}

div.content p.detail {
  font-size: 16px;
  color: #222;
  font-family: "Arial", "Microsoft YaHei";
  line-height: 30px;
  margin-top: 10px;
}

p.notice {
  padding-top: 100px;
  color: red;
}
</style>