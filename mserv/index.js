'use strict';
const express = require('express')
const middle = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const homePg = require('./front_routes/homePg')
const membersPg = require('./front_routes/membersPg')

const cfenv = require('cfenv')
//set up filters chain ###################### 
middle.use(bodyParser.json()) // parse application/json
middle.use(cors())

//routes ###################### 
middle.use('/membersPg', membersPg) //front route 1 - match the front end

//###################### 
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
// start server on the specified port and binding host
middle.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url)
})

