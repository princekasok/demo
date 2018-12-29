let mongoose = require('mongoose');
let db = require('../dbConfig')
let port = db.port?db.port:27017;
let host = db.host?db.host:'localhost';
let database = db.database?db.database:'testdb';
let connetionString ='mongodb://'+host+':'+port+'/'+database;

let Schema = mongoose.Schema;
let classesSchema = new Schema({
  name:String,
  noOfStudent:String,
  division:String,
  createdAt: Date,
  updatedAt: Date

});

let Classes =    mongoose.model('Employee',classesSchema);
module.exports = Classes;
