var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var vm = { 
    title: 'Home' , 
    layout: 'custom', 
    user: req.user,
    err: req.flash('error')
  };
  res.render('home', vm);
});

module.exports = router;
