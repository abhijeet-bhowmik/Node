
//var config = require('./config.js');
var JWT = require('./JWT.js');

module.exports = function(req,res, next){
  var authHeader = req.headers.authorization;
  if (!authHeader){

    err = new Error('You are not authenticated.');
    err.status = 401;
    res.status(401).end(err.message);
  }
else{
   var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
   var user = auth[0];
   var password = auth[1];
   if (user == 'admin' && password == 'root'){
     var user = { id : 'admin', password: 'root'};
    var token = JWT.getToken(user);
    res.status(200).json({ status : 'Login successful', token : token});
    }
   else{
     err = new Error('Wrong User name or password');
     err.status = 401;
     res.status(401).end(err.message);
   }
}
}