const fs = require('fs');
const path = require('path');
const express = require('express');
const dbObject = require('../../lib/dbObject.js');

let router = express.Router();
let database = new dbObject('rainyszone', 'reader:3721');

router.use((req, res) => {
  let category = req.path.slice(1);
  let params = req.query;
  if (['home', 'note', 'music', 'movie', 'essay'].indexOf(category) === -1) {
    console.error('Invalid query path:', req.path);
    return;
  }

  if ('title' in params) {
    // 根据title属性值查询对应的数据
    database.findByTitle(category, unescape(params.title), (data) => {
      res.writeHeader(200, { 'Content-type': 'text/plain;utf-8' });
      res.end(JSON.stringify(data));
      return;
    });
  } else if ('offset' in params && 'amount' in params) {
    // 查询特定长度的数据列表
    database.getList(category, params.offset, params.amount, (data) => {
      res.writeHeader(200, { 'Content-type': 'text/plain;utf-8' });
      res.end(JSON.stringify(data));
      return;
    })
  } else {
    console.error('Invalid query parameters:', req.query);
    return;
  }
});

module.exports = router;