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
      res.status(404).end({success : false , message : err.message});
    });
    })

  .catch(function(err){
    //console.log(err);
    res.status(404).json({success : false , message : err.message});
  });
};

var getUser = function(req,res){
  userService.getOne(req.params.email)
  .then(function(result){
    res.json({ data : result});
  })
  .catch(function(err){
    //console.log(err);
    res.status(404).json({success : false , message : err.message});
  });
};



var createUser = function(req,res){

  userService.createOne(req.body)
  .then(function(result){
    res.json({success : "True", Database_Reply : result});
  })
  .catch(function(err){
    res.status(404).json({success : false , message : err.message});
  });
};






module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;