module.exports.combiner = function(users, addresses){
 var userCollection = []
 for(var i = 0 ; i < users.length ; i++)
 {
   user = {
     firstname : users[i].firstname,
     lastname  : users[i].lastname,
     email     : users[i].email,
     address   : []
   }
   for(var j = 0 ; j < addresses.length ; j++){
     if (user.email === addresses[j].user_id)
     user.address.push(addresses[j]);
   }
   userCollection.push(user);

 }
 console.log(userCollection);

  return userCollection;
}