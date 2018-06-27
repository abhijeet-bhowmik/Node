const db = require('../connector.js');
const helper = require('./helperFunctions.js');
const userService = require('./users.js');
//const schema = require('./schema.js');




var getAll = function(){
  return new Promise(function(resolve, reject){
    db.query("SELECT * FROM address ORDER BY locality", function(err, result){
      if (err || result == undefined) reject(new Error("Database Operation Error."));
      if (result.length == 0) reject(new Error("No addresses in the database."));
      else { result = JSON.parse(JSON.stringify(result));
      resolve(result);}
    });
  });
}


var getOfUser = function(email){
  return new Promise(function(resolve, reject){
    db.query("SELECT * FROM address WHERE user_id = ?", [email], function(err, result){
      if (err || result == undefined) reject(new Error("Database Operation Error."));
      if (result.length == 0) reject(new Error("No addresses found."));
      else resolve(result);
    });
  });
}

var executeQuery = function(attribute, value){
  return new Promise(function(resolve, reject){

    query = `SELECT * FROM address WHERE LOWER(${attribute}) LIKE "%${value}%"`;

    db.query(query, function(err, result){
      if (err || result == undefined) reject(new Error("Database Operation Error."));
      if (result.length == 0) reject(new Error("No addresses found"));
      else resolve(result);
    })
  })
}



var createOne = function(data){
        return new Promise(function(resolve, reject){
          let user_id = data.user_id;
          let house_no =data.address.house_no;
          let locality =data.address.locality;
          let city = data.address.city;
          userService.getOne(user_id)
          .then(function(user){
            query =`INSERT INTO address VALUES('${house_no}', '${locality}', '${city}', '${user_id}')`;
            db.query(query, function(err, result){
            if(err) reject(err);
            else resolve(result);
          });
          })
          .catch(function(err){
            reject(err);
          });
        });
        }







module.exports.createOne = createOne;
module.exports.executeQuery = executeQuery;
module.exports.getAll = getAll;
module.exports.getOfUser = getOfUser;