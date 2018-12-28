
let User = require('../models/userSchema');
let userObj= new User({
  name:'admin',
  username:'admin@test.co',
  password:'12345',
  role:'admin',
  createdAt:new Date(),
  updatedAt:new Date()
})


module.exports.createAdmin  =function ()
{
  userObj.save(function(err,data){
    if(err)
    {
      console.log(err);
    }
    console.log('Admin created Successfully')
    console.log('username : '+data.username);
    console.log('password : '+data.password);
    process.exit(0);
  })

}
