'use strict';
const express = require('express')
const middle = express()
const bodyParser = require('body-parser')
const cors = require('cors')
//set up filters chain ###################### 
middle.use(bodyParser.json()) // parse application/json
middle.use(cors())

//routes ###################### 
const homePg = require('./front_routes/homePg')
const membersPg = require('./front_routes/membersPg')

middle.use('/membersPg', membersPg) //front route 1 - match the front end

//###################### 
// start server on the specified port and binding host

middle.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url)
})

