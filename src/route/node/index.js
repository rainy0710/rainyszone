const fs = require('fs');
const path = require('path');
const express = require('express');
const addLog = require('../../lib/addLog.js');
const failed = require('./failed.js');
const template = require('art-template');

let router = express.Router();

// 请求随笔页面
router.use('/note.html', (req, res, next) => {
  // 获取随笔名称
  let title = unescape(req.query.title);
  if (title !== 'undefined') {
    fs.readFile(path.join(__dirname, '../../entry/note.html'), (err, data) => {
      if (err) {
        next();
        return;
      }

      // 通过使用模板引擎替换note.html中title标签的随笔名称
      let ret = template.render(data.toString(), {
        title: title
      })
      res.writeHeader(200, { 'Content-type': 'text/html;utf-8' });
      res.end(ret);
      // 记录访问日志
      addLog(req, 0, title);
    })
  } else {
    next();
  }
}, failed);

// 音乐播放上报
router.use('/music.html', (req, res, next) => {
  // 获取音乐名称
  let title = unescape(req.query.title);
  if (title !== 'undefined') {
    res.end('Music report success!');
    addLog(req, 1, title);
  } else {
    next();
  }
}, failed);

// 请求电影页面
router.use('/movie.html', (req, res, next) => {
  // 获取电影名称
  let title = unescape(req.query.title);
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
      addLog(req, 2, title);
    })
  } else {
    next();
  }
}, failed);

// 请求文章页面
router.use('/essay.html', (req, res, next) => {
  // 获取电影名称
  let title = unescape(req.query.title);
  if (title !== 'undefined') {
    fs.readFile(path.join(__dirname, '../../entry/essay.html'), (err, data) => {
      if (err) {
        next();
        return;
      }

      // 通过使用模板引擎替换essay.html中title标签的文章名称
      let ret = template.render(data.toString(), {
        title: title
      })
      res.writeHeader(200, { 'Content-type': 'text/html;utf-8' });
      res.end(ret);
      // 记录访问日志
      addLog(req, 3, title);
    })
  } else {
    next();
  }
}, failed);

// 请求首页
router.use('/', queryIndex)
router.use('/index.html', queryIndex, failed);

function queryIndex(req, res, next) {
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
}

module.exports = router;