var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    chat: String,
    from_id: String,
    to_id: String,
    created: {type:Date, default:Date.now}
});

var Chat = mongoose.model('Chat',chatSchema);
module.exports = { Chat : Chat };