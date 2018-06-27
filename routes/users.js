const express = require('express');
const userRouter = express.Router();
const db = require('../connector.js');
const userController = require('../controller/users.js')
const verify = require('../JWT.js');
const validation  = require('./validations.js');

userRouter.route('/')
.get(userController.getAllUsers)
.post(validation.headerValidation, verify.verifyToken, validation.userValidation, userController.createUser);


userRouter.route('/:email')
.get(validation.paramValidation,validation.headerValidation, verify.verifyToken, userController.getUser);







module.exports = userRouter;