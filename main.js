const express = require('express');

// 引入自定义路由句柄
const index = require('./src/route/node/index.js');
const public = require('./src/route/node/public.js');
const query = require('./src/route/node/query.js');
const failed = require('./src/route/node/failed.js');

// 创建HTTP服务器
const app = express();

// 设置静态资源目录(该目录下文件可直接访问)
app.use('/dist', express.static(__dirname + '/dist'));

// 媒体资源请求
app.use('/public', public);

// 请求数据库数据
app.use('/query', query);

// 入口文件的路由
app.use(index);

// 404文件路由
app.use(failed);

// 启动HTTP服务
app.listen(80, () => {
  console.log('The server is running on the port 80 ......');
});