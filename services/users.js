//const express = require('express');
const db = require('../connector.js');
var helper = require('./helperFunctions.js');





var getAll = function(){
  return new Promise(function(resolve, reject){
    db.query("SELECT * FROM user", function(err,result){
      if (err) reject(err);
      if (result.length == 0) reject(new Error("No users in database."));
      result = JSON.parse(JSON.stringify(result));
      resolve(result);
    });
  });
};

// var getOne = function(email){
//   return new Promise(function(resolve, reject){
//     db.query("SELECT * FROM user LEFT JOIN address ON address.user_id = user.email WHERE user.email = ?;", [email], function(err, result){
//       if (err) reject(err);
//       if (result.length == 0) reject(new Error("Email address not found"));
//       console.log(result[0])
//       resolve(result);
//     });
//   });
// };




// var getAll = function(){
//   return new Promise(function(resolve, reject){
//     db.query("SELECT * FROM user", function(err,result){
//       if (err) reject(err);
//       if (result.length == 0) reject(new Error("No users in database."));
//       var users = []
//       result = JSON.parse(JSON.stringify(result));
//
//       for (var i = 0 ; i < result.length ; i++){
//         var user = helper.userJSONBuilder(result[i])
//         db.query("SELECT house_no, locality, city FROM address WHERE user_id = ?", [user.email], function(err, result){
//           if (err) reject(err);
//           addresses = JSON.parse(JSON.stringify(result));
//           console.log("#"+i);
//           console.log(addresses);
//           user = helper.populateAddress(user, addresses);
//           console.log(user);
//           return;
//         })
//
//         }
//         console.log(users);
//
//     });
//   });
// };



var getOne = function(email){
  return new Promise(function(resolve, reject){
    //first load the user.
    db.query("SELECT * FROM user WHERE email = ?", [email], function(err, result){

      if(err || result == undefined) reject(err);

      if(result.length == 0) reject(new Error('User not found in database.'));
      else
      {
      //draft the user according to schema and add address field to it.
      var user = helper.userJSONBuilder(JSON.parse(JSON.stringify(result))[0]);

      //query for that user email in address table.
      db.query("SELECT house_no, locality, city FROM address WHERE user_id = ?", [email], function(err, result){

        if (err) reject(err);

        addresses = JSON.parse(JSON.stringify(result));

        //append all the address found of the user in user.address
        user = helper.populateAddress(user, addresses);

        resolve(user);
      });}

    });
  });
};



module.exports.getAll = getAll;
module.exports.getOne = getOne;