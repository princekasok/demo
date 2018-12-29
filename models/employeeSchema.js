let mongoose = require('mongoose');
let db = require('../dbConfig')
let port = db.port?db.port:27017;
let host = db.host?db.host:'localhost';
let database = db.database?db.database:'testdb';
let connetionString ='mongodb://'+host+':'+port+'/'+database;

let Schema = mongoose.Schema;
let employeeSchema = new Schema({
  name: String,
    age: String,
    address: String,
    sex: String,
    type: String,
  createdAt: Date,
  updatedAt: Date

});

let Employee =    mongoose.model('Employees',employeeSchema);
module.exports = Employee;
