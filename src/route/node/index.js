const fs = require('fs');
const path = require('path');
const express = require('express');
const addLog = require('../../lib/addLog.js');
const failed = require('./failed.js');
const template = require('art-template');

let router = express.Router();

router.use('/movie.html', (req, res, next) => {
  // 获取电影名称
  let title = decodeURIComponent(req.query.title);
  if (title !== 'undefined') {
    fs.readFile(path.join(__dirname, '../../entry/movie.html'), (err, data) => {
      if (err) {
        next();
        return;
      }

      // 通过使用模板引擎替换movie.html中title标签的电影名称
      let ret = template.render(data.toString(), {
        title: title
      })
      res.writeHeader(200, { 'Content-type': 'text/html;utf-8' });
      res.end(ret);
      // 记录访问日志
      addLog(req, 2);
    })
  } else {
    next();
  }
}, failed);

router.use('/', (req, res, next) => {
  fs.readFile(path.join(__dirname, '../../entry/index.html'), (err, data) => {
    if (err) {
      next();
      return;
    }

    res.writeHeader(200, { 'Content-type': 'text/html;utf-8' });
    res.end(data);
    // 记录访问日志
    addLog(req);
  })
})

router.use('/index.html', (req, res, next) => {
  fs.readFile(path.join(__dirname, '../../entry/index.html'), (err, data) => {
    if (err) {
      next();
      return;
    }

    res.writeHeader(200, { 'Content-type': 'text/html;utf-8' });
    res.end(data);
    // 记录访问日志
    addLog(req);
  })
}, failed);

module.exports = router;