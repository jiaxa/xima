const sqldb = require('../lib/mysqldb');
var uniqid = require('uniqid');

var get = async id => {
  var sql = 'select * from editor where id= ? ';
  var result = await sqldb.entity(sql, [id]);
  return result;
};

var insert = async entity => {
  if (!entity.id) {
    entity.id = uniqid();
  }
  var sql = 'insert into editor(id,html,markdown) values(?,?,?) on  DUPLICATE key update html=?,markdown=?,updateTime=now();';
  var result = await sqldb.exec(sql, [entity.id, entity.html, entity.markdown, entity.html, entity.markdown]);
  return result;
};

module.exports = {
  insert,
  get
};
