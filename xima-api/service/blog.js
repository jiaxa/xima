const sqldb = require('../lib/mysqldb');
var randomString = require('random-string');

var insert = async entity => {
  if (!entity.id) {
    entity.id = Math.round(new Date() / 1000) + randomString({ length: 6 }).toLowerCase();
  }
  var count = parseInt(Math.random() * 1000);
  var sql = `insert into blog(id,title,img,tags,keyword,description,count,init,createTime,updateTime) values(?,?,?,?,?,?,?,?,now(),now()) 
  on  DUPLICATE key update title=?,img=?,tags=?,keyword=?,description=?,updateTime=now();`;

  var result = await sqldb.exec(sql, [entity.id, entity.title, entity.img, entity.tags, entity.keyword, entity.description, count, count, entity.title, entity.img, entity.tags, entity.keyword, entity.description]);
  return result;
};

var tops = async () => {
  var sql = 'select * from blog order by RAND() LIMIT 10;';
  var result = await sqldb.query(sql);
  return result;
};

var get = async id => {
  var sql = 'select * from blog where id= ? ';
  var result = await sqldb.entity(sql, [id]);
  return result;
};

var onoff = async (id, status) => {
  var sql = 'update blog set status=? where id= ? ';
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
  var result = await sqldb.page('*', 'blog', where, 'createTime desc', query.page, query.pagesize);
  return result;
};

module.exports = {
  insert,
  tops,
  get,
  onoff,
  getPage
};
