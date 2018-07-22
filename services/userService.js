var User = require("./../models/userModel").User;

exports.addUser = function(req,callback){
    
    var user = new User({
        name: req.name,
        email: req.email.toLowerCase(),
        password: req.password
    });
    
    user.save(function(err){
        if(err)
            return callback(err);
        else
           return callback(null); 
    })
    
}

exports.getUsers = function(callback){
    
    //var user = new User;
    User.find({},function(err,data){
        if(err)
            return callback(null,err);
        else
           return callback(data,null); 
    });
}

exports.getUser = function(condtion,callback) {
    User.findOne({email:condtion.email},function(err,data){
        if(err)
            return callback(null,err);
        return callback(data,null);
    })
}

exports.emailCheck = function(value,next){
    User.findOne({email:value},function(err,row){
        return next(err,row);
    })
}

exports.updateUser = function(condtion,update,callback){
    
    User.update(condtion,update,function(err){
        if(err)
            return callback(err);
        return callback(null);
    });
    
}