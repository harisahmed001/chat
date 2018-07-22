var express = require('express');
var router = express.Router();
var userService  = require("../services/userService");

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    //userService.addUser({name:'test',email:'test'},function(e){});
    var vm = {
        title: 'Test',
        layout: 'custom'
    }
  res.render('test',vm);
});

module.exports = router;
