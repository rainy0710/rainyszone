/*
 * 数据库存储文档结构
 * 包括：主页、随笔、音乐、电影、文章五类文档结构
 * 主页结构：
 * {
 *   category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
 *   title: 标题,
 *   picture: 海报url,
 *   description: 推荐描述,
 *   date: 发布日期,
 * }
 * 随笔结构：
 * {
 *   category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
 *   title: 标题,
 *   picture: 海报url,
 *   description: 推荐描述,
 *   date: 发布日期,
 *   url: 资源链接
 * }
 * 音乐结构：
 * {
 *   category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
 *   title: 标题,
 *   picture: 海报url,
 *   description: 推荐描述,
 *   date: 发布日期,
 *   url: 资源链接,
 * 
 *   artist: 歌手,
 *   album: 专辑，
 *   time: 发行时间
 * },
 * 电影结构：
 * {
 *   category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
 *   title: 标题,
 *   picture: 海报url,
 *   description: 推荐描述,
 *   date: 发布日期,
 *   url: 资源链接
 * 
 *   rate: 评分,
 *   time: 上映时间,
 *   director: 导演,
 *   type: 电影类型,
 *   region: 地区
 * },
 * 文章结构：
 * {
 *   category: 类型（0——随笔，1——音乐，2——电影，3——文章）,
 *   title: 标题,
 *   picture: 海报url,
 *   description: 推荐描述,
 *   date: 发布日期,
 *   url: 资源链接
 *   
 *   writer: 作者,
 *   nation: 国籍,
 *   time: 出版日期
 * }
 */
let schemaObj = {
  // 首页的文档结构对象
  home: {
    category: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  // 随笔的文档结构对象
  note: {
    category: {
      type: Number,
      required: true,
      default: 0
    },
    title: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  // 音乐的文档结构对象
  music: {
    category: {
      type: Number,
      required: true,
      default: 1
    },
    title: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    url: {
      type: String,
      required: true
    },

    artist: {
      type: String,
      required: true
    },
    album: {
      type: String,
      required: true
    },
    time: {
      type: Date,
      required: true
    }
  },
  // 电影的文档结构对象
  movie: {
    category: {
      type: Number,
      required: true,
      default: 2
    },
    title: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    url: {
      type: String,
      required: true
    },

    rate: {
      type: Number,
      required: true
    },
    time: {
      type: Date,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    type: {
      type: [String],
      required: true
    },
    region: {
      type: [String],
      required: true
    }
  },
  // 文章的文档结构对象
  essay: {
    category: {
      type: Number,
      required: true,
      default: 3
    },
    title: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    url: {
      type: String,
      required: true
    },

    writer: {
      type: String,
      required: true
    },
    nation: {
      type: String,
      required: true
    },
    time: {
      type: Date,
      required: true
    }
  }
}

/*
 * 数据库构造函数
 * 参数一：数据库名称
 * 参数二：认证信息，如 username:password
 * 参数三：(可选)数据库IP，默认为localhost
 * 参数四：(可选)数据库端口号，默认为27017
 * 返回值：数据库构造函数
 */
const mongoose = require('mongoose');

function dbObject(dbName, authInfo, ipAdd = 'localhost', portNumber = '27017') {
  // 数据库url
  let dbUrl = 'mongodb://' + authInfo + '@' + ipAdd + ':' + portNumber + '/' + dbName;
  // 连接数据库
  let db = mongoose.connect(dbUrl, (err) => {
    if (err) {
      console.error("Can\'t get connected with the database:\n", err);
    } else {
      console.log('Get connected with the database.');
    }
  });

  // 引入文档模式构造函数
  let Schema = mongoose.Schema;

  // 创建主页的文档构造函数
  let homeSchema = new Schema(schemaObj.home);
  this.homeModel = mongoose.model('home', homeSchema);

  // 创建随笔的文档构造函数
  let noteSchema = new Schema(schemaObj.note);
  this.noteModel = mongoose.model('note', noteSchema);

  // 创建音乐的文档构造函数
  let musicSchema = new Schema(schemaObj.music);
  this.musicModel = mongoose.model('music', musicSchema);

  // 创建电影类型的文档构造函数
  let movieSchema = new Schema(schemaObj.movie);
  this.movieModel = mongoose.model('movie', movieSchema);

  // 创建文章的文档构造函数
  let essaySchema = new Schema(schemaObj.essay);
  this.essayModel = mongoose.model('essay', essaySchema);
}

/*
 * 根据category字符串参数查找对应的数据库集合model
 * 参数：集合名称category
 * 返回值：对应集合的model
 */
dbObject.prototype.getModel = function (category) {
  switch (category) {
    case 'home':
      return this.homeModel;
    case 'note':
      return this.noteModel;
    case 'music':
      return this.musicModel;
    case 'movie':
      return this.movieModel;
    case 'essay':
      return this.essayModel;
    default:
      console.error('An invalid collection name:', category);
  }
}

/*
 * 数据库写入函数
 * 参数一：写入数据的集合名称：home，note，music，movie，essay
 * 参数二：写入的数据对象
 */
dbObject.prototype.insert = function (category, obj) {
  let model = this.getModel(category);
  let entity = new model(obj);

  entity.save((error, data) => {
    if (error) {
      console.error('An error occured when writing to the database:', error);
      return;
    }

    console.log('The following data has been written to the collection:\n', category + ':' + data);
  })
}

/*
 * 数据库列表获取
 * 参数一：获取数据的集合名称：home，note，music，movie，essay
 * 参数二：获取列表的偏移量
 * 参数三：获取列表的长度
 * 参数四：回调函数
 */
dbObject.prototype.getList = function (category, offset, amount, callback) {
  let model = this.getModel(category);
  model.find().skip(+offset).limit(+amount).sort({ 'date': -1 }).exec((error, data) => {
    if (error) {
      console.error('Database query meets error:', error);
      return;
    }

    callback(data);
  })
}

/*
 * 数据库查询操作
 * 参数一：查询数据库的集合名称：home，note，music，movie，essay
 * 参数二：查询数据的title属性值
 * 参数三：回调函数
 */
dbObject.prototype.findByTitle = function (category, title, callback) {
  let model = this.getModel(category);
  model.findOne({
    'title': title
  }, (error, data) => {
    if (error) {
      console.error('Looking up data meets error:', error);
      return;
    }

    callback(data);
  })
}

module.exports = dbObject;


