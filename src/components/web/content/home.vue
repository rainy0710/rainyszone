<template>
  <div class="box">
    <div class="poster"></div>
    <div class="content" :style="{height: contentHeight + 'px'}" ref="content">
      <div
        class="card"
        v-for="(item, index) in dataList"
        :key="index"
        :style="{left: 315 * (index % numInLine) + 'px', top: 400 * Math.floor(index / numInLine) + 'px'}"
        @click="clickEvent(item.category, item.title)"
      >
        <div
          class="picture"
          :style="{ 'background': '#ddd url(\'' + item.picture + '\') center center no-repeat', 'background-size': 'cover' }"
        ></div>
        <div class="animation">
          <p class="title">{{ item.title }}</p>
          <div class="info">
            <span class="category">{{ ['随笔', '音乐', '电影', '文章'][+item.category] }}</span>
            <span
              class="date"
            >{{ [new Date(item.date).getDate(), new Date(item.date).getMonth() + 1, new Date(item.date).getFullYear()].join('/') }}</span>
          </div>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      // 首页展示的卡片数据
      dataList: [],
      // 每一行展示的卡片数量
      numInLine: 4,
      // 卡片盒子的高度
      contentHeight: 350,
      // 每次拉去的数据数量
      pageAmount: 20
    };
  },
  methods: {
    // 通过DOM2级事件加上动态绑定来降低事件触发频率
    resizeEvent: function() {
      window.removeEventListener("resize", this.resizeEvent);

      let timer = setTimeout(() => {
        // 更新盒子中每行显示的卡片数量
        this.numInLine = Math.floor(
          (this.$refs.content.offsetWidth + 45) / 315
        );

        // 更新盒子的高度
        this.contentHeight =
          400 * Math.ceil(+this.dataList.length / this.numInLine) - 50;

        // 再次绑定尺寸调整侦听事件
        window.addEventListener("resize", this.resizeEvent);
        clearTimeout(timer);
      }, 200);
    },
    // 获取dataList数据
    getData: function() {
      window.ajax(
        "GET",
        "/query/home",
        {
          offset: this.dataList.length,
          amount: this.pageAmount // 每次获取的数据数量
        },
        xmlHttp => {
          // 当拉取的数据不足时便取消滚动拉去数据
          if (JSON.parse(xmlHttp.responseText).length < this.pageAmount) {
            window.removeEventListener("scroll", this.scrollEvent);
          }
          // 将新获取的数据拼接在原有数据之后
          this.dataList = this.dataList.concat(
            JSON.parse(xmlHttp.responseText)
          );
          // 绑定尺寸调整侦听事件
          this.resizeEvent();
        },
        xmlHttp => {
          console.error("Query for home list failed!");
        }
      );
    },
    // 卡片点击的事件驱动函数，其中两个参数分别为：卡片的类型和资源的title值
    clickEvent(category, title) {
      if (+category === 1) {
        // 如果点击的为音乐music卡片
        // 音乐卡片的特殊处理
        console.log("点击了音乐卡片");
        return;
      }
      category = ["note", "", "movie", "essay"][+category];
      // 如果点击的不是音乐卡片则跳转页面至相应内容页
      window.location.href =
        window.location.origin + "/" + category + ".html?title=" + title;
    },
    // 当滚动至盒子底部时拉取dataList数据
    scrollEvent: function() {
      window.removeEventListener("scroll", this.scrollEvent);

      let timer = setTimeout(() => {
        if (
          this.$refs.content.offsetTop + this.$refs.content.clientHeight <=
          (document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop) +
            window.innerHeight
        ) {
          this.getData();
        }
        window.addEventListener("scroll", this.scrollEvent);
      }, 300);
    }
  },
  mounted() {
    // 初始化dataList
    this.getData();
    window.addEventListener("scroll", this.scrollEvent);
  }
};
</script>
<style scoped>
div.poster {
  position: relative;
  width: 100%;
  height: 500px;
  margin: 10px auto;
  background: #aaa url("/public/images/poster.jpg") center center no-repeat;
  background-size: cover;
}

div.content {
  position: relative;
  width: 100%;
  margin: 30px auto;
  /* 设置文字不能被选中 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

div.content div.card {
  position: absolute;
  width: 270px;
  height: 350px;
  background-color: #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  overflow: hidden;
}

div.content div.card div.picture {
  display: flex;
  width: 110%;
  height: 250px;
  align-items: center;
  justify-content: center;
  transform: translateX(-5%);
  transition: all 0.5s ease;
}

div.content div.card div.animation {
  position: absolute;
  width: 250px;
  height: 300px;
  padding: 10px 10px;
  left: 0;
  top: 250px;
  background-color: rgb(66, 63, 63);
  box-sizing: content-box;
  transition: all 0.5s ease;
}

div.content div.card div.animation p.title {
  height: 50px;
  line-height: 50px;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  font-family: "Bahnschrift SemiBold", "Consolas", "Arial Black",
    "Microsoft YaHei";
  color: #999;
  /* 单行显示标题内容，超出字符用省略号表示 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

div.content div.card div.animation div.info {
  height: 40px;
  line-height: 30px;
  text-align: left;
  font-size: 18px;
  font-weight: normal;
  font-family: "Bahnschrift SemiBold", "Consolas", "Arial Black",
    "Microsoft YaHei";
  color: #aaa;
}

div.content div.card div.animation div.info span.category {
  float: left;
  margin-left: 5px;
}

div.content div.card div.animation div.info span.date {
  float: right;
  margin-right: 10px;
}

div.content div.card div.animation p.description {
  height: 190px;
  font-size: 16px;
  font-family: "Bahnschrift", "Calibri", "STKaiti", "STFangsong",
    "Microsoft YaHei";
  color: #bbb;
  text-indent: 2em;
  /* 超出盒子部分的内容用省略号显示 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}

div.content div.card:hover div.picture {
  transform: translateX(0);
  width: 100%;
}

div.content div.card:hover div.animation {
  top: 50px;
}
</style>