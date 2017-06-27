
## Install

```javascript
npm install log4js-tracer --save
```

# usage

### step1
```javascript
// express app.js
const app = express()
const log = require('log4js-tracer ').use;

log('/data/logs/node/vue_generator', { // logPath, options
  express: app
})
```

### step2
```javascript
// router/*.js
var log = require('log4js-tracer').logger;

log.info('step one','api detail info'); // replace console.log
log.warn('warn'); // send error type message to file
log.error('error'); // send error type message to file and sentry
log.prefix('key'); //add new key to uniqueKey

```

### demo

```javascript
log.info('1、get api data');
log.info('2、get api data', 'detailed data');
log.prefix("userid");
log.info('3、step 3');
log.info('4、step 4');
```
```bash
[2017-05-05 16:03:33.509] [INFO] out - 19i1dnjt39dc3a5;1、get api data
[2017-05-05 16:03:33.514] [INFO] out - 19i1dnjt39dc3a5;2、get api data;4a0h099f1d9997a1493971413513
[2017-05-05 16:03:33.515] [INFO] out - 4a0h099f1d9997a1493971413513;detailed data 
[2017-05-05 16:03:33.515] [INFO] out - 19i1dnjt39dc3a5;userid;3、step 3
[2017-05-05 16:03:33.515] [INFO] out - 19i1dnjt39dc3a5;userid;4、step 4
```

#### log cellection

search `19i1dnjt39dc3a5`
```bash
19i1dnjt39dc3a5;1、get api data
19i1dnjt39dc3a5;2、get api data;4a0h099f1d9997a1493971413513
19i1dnjt39dc3a5;userid;3、step 3
19i1dnjt39dc3a5;userid;4、step 4
```

search `4a0h099f1d9997a1493971413513`
```bash
4a0h099f1d9997a1493971413513;detailed data 
```
