<template>
  <div class="box">
    <div class="poster"></div>
    <div class="content" :style="{height: contentHeight + 'px'}" ref="content">
      <div
        class="card"
        v-for="(item, index) in cards"
        :key="index"
        :style="{left: 315 * (index % numInLine) + 'px', top: 400 * Math.floor(index / numInLine) + 'px'}"
      >
        <div class="picture">
          <img :src="item.picture" alt="图片获取失败 :(" />
        </div>
        <div class="animation">
          <p class="title">{{ item.title }}</p>
          <div class="info">
            <span class="category">{{ item.category }}</span>
            <span class="date">{{ item.date }}</span>
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
      cards: [
        {
          // category类型：0——随笔 1——音乐 2——电影 3——文章
          category: ["随笔", "音乐", "电影", "文章"][0],
          title: "小雨宙rainy哈哈哈哈哈哈哈哈哈",
          picture: "/public/images/girl.jpg",
          description:
            "这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english",
          date: "10/2/2019",
          url: "#"
        }
      ],
      // 每一行展示的卡片数量
      numInLine: 4,
      // 卡片盒子的高度
      contentHeight: 350
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
          400 * Math.ceil(+this.cards.length / this.numInLine) - 50;

        // 再次绑定尺寸调整侦听事件
        window.addEventListener("resize", this.resizeEvent);
        clearTimeout(timer);
      }, 200);
    }
  },
  mounted() {
    // 绑定尺寸调整侦听事件
    this.resizeEvent();
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
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
}

div.content div.card div.picture img {
  width: auto;
  height: 110%;
  transition: all 0.5s ease;
}

div.content div.card div.animation {
  position: absolute;
  width: 250px;
  height: 300px;
  padding: 10px 10px;
  left: 0;
  top: 250px;
  background-color: #ddd;
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
  color: #555;
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
  color: #777;
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
  color: #777;
  text-indent: 2em;
  /* 超出盒子部分的内容用省略号显示 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}

div.content div.card:hover div.picture img {
  height: 100%;
}

div.content div.card:hover div.animation {
  top: 50px;
}
</style>