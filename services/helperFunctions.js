var schema = require('./schema.js');


var populateAddress = function(user, addresses){

  for(var i = 0 ; i < addresses.length ; i++){
    user.address.push(addresses[i]);
   }
   return user;
}

var userJSONBuilder = function(query){

  var user = schema.user;
  user.firstname = query.firstname;
  user.lastname = query.lastname;
  user.email = query.email;
  user.address = []

  return user;
}


module.exports.populateAddress = populateAddress;
module.exports.userJSONBuilder = userJSONBuilder;