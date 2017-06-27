'use strict'
const log4js = require('log4js')
const logConfigure = require('./config')
const logout = log4js.getLogger('out')
const logerr = log4js.getLogger('err')
let separator = ';'
let uniqueKey = Math.random().toString(36).substr(2, 15) + separator

const logger = {
  prefix: function (newKey) {
    uniqueKey = uniqueKey + newKey + ';'
  },
  info: function () {
    switch (arguments.length) {
      case 0:
        throw new Error('incoming parameters cannot be empty')
      case 1:
        logout.info(uniqueKey + arguments[0])
        break
      case 2:
        const timestamp = Math.random().toString(18).substr(2, 15) + new Date().getTime()
        logout.info(uniqueKey + arguments[0] + separator + timestamp)
        logout.info(timestamp + separator + arguments[1])
        break
      default:
        throw new Error('most can only receive two parameters')
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

function use (path, options) {
  const opts = options || {}

  if (!path) {
    throw new TypeError('path to log is required')
  }

  opts.express.use(log4js.connectLogger(log4js.getLogger('out'), {format: logConfigure(path).format}))
}

module.exports = use
module.exports.logger = logger
