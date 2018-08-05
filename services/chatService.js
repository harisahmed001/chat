var chat = require("../models/chatModel").Chat;

exports.addChat = function(req,res){
    var chatSave = new chat({
        chat: req.mess,
        from_id: req.from_id,
        to_id: req.to_id,
    });
    
    chatSave.save(function(err){
        if(err)
            return res(err);
        else
            return res(null);
    });
}