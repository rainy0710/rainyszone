# Rainy's Zone数据库结构
*** 
## home
## note
## music
## movie
1. 数据结构
  ```json
  {
    category: 2——电影,
    title: 电影名称string,
    picture: 海报url,
    description: 推荐理由string,
    date: 发布时间,
    url: 资源链接string,

    rate: 电影评分float,
    time: 上映时间int,
    director: 导演,
    type: 电影类型string,
    region: 地区
  }
  ```
2. 请求接口
* 请求电影列表
  ```javascript
  api: /query/movie
  params: {
    offset: 偏移量(从0开始)
    amount: 请求数量(默认为9)
  }
  return: [{
    category: 2,
    title: 电影名称,
    picture: 海报url,
    description: 推荐理由,
    date: 发布时间,
    url: 资源链接,

    rate: 电影评分float,
    time: 上映时间,
    director: 导演,
    type: 电影类型,
    region: 地区
  }]
  ```
* 请求特定电影
  ```javescript
  api: /query/movie
  params: {
    title: 电影名称
  }
  return {
    category: 2,
    title: 电影名称,
    picture: 海报url,
    description: 推荐理由,
    date: 发布时间,
    url: 资源链接,

    rate: 电影评分float,
    time: 上映时间,
    director: 导演,
    type: 电影类型,
    region: 地区
  }
  ```

## essay
