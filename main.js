const express = require('express');
const path = require('path');
const fs = require('fs');

// 创建HTTP服务器
const app = express();

// 设置静态资源目录(该目录下文件可直接访问)
app.use(express.static(__dirname + '/src/entry'));

// 媒体资源请求
app.use('/public', (req, res) => {
  let filePath = decodeURIComponent(req.url);
  fs.readFile(path.join(__dirname, 'public' + filePath), (err, data) => {
    if (err) {
      console.error('Can\'t read the public file:', filePath);
      res.statusCode = 404;
      res.end();
      return;
    }

    if (filePath.indexOf('images') >= 0) {
      // 请求jpg图片文件
      res.writeHeader(200, { 'Content-type': 'image/jpeg' });
      res.end(data);
    } else if (filePath.indexOf('music') >= 0) {
      // 请求mp3音乐文件
      res.writeHeader(200, { 'Content-type': 'audio/mp3' });
      res.end(data);
    } else if (filePath.indexOf('video') >= 0) {
      // 请求mp4视频文件
      res.writeHeader(200, { 'Conten-type': 'video/mpeg4' });
      res.end(data);
    }
  })

});

// 设置请求的js脚本文件目录
app.use('/dist/', (req, res) => {
  fs.readFile(path.join(__dirname, 'dist' + req.url), (err, data) => {
    if (err) {
      console.error('Can\'t read the dist file:', req.url);
      res.statusCode = 404;
      res.end();
    } else {
      res.writeHeader(200, { 'Content-type': 'text/javascript;charset=utf8' });
      res.end(data.toString());
    }
  });
})

// 启动HTTP服务
app.listen(80, () => {
  console.log('The server is running on the port 80 ......');
});