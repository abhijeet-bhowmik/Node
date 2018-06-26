const service = require('../services/addresses.js');
const db = require('../connector.js');


var getAllAddresses = function(req,res){
  service.getAll()
  .then(function(addresses){
    res.json({data : addresses});
  })
  .catch(function(err){
    res.status(404).end(err.message);
  });
}

var getOfUser = function(req,res){
  service.getOfUser(req.params.email)
  .then(function(addresses){
    res.json({data : addresses});
  })
  .catch(function(err){
    res.status(404).end(err.message);
  });
}



var fulfillQuery = function(req,res){
  attribute = Object.keys(req.query)[0];
  fieldValue = Object.values(req.query)[0];
  service.executeQuery(attribute.toLowerCase(), fieldValue.toLowerCase())
  .then(function(result){
    res.json(result);
  })
  .catch(function(err){
    res.status(404).end(err.message);
  });
}



module.exports.getAllAddresses = getAllAddresses;
module.exports.getOfUser = getOfUser;
module.exports.fulfillQuery = fulfillQuery;
