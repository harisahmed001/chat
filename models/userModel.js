var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userService = require("../services/userService");

var emailValidater = function(value,next){
    userService.emailCheck(value,function(err,row){
        if(err)
            return next(false);
        return next(!row);
    })
}

var userSchema = new Schema({
    name: {type:String, required:'Enter name'},
    email: {type:String, required:'Enter email',validate:{isAsync: true,validator:emailValidater,message: 'user already exists'}},
    password: {type:String, required:'Enter password'},
    added: {type:Date, default:Date.now}
});

//userSchema.path('email').validate({isAsync: true,validator:emailValidater},'user already exists');

var User = mongoose.model('User',userSchema);
module.exports = { User: User };