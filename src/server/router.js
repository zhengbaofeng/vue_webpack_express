import myModule from './lib/module'

module.exports = function (express, app) {
  app.get('/', function (req, res) {res.render('index', { title: '郑宝丰'})});
  app.post('/userLogin', myModule.userLogin);
  app.post('/forgetPwd', myModule.forgetPwd);
  app.post('/outLogin', myModule.outLogin);
  app.post('/fileUpload', myModule.fileUpload);
  app.put('/fileUpload', myModule.fileUpload);
}