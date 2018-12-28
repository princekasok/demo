var express = require('express');
var router = express.Router();
let User = require('../models/userSchema');

/* GET home page. */
router.get('/admin/home', function(req, res, next) {
  res.render('admin/index', {
    header: null,
    'mytag': 'hi'
  });
});
router.get('/api/add_class', function(req, res, next) {
  res.render('admin/index');
})
router.get('/api/add_student', function(req, res, next) {
  res.render('admin/index');
})
router.get('/api/add_staff', function(req, res, next) {
  res.render('admin/index');
})

router.get('/api/logout', function(req, res, next) {
  res.render('admin/index');
})
router.post('/api/home', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  console.log(username)
  User.find({
    username:username,password:'12345'
  }, (err, data) => {
    console.log(data);
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
