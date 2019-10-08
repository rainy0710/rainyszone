const fs = require('fs');
const path = require('path');
const express = require('express');
const addLog = require('../../lib/addLog.js');

let router = express.Router();

router.use((req, res) => {
  if (req.path === '/undefined') {
    return;
  };
  // 获取文章名称
  let title = unescape(req.query.title);
  fs.readFile(path.join(__dirname, '../../entry/error.html'), (err, data) => {
    if (err) {
      res.end('The service has got broken down!');
      return;
    }

    res.writeHeader(200, { 'Content-type': 'text/html;utf-8' });
    res.end(data);
    addLog(req, 5, title ? title : 'error');
  })
})

module.exports = router;