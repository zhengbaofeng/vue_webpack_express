import express from 'express'
import path from 'path'
import fs from 'fs'
import fileStreamRotator from 'file-stream-rotator'
import favicon from 'serve-favicon'
import logger from 'morgan' //日志组件
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import session from 'express-session'
import cookie from 'cookie-parser'

import config from '../../webpack.config'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(cookie());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'cookie',
  cookie: { maxAge: 1800000 },
}));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

var logDir = path.join(__dirname, 'logs');
fs.existsSync(logDir) || fs.mkdirSync(logDir);
var accessLogStream = fileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDir, 'log-%DATE%.log'),
  frequency: 'daily',
  verbose: true
});

app.use(logger('combined', {stream: accessLogStream}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}))

app.use(webpackHotMiddleware(compiler))

var routes=require(__dirname+'/router')(express,app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })
})

app.listen(8080)

export default app
