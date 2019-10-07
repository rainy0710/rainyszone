<template>
  <div class="box" ref="content" :style="{height: lineHeight + 'px'}">
    <div
      class="card"
      v-for="(item, index) in dataList"
      :key="index"
      :style="{left: index % numInLine * 400 + 'px', top: parseInt(index / numInLine) * 300 + 'px' }"
      @click="clickEvent(item.title)"
    >
      <div
        class="poster"
        :style="{background: '#eee url(\'' + item.picture + '\') center center no-repeat', 'background-size': 'cover'}"
      ></div>
      <div class="info">
        <p class="title">{{ item.title }}</p>
        <p class="time">年代：{{ new Date(item.time).getFullYear() }}</p>
        <p class="director">导演：{{ item.director }}</p>
        <p class="type">类型：{{ item.type.join('，') }}</p>
        <p class="description">描述：{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      dataList: [],
      numInLine: 3, // 每行卡片数量
      lineHeight: 600, // 盒子的高度
      pageAmount: 20 // 每次拉取数据的数量
    };
  },
  methods: {
    // 通过DOM2级事件加上动态绑定来降低事件触发频率
    resizeEvent: function() {
      window.removeEventListener("resize", this.resizeEvent);

      let timer = setTimeout(() => {
        // 更新盒子中每行显示的卡片数量
        this.numInLine = Math.floor(this.$refs.content.offsetWidth / 400);

        // 更新盒子的高度
        this.lineHeight =
          this.dataList.length > this.numInLine
            ? 300 * Math.ceil(this.dataList.length / this.numInLine)
            : 600;

        // 再次绑定尺寸调整侦听事件
        window.addEventListener("resize", this.resizeEvent);
        clearTimeout(timer);
      }, 200);
    },
    // 获取dataList数据
    getData: function() {
      window.ajax(
        "GET",
        "/query/movie",
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
    // 卡片点击的事件驱动函数，参数为：资源的title值
    clickEvent(title) {
      window.location.href =
        window.location.origin + "/movie.html?title=" + title;
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
  mounted: function() {
    // 初始化dataList
    this.getData();
    window.addEventListener("scroll", this.scrollEvent);
  }
};
</script>
<style scoped>
div.box {
  position: relative;
}

div.card {
  display: block;
  position: absolute;
  width: 400px;
  height: 300px;
  cursor: pointer;
  transition: all 0.5s ease;
}

div.card:hover {
  box-shadow: 0 0 10px #888;
}

div.card div.poster {
  float: left;
  margin: 10px;
  width: 180px;
  height: 280px;
}

div.card div.info {
  float: right;
  width: 200px;
  height: 280px;
  padding: 10px;
  font-family: "Arial", "Microsoft Yahei";
  text-align: left;
  box-sizing: border-box;
  /* 设置文字不能被选中 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

div.card div.info p.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  font-weight: bold;
  color: #222;
}

div.card div.info p.time,
p.director,
p.type {
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  font-weight: normal;
  color: #444;
}

div.card div.info p.description {
  width: 100%;
  height: 150px;
  line-height: 25px;
  font-size: 14px;
  font-weight: normal;
  color: #444;
  /* 超出盒子部分的内容用省略号显示 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>