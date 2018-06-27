const express  = require('express');
const mysql = require('mysql');
const config = require('./config.js');
const userRoute = require('./routes/users.js');
const addressRoute = require('./routes/addresses.js');
const app = express();
const auth = require('./authenticate.js');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const validator =require('express-validator');
//const connector = require('./connector.js');

app.use(bodyParser.json());
app.use(validator());
//database connection
app.use('/login', auth);
app.use('/user', userRoute);
app.use('/address', addressRoute);


var options = {
  key : fs.readFileSync(__dirname+'/server_credentials/private.key'),
  cert : fs.readFileSync(__dirname + '/server_Credentials/certificate.pem')
};

var secureServer  = https.createServer(options, app);

secureServer.listen(3000, 'localhost', function(){
  console.log('Server Listening on port', 3000);
});






