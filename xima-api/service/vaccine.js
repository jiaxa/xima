const sqldb = require('../lib/mysqldb');

var list = async () => {
  var result = await sqldb.query('select * from vaccine order by level asc,code asc');
  return result;
};

module.exports = {
  list
};
