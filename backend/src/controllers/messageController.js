const Message = require("../modules/message");


// Send Message
exports.sendMessage = async (req,res)=>{
 try{

 const newMessage = new Message(req.body);

 const savedMessage = await newMessage.save();

 res.status(200).json(savedMessage);

 }catch(error){
 res.status(500).json(error);
 }
};



// Get Messages
exports.getMessages = async (req,res)=>{
 try{

 const chatId = req.params.chatId;

 const messages = await Message.find({
     chatId:chatId
 }).populate("senderId","name profilePic");

 res.status(200).json(messages);

 }catch(error){
 res.status(500).json(error);
 }
};