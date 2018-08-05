var express = require('express');
var router = express.Router();
var user = require("../services/userService");
var passport = require("passport");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login',{layout: 'custom'});
});
/*
router.post('/loginn', function(req, res, next) {
  var obj = {
      email: req.body.email,
      password:req.body.password
  };
  user.getUser(obj,function(data,ret){
      if(ret){
        obj['error'] = ret;
        obj['layout'] = 'custom';
        return res.render('login',obj);
      }else{
        console.log(data);
        if(data && data.password==req.body.password){
          return res.redirect('/');
        }else{
          obj['error'] = 'User not found';
          obj['layout'] = 'custom';
          return res.render('login',obj);
        }
      }
      //return res.redirect('/');
  })
});
*/

router.get('/register', function(req, res, next) {
  res.render('register',{layout: 'custom'});
});
router.post('/register', function(req, res, next) {
  var obj = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
  };
  user.addUser(obj,function(ret){
      if(ret){
        obj['error'] = ret;
        obj['layout'] = 'custom';
        return res.render('register',obj);
      }
      
      req.login(req.body,function(err){
        return res.redirect('/');
      });
      //return res.redirect('/users/register');
      //return res.redirect('/');
  })
});

router.get('/all', function(req, res, next) {
  user.getUsers(function(data,err){
      if(err)
          return res.send('err');
          
      return res.send(data);
  })
});

router.get('/single', function(req, res, next) {
    
  var obj = {
      email: 'test@test.com'
  };
  
  user.getUser(obj,function(data,err){
      if(err)
          return res.send('err');
          
      return res.send(data);
  })
});

router.get('/update', function(req, res, next) {
  var obj = {
      email: 'test3@test.com'
  };
  var upd = {
      _id: '5b48958adec91014011dba48'
  };
  user.updateUser(upd,obj,function(err){
      if(err)
          return res.send('err');
      return res.send('ok');
  })
});

router.post('/login', passport.authenticate('local',{ 
  failureRedirect:'/', 
  successRedirect:'/chat',
  failureFlash:'Invalid Credentials'
}));

router.get('/logout', function(req, res, next) {
  req.logout();
  return res.redirect('/');
})


module.exports = router;
