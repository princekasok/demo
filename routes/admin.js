var express = require('express');
var router = express.Router();
let User = require('../models/userSchema');
let Student = require('../models/studentSchema');
let Classes = require('../models/classesSchema');
let Employee = require('../models/employeeSchema');

/* GET home page. */
router.get('/admin/home', function(req, res, next) {
  res.render('admin/index', {
    header: null,
    'mytag': 'hi'
  });
});
router.get('/api/add_class', function(req, res, next) {
  res.render('admin/add_class');
})
router.get('/api/add_student', function(req, res, next) {
  res.render('admin/add_student');
})
router.get('/api/add_staff', function(req, res, next) {
  res.render('admin/add_class');
})

router.get('/api/logout', function(req, res, next) {
  res.render('admin/index');
})

router.get('/admin/students/list', function(req, res, next) {

Student.find({},(err,data)=>{
  if(err)
  {
    console.log(err)
  }

  if(data.length){
    res.end('Page under construction');
  }
  else {
    res.end('list empty');
  }
});
});
router.get('/admin/employees/list', function(req, res, next) {

Employee.find({},(err,data)=>{
  if(err)
  {
    console.log(err)
  }

  if(data.length){
    res.end('Page under construction');
  }
  else {
    res.end('list empty');
  }
});
});
router.get('/admin/classes/list', function(req, res, next) {

Classes.find({},(err,data)=>{
  if(err)
  {
    console.log(err)
  }

  if(data.length){
    res.end('Page under construction');
  }
  else {
    res.end('list empty');
  }
});



  res.render('admin/index');
})



router.get('/admin/home/success', function(req, res, next) {



})



router.post('/admin/student/add', function(req, res, next) {


let studentObj= new Student({
  name:req.body.name,
  age:req.body.dob,
  sex:req.body.sex,
  class:req.body.class,
  role:'Student',
  createdAt: new Date(),
  updatedAt: new Date()
});

studentObj.save(function(err,data){
  if(err)
  {
    console.log(err);
  }
  res.render('admin/home', {
    header: true,
    'mytag': 'Successfully added student '
  });
})
})

router.post('/api/home', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  User.find({
    username:username,password:'12345'
  }, (err, data) => {
    if (data.length) {
      res.render('admin/home', {
        header: true,
        'mytag': 'hi'
      });
    } else {
      res.redirect('/');
    }
  })

});

module.exports = router;
