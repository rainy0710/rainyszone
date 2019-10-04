<template>
  <div class="box" ref="box">
    <table>
      <tr>
        <th class="title">标题</th>
        <th class="description">内容简介</th>
        <th class="data">发布时间</th>
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

table {
  width: 100%;
  text-align: center;
  vertical-align: center;
  color: #333;
  font-family: "Arial", "Microsoft YaHei";
  table-layout: fixed;
  /* 设置文字不能被选中 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

table tr {
  height: 36px;
}

table tr th {
  border-bottom: 1px solid #888;
  height: 40px;
}

table tr td {
  font-size: 14px;
}

td,
th {
  /* 单行显示标题内容，超出字符用省略号表示 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
}

/* 标题部分的宽度 */
td:nth-child(1),
th:nth-child(1) {
  width: 30%;
}

/* 内容简介部分的宽度 */
td:nth-child(2),
th:nth-child(2) {
  width: 50%;
}

/* 发布日期部分的宽度 */
td:nth-child(3),
th:nth-child(3) {
  width: 20%;
}

tr:nth-child(even) {
  background-color: #ddd;
}

tr:nth-child(n + 2) {
  cursor: pointer;
  transition: all 0.5s ease;
}

tr:nth-child(n + 2):hover {
  background-color: white;
  box-shadow: 0 0 5px #888;
}
</style>