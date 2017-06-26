var log4js = require('log4js')
var logConfigure = require('./config')
var logout = log4js.getLogger('out')
var logerr = log4js.getLogger('err')
var uniqueKey = Math.random().toString(36).substr(2, 15) + ';'
var env = process.env.SERVER_CONFIG || process.env.NODE_ENV || 'development'

var logger = {
  prefix: function (newKey) {
    uniqueKey = uniqueKey + newKey + ';'
  },
  info: function () {
    switch (arguments.length) {
      case 0:
        throw new Error('incoming parameters cannot be empty')
        break
      case 1:
        logout.info(uniqueKey + arguments[0])
        break
      case 2:
        var timestamp = Math.random().toString(18).substr(2, 15) + new Date().getTime()
        logout.info(uniqueKey + arguments[0] + ';' + timestamp)
        logout.info(timestamp + ';' + arguments[1])
        break
      default:
        throw new Error('most can only receive two parameters')
        break
    }
  },
  warn: function (msg) {
    logout.warn(uniqueKey + msg)
    logerr.warn(uniqueKey + msg)
  },
  error: function (msg) {
    logout.error(uniqueKey + msg)
    logerr.error(uniqueKey + msg)
  }
}

exports.logger = logger

exports.use = function (app, logPath) {
  app.use(log4js.connectLogger(log4js.getLogger('out'), {format: logConfigure(logPath).format}))
}
