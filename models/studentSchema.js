let mongoose = require('mongoose');
let db = require('../dbConfig')
let port = db.port ? db.port : 27017;
let host = db.host ? db.host : 'localhost';
let database = db.database ? db.database : 'testdb';
let connetionString = 'mongodb://' + host + ':' + port + '/' + database;

let Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: String,
  age: String,
  sex: String,
  class: String,
  role: {
    type: String
  },
  address: String,
  createdAt: Date,
  updatedAt: Date
});

let Student = mongoose.model('Student', studentSchema);
module.exports = Student;
