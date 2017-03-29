import myModule from './lib/module'

module.exports = function (express, app) {
  app.get('/', function (req, res) {res.render('index', { title: '郑宝丰'})});
  app.post('/login', myModule.login);
  app.post('/isLogin', myModule.isLogin);
  app.post('/outLogin', myModule.outLogin);
}