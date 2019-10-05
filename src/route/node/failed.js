const fs = require('fs');
const path = require('path');
const express = require('express');

let router = express.Router();

router.use((req, res) => {
  fs.readFile(path.join(__dirname, '../../entry/error.html'), (err, data) => {
    if (err) {
      res.end('The service has got broken down!');
      return;
    }

    res.writeHeader(200, { 'Content-type': 'text/html;utf-8' });
    res.end(data);
  })
})

module.exports = router;