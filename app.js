const express  = require('express');
const mysql = require('mysql');
const config = require('./config.js');
const userRoute = require('./routes/users.js');
const addressRoute = require('./routes/addresses.js');
const app = express();
const auth = require('./authenticate.js');
//const connector = require('./connector.js');


//database connection
app.use('/login', auth);
app.use('/user', userRoute);
app.use('/address', addressRoute);

app.listen(config.server.port, config.server.hostname, function(err){
  if(err) throw err;
  console.log(`Server running at : ${config.server.hostname}:${config.server.port}`);
});


