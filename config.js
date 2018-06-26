var database = {
  hostname : "localhost",
  user : "root",
  password : "root",
  database : "NODE"
};

var server = {
  hostname : 'localhost',
  port : 3000
}

var secretKey = '12345-54321-54321-12345';

module.exports.database = database;
module.exports.server = server;
module.exports.secretKey = secretKey;
