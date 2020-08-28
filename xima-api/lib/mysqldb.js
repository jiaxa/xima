const mysql = require('mysql');
const dbconfig = require('../config/db');

let pool = mysql.createPool(dbconfig);
// pool.connectionLimit = 10;      // 连接池中可以存放的最大连接数量
// pool.waitForConnections = true; // 连接使用量超负荷是否等待, false 会报错
// pool.queueLimit = 0;            // 每个连接可操作的 列数 上限, 0 为没有上限
let query = (sql, value) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log('数据库连接成功');
        connection.query(sql, value, (err, row) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(row);
          }
          connection.release();
        });
      }
    });
  });
};

let entity = async (sql, values) => {
  let result = await query(sql, values);
  return result[0] || null;
};

let page = async (select, from, where, orderBy, page, pagesize) => {
  console.log(page, pagesize);
  let count = 'select count(*) as total from ' + from + ' where 1=1';
  let sql = 'select ' + select + ' from ' + from + ' where 1=1 ';
  let model = await entity(count + where.join(' '), []);
  page = page ? page : 1;
  let size = pagesize ? pagesize : 15;
  if (orderBy) {
    where.push(' order by ' + orderBy);
  }
  let offset = (page - 1) * size;
  where.push('limit ' + offset + ',' + size);

  console.log(sql + where.join(' '));
  var result = await query(sql + where.join(' '), []);
  return { ...model, rows: result };
};

// {
// 	fieldCount: 0,
// 	affectedRows: 2,
// 	insertId: 0,
// 	info: "Rows matched: 2 Changed: 2 Warnings: 0",
// 	serverStatus: 34,
// 	warningStatus: 0,
// 	changedRows: 2
// 	}

async function exec(sql, values) {
  let result = await query(sql, values);
  return result.affectedRows > 0;
}
module.exports = { query, entity, page, exec };
