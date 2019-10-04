<template>
  <div class="box" ref="box">
    <table>
      <tr>
        <th class="title">标题</th>
        <th class="description">内容简介</th>
        <th class="date">发布时间</th>
      </tr>
      <tr v-for="(item, index) in notes" :key="index">
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
      notes: [
        {
          category: ["随笔", "音乐", "电影", "文章"][0],
          title: "小雨宙rainy哈哈哈哈哈哈哈哈哈",
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
    // 请求随笔的notes数据

    // 若表格高度不够则手动添加高度
    if (this.notes.length <= 15) {
      this.$refs.box.style.height = "600px";
    }
  }
};
</script>
<style scoped>
div.box {
  width: 100%;
  margin: 10px auto;
}
</style>