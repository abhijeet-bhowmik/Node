var config = require('./config');
var mysql  = require('mysql');

//console.log("Connecting to mysql server");
var db = mysql.createConnection({
    hostname : config.database.hostname,
    user     : config.database.user,
    password : config.database.password,
    database : config.database.database
  });
   db.connect(function(err){
     if (err) throw err;
     console.log("Connected to the mysql server.");

   });



module.exports = db;