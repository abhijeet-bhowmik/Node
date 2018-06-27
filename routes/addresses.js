const express = require('express');
const router = express.Router();
const controller = require('../controller/addresses.js');
const verify = require('../JWT.js');
//const db = require('../connector.js');
const validation = require('./validations.js');


router.route('/')
.get(validation.headerValidation, verify.verifyToken, controller.getAllAddresses)
.post(validation.headerValidation, validation.addressValidation, controller.createAddress);

//router.router('/:locality')
//.get(controller.getOne);

router.route('/:email')
.get(validation.headerValidation, verify.verifyToken, controller.getOfUser);

router.route('/search/query')
.get(validation.headerValidation, verify.verifyToken, controller.fulfillQuery);

module.exports = router;