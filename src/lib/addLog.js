/* 
 * 在Node服务器上存储访问日志，并按照访问页面和访问时间进行分类
 * 访问首页存储在log/index文件夹中，访问电影页面存储在log/movie文件夹中
 * 参数一：请求对象request
 * 参数二：访问的页面类型：缺省为首页，0——随笔，1——音乐，2——电影，3——文章
 * 参数三：访问的资源名称title
 */
const fs = require('fs');

module.exports = function addLog(request, type, title = 'index') {
  // 需要记录的格式：访问时间 IP -- IP地址:端口号
  let pingAct = `
  ${new Date()} IP--${request.socket.remoteAddress}:${request.socket.remotePort}--${title}
  `;

  // 获取访问的具体时间
  let logDate = new Date();
  // 根据日期区分文件
  let logFile = logDate.getFullYear().toString().concat((logDate.getMonth() + 1), logDate.getDate());
  switch (+type) {
    case 0:
      // 访问随笔页面的记录
      fs.writeFile('./log/note/' + logFile + '.txt', pingAct, {
        flag: 'a'
      }, (err) => {
        if (err) {
          console.log('One note request hasn\'t been recorded!');
        }
      })
      break;
    case 1:
      // 访问音乐页面的记录
      fs.writeFile('./log/music/' + logFile + '.txt', pingAct, {
        flag: 'a'
      }, (err) => {
        if (err) {
          console.log('One music request hasn\'t been recorded!');
        }
      })
      break;
    case 2:
      // 访问电影页面的记录
      fs.writeFile('./log/movie/' + logFile + '.txt', pingAct, {
        flag: 'a'
      }, (err) => {
        if (err) {
          console.log('One movie request hasn\'t been recorded!');
        }
      })
      break;
    case 3:
      // 访问文章页面的记录
      fs.writeFile('./log/essay/' + logFile + '.txt', pingAct, {
        flag: 'a'
      }, (err) => {
        if (err) {
          console.log('One essay request hasn\'t been recorded!');
        }
      })
      break;
    default:
      // 访问首页的记录
      fs.writeFile('./log/index/' + logFile + '.txt', pingAct, {
        flag: 'a'
      }, (err) => {
        if (err) {
          console.log('One index request hasn\'t been recorded!');
        }
      })
  }
}