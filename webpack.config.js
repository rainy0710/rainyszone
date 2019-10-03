const path = require('path');
const readFileList = require('./src/lib/readFileList');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
  module: {
    rules: [
      // 安装单文件组件的loader
      {
        test: /\.vue/,
        use: 'vue-loader'
      },
      // 安装css样式文件的Loader
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // Vue-loader在v15.*之后版本使用时都需要引入vue-loader-plugin的插件
    new VueLoaderPlugin()
  ],
  // resolve: {
  //   alias: {
  //     'vue-router$': 'vue-router/dist/vue-router.js'
  //   }
  // }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
}