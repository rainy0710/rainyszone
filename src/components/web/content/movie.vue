<template>
  <div class="box" ref="content" :style="{height: lineHeight + 'px'}">
    <div
      class="card"
      v-for="(item, index) in movie"
      :key="index"
      :style="{left: index % numInLine * 400 + 'px', top: parseInt(index / numInLine) * 300 + 'px' }"
    >
      <div
        class="poster"
        :style="{background: '#eee url(\'' + item.picture + '\') center center no-repeat', 'background-size': 'cover'}"
      ></div>
      <div class="info">
        <p class="title">{{ item.title }}</p>
        <p class="year">年代：{{ item.time }}</p>
        <p class="director">导演：{{ item.director }}</p>
        <p class="type">类型：{{ item.type }}</p>
        <p class="description">描述：{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      movie: [
        {
          category: ["随笔", "音乐", "电影", "文章"][2],
          title: "说好不哭",
          picture: "/public/images/poster/说好不哭.jpg",
          description:
            "这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english",
          time: 2019,
          type: "MTV",
          director: "周杰伦",
          date: "10/2/2019",
          url: "#"
        }
      ],
      // 每行卡片数量
      numInLine: 3,
      // 盒子的高度
      lineHeight: 600
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
          this.movie.length > this.numInLine
            ? 300 * Math.ceil(this.movie.length / this.numInLine)
            : 600;

        // 再次绑定尺寸调整侦听事件
        window.addEventListener("resize", this.resizeEvent);
        clearTimeout(timer);
      }, 200);
    }
  },
  mounted: function() {
    // 根据获取的电影数量调整盒子高度和布局
    this.resizeEvent();
  }
};
</script>
<style scoped>
div.box {
  position: relative;
}

div.card {
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

div.card div.info p.year,
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