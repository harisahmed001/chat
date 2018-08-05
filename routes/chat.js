var express = require('express');
var router = express.Router();
var userService  = require("../services/userService");
var restrict  = require("../auth/restrict");

/* GET users listing. */
router.get('/', restrict, function(req, res, next) {
    //console.log(req.user._id);
    //userService.addUser({name:'test',email:'test'},function(e){});
    var vm = {
        title: 'Test',
        layout: 'custom',
        user: req.user
    }
  res.render('chat',vm);
});

module.exports = router;
