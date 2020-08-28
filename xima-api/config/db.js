module.exports = {
  host: '39.104.90.167',
  port: 3306,
  database: 'yimiao',
  user: 'root',
  password: 'mysql2020',
  // 'charset': "UTF8_GENERAL_CI",
  // 'connectionLimit': config.db_conn_limit,
  dateStrings: true, //强制日期类型(TIMESTAMP, DATETIME, DATE)以字符串返回，而不是一javascript Date对象返回. (默认: false)
  supportBigNumbers: true, // 处理大数字 (bigint, decimal), 需要开启 ( 结合 bigNumberStrings 使用 )(默认: false)
  bigNumberStrings: true, // 大数字 (bigint, decimal) 值转换为javascript字符对象串
  multipleStatements: true, // 允许每个mysql语句有多条查询, 未防止sql注入不开启(默认: false)
  timezone: '+08:00', //东八时区,储存本地时间的时区. (默认: 'local')
  connectTimeout: 5000 // 数据库连接超时时间, 默认无超时
};
