var env = process.env.SERVER_CONFIG || process.env.NODE_ENV || 'development'

function Configure(project_name) {
  return {
    development: {
      config: {
        "appenders": [
          {
            "type": "console",
            "category": "console"
          }, {
            "type": "console",
            "filename": logPath,
            "pattern": "yyyy-MM-dd-out.log",
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "out"
          }, {
            "type": "console",
            "filename": logPath,
            "pattern": "yyyy-MM-dd-err.log",
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "err"
          }
        ],
        "replaceConsole": true,
        "levels": {
          "out": "info",
          "err": "warn",
          "console": "info"
        }
      },
      format: ":method :url :status - :response-time ms"
    },
    testing: {
      config: {
        "appenders": [
          {
            "type": "console",
            "category": "console"
          }, {
            "type": "dateFile",
            "filename": logPath,
            "pattern": "yyyy-MM-dd-out.log",
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "out"
          }, {
            "type": "dateFile",
            "filename": logPath,
            "pattern": "yyyy-MM-dd-err.log",
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "err"
          }
        ],
        "replaceConsole": false,
        "levels": {
          "out": "info",
          "err": "warn",
          "console": "info"
        }
      },
      format: ":method :url :status - :response-time ms"
    },
    simulation: {
      config: {
        "appenders": [
          {
            "type": "console",
            "category": "console"
          }, {
            "type": "dateFile",
            "filename": logPath,
            "pattern": "yyyy-MM-dd-out.log",
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "out"
          }, {
            "type": "dateFile",
            "filename": logPath,
            "pattern": "yyyy-MM-dd-err.log",
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "err"
          }
        ],
        "replaceConsole": false,
        "levels": {
          "out": "info",
          "err": "warn",
          "console": "info"
        }
      },
      format: ":method :url :status - :response-time ms"
    },
    production: {
      config: {
        "appenders": [
          {
            "type": "console",
            "category": "console"
          }, {
            "type": "dateFile",
            "filename": logPath,
            "pattern": "yyyy-MM-dd-out.log",
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "out"
          }, {
            "type": "dateFile",
            "filename": logPath,
            "pattern": "yyyy-MM-dd-err.log",
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "err"
          }
        ],
        "replaceConsole": false,
        "levels": {
          "out": "info",
          "err": "warn",
          "console": "info"
        }
      },
      format: ":remote-addr :http-version :method :url :status - :referrer - :user-agent - :response-time ms"
    }
  }
}

module.exports = function(logPath) {
  return Configure(logPath)[env]
}
