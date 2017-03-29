/**
 * Created by 郑宝丰 on 2017/3/24.
 */
import mysql from './mysql'

exports.login= function (req, res) {
  let sql='select userName,userPwd from user WHERE userName="'+req.body.userName+'" AND userPwd="'+req.body.userPwd+'"'
  mysql.query(sql,function (result) {
    if(result!='') {
      req.session.isLogin=true
      res.json({msg: '查询成功', code: '0000'})

    } else res.json({msg: '字符不匹配', code: '9001'})
  })
}
exports.isLogin= function (req,res) {
  if(req.session.isLogin){
    res.json({msg:'登录了'})
  }else {
    res.json({msg:'没有登录'})
  }
}
exports.outLogin= function (req,res) {
  req.session.isLogin=false
}