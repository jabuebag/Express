var express = require('express');
var systemConfig = require('./Config/SystemConfig');
var authMiddleware = require('./Utility/AuthUtility');
var dbManager = require('./Manager/DBManager')
var expressManager = require('./Manager/ExpressManager');

// App
var app = express();
var router = express.Router();

// connect mongo db
//dbManager.connectMonogoDB();

// use body parser so we can get info from POST and/or URL parameters
expressManager.setBodyParser(app);

//authMiddleware
authMiddleware.authMiddleware(app, router);

// set up static file server
expressManager.setStaticDir(app);

// route to different controllers due to path
expressManager.setPathRouter(app);

app.listen(systemConfig.port);
console.log('Server is on.');