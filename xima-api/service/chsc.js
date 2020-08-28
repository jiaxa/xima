const sqldb = require('../lib/mysqldb');

var list = async () => {
  var result = await sqldb.query('select * from vaccine order by level asc,id asc');
  return result;
};

var getPage = async query => {
  var where = [];
  if (query.name) {
    where.push(` and name like '%${query.name}%'`);
  }
  if (query.area) {
    where.push(` and area='${query.area}'`);
  }
  var result = await sqldb.page('*', 'chsc', where, '', query.page, query.pagesize);
  return result;
};

module.exports = {
  list,
  getPage
};
