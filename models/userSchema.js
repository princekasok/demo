let mongoose = require('mongoose');
let db = require('../dbConfig')
let port = db.port?db.port:27017;
let host = db.host?db.host:'localhost';
let database = db.database?db.database:'testdb';
let connetionString ='mongodb://'+host+':'+port+'/'+database;
console.log(connetionString);
mongoose.connect(connetionString);
let Schema = mongoose.Schema;
let userSchema = new Schema({
  name:String,
  username:{
    type:String,required:true,unique:true
  },
  password:{
    type:String,require:true
  },
  role:{type:String},
  createdAt: Date,
 updatedAt: Date

});

let user =    mongoose.model('User',userSchema);
let userObj= new user({
  name:'prince',
  username:'prince',
  password:'12345',
  role:'admin',
  createdAt:new Date(),
  updatedAt:new Date()
})
// userObj.save(function(err,data){
//   if(err)
//   {
//     console.log(err);
//   }
//   console.log('user created',data)
// })
module.exports = user;
