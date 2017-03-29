/**
 * Created by 郑宝丰 on 2017/3/24.
 */
import mysql from 'mysql'
import fs from 'fs'

const dbConfig =JSON.parse(fs.readFileSync('src/server/config/db.config.json'))
const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.name,
  password: dbConfig.pwd,
  database: dbConfig.DBName,
  port: dbConfig.port,
  connectionLimit: dbConfig.connectionLimit
});
exports.query=function (sql,callback) {
  //获取连接池连接
  this.getConnection(function (err,conn) {
    if (err) console.log("数据库连接失败")
    else {
      conn.query(sql,function (err,result) {
        if (err) console.log("查询失败",err)
        else {
          callback(result)
        }
      });
    }
    //释放连接池连接
    conn.release();
  });
}.bind(pool)