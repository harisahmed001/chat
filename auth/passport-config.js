module.exports = function(){
    
    var passport = require("passport");
    var passportLocal = require("passport-local");
    
    var userService = require("../services/userService");
 
    passport.use(new passportLocal.Strategy({usernameField:"email"},function(email, password, next){
        userService.emailCheck(email,function(err,row){
            console.log('asd');
            if(err)
                return next(err);
            if(!row || row.password!==password)
                return next(null, null);
            next(null, row);
        });
    }));
    
    
    passport.serializeUser(function(user, next){
        next(null, user.email);
    })
    
    passport.deserializeUser(function(email, next){
        userService.emailCheck(email, function(err, user){
            next(err, user);
        })
    })
    
}