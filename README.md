
## Install

```javascript
npm install log4js-tracer --save
```

# usage

### step1
```javascript
// express app.js
var log = require('luojilab-log4js').use;

log(app);
```

### step2
```javascript
// router/*.js
var log = require('luojilab-log4js').logger;

log.info('step one','api detail info'); // replace console.log
log.warn('warn'); // send error type message to file
log.error('error'); // send error type message to file and sentry
log.prefix('key'); //add new key to uniqueKey

```

### demo

```javascript
log.info('1、获取的接口数据');
log.info('2、获取的接口数据', '详细信息内容JSON');
log.prefix("userid");
log.info('3、新日志带着用户信息');
log.info('4、redis');
```
```bash
[2017-05-05 16:03:33.509] [INFO] out - 19i1dnjt39dc3a5;1、获取的接口数据
[2017-05-05 16:03:33.514] [INFO] out - 19i1dnjt39dc3a5;2、获取的接口数据;4a0h099f1d9997a1493971413513
[2017-05-05 16:03:33.515] [INFO] out - 4a0h099f1d9997a1493971413513;详细信息内容JSON
[2017-05-05 16:03:33.515] [INFO] out - 19i1dnjt39dc3a5;userid;3、新日志带着用户信息
[2017-05-05 16:03:33.515] [INFO] out - 19i1dnjt39dc3a5;userid;4、redis
```

#### 阿里云日志收集平台

search `19i1dnjt39dc3a5`
```bash
19i1dnjt39dc3a5;1、获取的接口数据
19i1dnjt39dc3a5;2、获取的接口数据;4a0h099f1d9997a1493971413513
19i1dnjt39dc3a5;userid;3、新日志带着用户信息
19i1dnjt39dc3a5;userid;4、redis
```

search `4a0h099f1d9997a1493971413513`
```bash
4a0h099f1d9997a1493971413513;详细信息内容JSON
```
