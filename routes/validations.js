



module.exports.userValidation =function(req,res,next){
req.checkBody('firstname', 'firstname is required').notEmpty();
req.checkBody('lastname', 'lastname is required').notEmpty();
req.checkBody('email', 'Email is required').notEmpty();
req.checkBody('email', 'Should be an email').isEmail();
var errors =req.validationErrors();
if (errors){
res.json(errors);
}
else next();
}


module.exports.headerValidation = function(req, res, next){
console.log(req.headers);
req.checkHeaders('x-access-token', 'No token provided. Access Denied.').notEmpty();
req.checkHeaders('content-type', 'Please set a content type.').notEmpty();
var errors = req.validationErrors();
if(errors){
res.json(errors);
}
else next();
}

module.exports.paramValidation = function(req, res, next){

req.checkParams('email', 'Should be and email').isEmail();
var errors = req.validationErrors();
if(errors){
  res.json(errors);
}

else next();
}


module.exports.addressValidation = function(req, res, next){
req.checkBody('user_id', 'This is required').notEmpty();
req.checkBody('user_id', 'This should be an email').isEmail();
req.checkBody('address', 'This is required').notEmpty();
req.checkBody('address.house_no', 'This is required').notEmpty();
req.checkBody('address.locality', 'This is required').notEmpty();
req.checkBody('address.city', 'This is required').notEmpty();

var errors = req.validationErrors();
if(errors){
res.json(errors);
}
else next();
}