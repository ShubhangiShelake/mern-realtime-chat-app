const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
{
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    chatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat",
        required:true
    },

    message:{
        type:String
    },

    messageType:{
        type:String,
        enum:["text","image","file","audio","video"],
        default:"text"
    },

    fileUrl:{
        type:String
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Message",messageSchema);