<template>
  <div class="box" ref="content">
    <table>
      <tr>
        <th class="title">歌曲名</th>
        <th class="description">分享描述</th>
        <th class="date">分享时间</th>
      </tr>
      <tr v-for="(item, index) in dataList" :key="index" @click="clickEvent(item.title)">
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      dataList: [],
      pageAmount: 20 // 每次拉取数据的数量
    };
  },
  methods: {
    // 获取dataList数据
    getData: function() {
      window.ajax(
        "GET",
        "/query/music",
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
        },
        xmlHttp => {
          console.error("Query for music list failed!");
        }
      );
    },
    // 卡片点击的事件驱动函数，参数为：资源的title值
    clickEvent(title) {
      window.ajax(
        "GET",
        "/music.html",
        {
          title: title
        },
        xmlHttp => {
          // 音乐播放上报成功
        },
        xmlHttp => {
          console.error("音乐《" + title + "》点击播放上报失败！");
        }
      );
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
  created: function() {
    // 初始化dataList数据
    this.getData();
    // 绑定滚动事件驱动函数
    window.addEventListener("scroll", this.scrollEvent);
  }
};
</script>
<style scoped>
div.box {
  min-height: 600px;
}
</style>