const fs = require('fs');
const path = require('path');
const express = require('express');
const readBigFile = require('../../lib/readBigFile');

let router = express.Router();

// 请求jpg图片文件
router.use('/images', (req, res) => {
  let filePath = decodeURIComponent(req.url);
  fs.readFile(path.join(__dirname, '../../../public/images' + filePath), (err, data) => {
    if (err) {
      console.error('Can\'t read the public file:', filePath);
      res.statusCode = 404;
      res.end();
      return;
    }

    if (filePath.indexOf('png') > 0) {
      res.writeHeader(200, { 'Content-type': 'image/png' });
    } else {
      res.writeHeader(200, { 'Content-type': 'image/jpeg' });
    }
    res.end(data);
  })
})

// 请求mp3音乐文件
router.use('/music', (req, res) => {
  let filePath = decodeURIComponent(req.url);
  fs.readFile(path.join(__dirname, '../../../public/music' + filePath), (err, data) => {
    if (err) {
      console.error('Can\'t read the public file:', filePath);
      res.statusCode = 404;
      res.end();
      return;
    }

    res.writeHeader(200, { 'Content-type': 'audio/mp3' });
    res.end(data);
  })
})

// 请求海报图片
router.use('/poster', (req, res) => {
  let filePath = decodeURIComponent(req.url);
  fs.readFile(path.join(__dirname, '../../../public/poster' + filePath), (err, data) => {
    if (err) {
      console.error('Can\'t read the public file:', filePath);
      res.statusCode = 404;
      res.end();
      return;
    }

    if (filePath.indexOf('png') > 0) {
      res.writeHeader(200, { 'Content-type': 'image/png' });
    } else {
      res.writeHeader(200, { 'Content-type': 'image/jpeg' });
    }
    res.end(data);
  })
})

// 请求mp4视频文件
router.use('/video', (req, res) => {
  let filePath = decodeURIComponent(req.url);
  readBigFile(path.join(__dirname, '../../../public/video' + filePath), req, res);
})

module.exports = router;