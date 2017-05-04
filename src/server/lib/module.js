/**
 * Created by 郑宝丰 on 2017/3/24.
 */
import request from 'request-json'
import fileUp from './fileUpload'
import fs from 'fs'
const cfg =JSON.parse(fs.readFileSync('src/server/config/server.config.json'))

const client = request.createClient(cfg.api);

exports.userLogin= function (req, res) {
  if(req.session.isLogin) {
    res.json({msg: '已经登录', code: '1111'})
    return
  }else {
    try {
      client.post('sign/in', req.body, function(err, r, body) {
        if(err) {
          res.json({msg: '接口连接异常', code: '9998'})
          return
        }
        if(r.statusCode == 200){
          req.session.isLogin == true
          res.json(body)
        }else {
          res.json({
            code: '9999',
            msg: '接口返回错误'
          })
        }
      });
    }catch (e){
      res.json({
        msg: e,
        code: '9999'
      })
    }
  }
}
exports.forgetPwd= function (req,res) {

}
exports.outLogin= function (req,res) {

}
exports.fileUpload= function (req,res) {
  var upload =fileUp.array('file', 1);
  upload(req, res, function (err) {
    if (err) {
      res.json({code:"9999"});
      return
    }
    res.json({code:"0000",data: req.body});
  })
}