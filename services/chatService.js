var chat = require("../models/chatModel").Chat;

exports.addChat = function(req,res){
    var chatSave = new chat({
        chat: req.mess,
        from: req.id
    });
    
    chatSave.save(function(err){
        if(err)
            return res(err);
        else
            return res(null);
    });
}