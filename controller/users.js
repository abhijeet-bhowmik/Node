//const express = require('express');
//const userRouter = express.Router();
//const db = require('../connector.js');
//const userController = require('../controller/userController.js')
const userService = require('../services/users.js');
const addressService = require('../services/addresses.js');
const helper = require('./helper.js');

var getAllUsers = function(req,res){
  userService.getAll()
  .then(function(users){
    addressService.getAll()
    .then(function(addresses){
      result = helper.combiner(users, addresses);
      res.json({data : result});
    })
    .catch(function(err){
      res.status(404).end(err.message);
    });
    })

  .catch(function(err){
    //console.log(err);
    res.status(404).end(err.message);
  });
};

var getUser = function(req,res){
  userService.getOne(req.params.email)
  .then(function(result){
    res.json({ data : result});
  })
  .catch(function(err){
    //console.log(err);
    res.status(404).end(err.message);
  });
};







module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;