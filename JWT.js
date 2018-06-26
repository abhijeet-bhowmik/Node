var jwt = require('jsonwebtoken');
var config = require('./config.js');


exports.getToken = function (user) {
    return jwt.sign(user, config.secretKey, {
        expiresIn: 3600
    });}


exports.verifyToken = function(req, res, next){

  var token = req.query.token || req.headers['x-access-token'];
  console.log(token);
  if (token){
    jwt.verify(token, config.secretKey, function(err, decoded){
      if(err){
        var err = new Error('You are not authenticated');
        res.status(401).end(err.message);
      }
      else {
        req.decoded = decoded;
        next();
      }
    });
  }
  else
  {
    var err = new Error("Not Authenticated");
    res.status(401).end(err.message);
  }
}