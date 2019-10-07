# Rainy's Zone数据库结构
***
## 数据结构
1. home

   ```json
   {
      category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
   title: 标题,
      picture: 海报url,
      description: 推荐描述,
      date: 发布日期
   }
   ```
2. note

   ```json
   {
       category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
       title: 标题,
       picture: 海报url,
       description: 推荐描述,
       date: 发布日期,
       url: 资源链接
   }
   ```

3. music

   ```json
   {
       category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
       title: 标题,
       picture: 海报url,
       description: 推荐描述,
       date: 发布日期,
       url: 资源链接,
   
       artist: 歌手,
       album: 专辑，
       time: 发行时间
   }
   ```

4. movie

   ```json
   {
       category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
       title: 标题,
       picture: 海报url,
       description: 推荐描述,
       date: 发布日期,
       url: 资源链接
   
       rate: 评分,
       time: 上映时间,
       director: 导演,
       type: 电影类型,
       region: 地区
   }
   ```

5. essay

   ```json
   {
       category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
       title: 标题,
       picture: 海报url,
       description: 推荐描述,
       date: 发布日期,
       url: 资源链接
   
       writer: 作者,
       nation: 国籍,
       time: 出版日期
   }
   ```

   

## API

1. 请求数据列表

   ```javascript
   /query/[home/note/music/movie/essay]
   参数一：offset 偏移量
   参数二：amount 数量
   返回值：数据对象数组
   ```

2. 查询数据

   ```javascript
   /query/[home/note/music/movie/essay]
   参数一：title 查询数据的标题
   返回值：数据对象
   ```

   