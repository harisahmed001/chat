var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    chat: String,
    from: String,
    //created: {type:Date, value:Date.now()}
});

var Chat = mongoose.model('Chat',chatSchema);
module.exports = { Chat : Chat };