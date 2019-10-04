<template>
  <div class="box" ref="box">
    <table>
      <tr>
        <th class="title">歌曲名</th>
        <th class="description">分享描述</th>
        <th class="date">分享时间</th>
      </tr>
      <tr v-for="(item, index) in music" :key="index">
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
      music: [
        {
          category: ["随笔", "音乐", "电影", "文章"][1],
          title: "说好不哭",
          picture: "/public/images/girl.jpg",
          description:
            "这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english这是关于该卡片的描述，可能不够长，所以说点废话hahaha try the english",
          date: "10/2/2019",
          url: "#"
        }
      ]
    };
  },
  mounted: function() {
    // 请求音乐的music数据

    // 若表格高度不够则手动添加高度
    if (this.music.length <= 15) {
      this.$refs.box.style.height = "600px";
    }
  }
};
</script>