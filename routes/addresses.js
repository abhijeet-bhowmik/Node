const express = require('express');
const router = express.Router();
const controller = require('../controller/addresses.js');
const verify = require('../JWT.js');
//const db = require('../connector.js');


router.route('/')
.get(verify.verifyToken, controller.getAllAddresses);

//router.router('/:locality')
//.get(controller.getOne);

router.route('/:email')
.get(verify.verifyToken, controller.getOfUser);

router.route('/search/query')
.get(verify.verifyToken, controller.fulfillQuery);

module.exports = router;