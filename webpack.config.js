const path = require('path');
const readFileList = require('./src/lib/readFileList');

// 读取入口文件列表
let entryList = readFileList(path.join(__dirname, './src/entry/'));
// 创建打包入口对象
let entryObj = {};
let reg = /(.*)\.js$/i;
entryList.forEach((item) => {
  if (reg.test(item.name)) {
    let name = reg.exec(item.name)[1];
    entryObj[name] = path.join(__dirname, './src/entry/' + item.name);
  }
})

module.exports = {
  mode: 'production',
  entry: entryObj,
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}