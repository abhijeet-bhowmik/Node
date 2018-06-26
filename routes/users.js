const express = require('express');
const userRouter = express.Router();
const db = require('../connector.js');
const userController = require('../controller/users.js')
const verify = require('../JWT.js');


userRouter.route('/')
.get(verify.verifyToken, userController.getAllUsers);


userRouter.route('/:email')
.get(verify.verifyToken, userController.getUser);




module.exports = userRouter;