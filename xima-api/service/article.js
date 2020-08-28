const sqldb = require('../lib/mysqldb');
var uniqid = require('uniqid');

var insert = async entity => {
  if (!entity.id) {
    entity.id = uniqid();
  }
  var count = parseInt(Math.random() * 1000);
  var sql = `insert into article(id,title,keyword,description,count,init,createTime,updateTime) values(?,?,?,?,?,?,now(),now()) 
  on  DUPLICATE key update title=?,keyword=?,description=?,updateTime=now();`;

  var result = await sqldb.exec(sql, [entity.id, entity.title, entity.keyword, entity.description, count, count, entity.title, entity.keyword, entity.description]);
  return result;
};

var get = async id => {
  var sql = 'select * from article where id= ? ';
  var result = await sqldb.entity(sql, [id]);
  return result;
};

var onoff = async (id, status) => {
  var sql = 'update article set status=? where id= ? ';
  var result = await sqldb.entity(sql, [status, id]);
  return result;
};

var getPage = async query => {
  var where = [];
  if (query.title) {
    where.push(` and title like '%${query.title}%'`);
  }
  if (query.type) {
    where.push(` and type=${query.type}`);
  }
  if (query.status) {
    where.push(` and status=${query.status}`);
  }
  var result = await sqldb.page('*', 'article', where, '', query.page, query.pagesize);
  return result;
};

module.exports = {
  insert,
  get,
  onoff,
  getPage
};
