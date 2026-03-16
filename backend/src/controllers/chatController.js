const Chat = require("../modules/chat");

// Create Chat
exports.createChat = async (req,res)=>{
 try{

 const {senderId,receiverId} = req.body;

 const newChat = new Chat({
     members:[senderId,receiverId]
 });

 const savedChat = await newChat.save();

 res.status(200).json(savedChat);

 }catch(error){
  res.status(500).json(error);
 }
};


// Get Chats of User
exports.getUserChats = async (req,res)=>{
 try{

 const userId = req.params.userId;

 const chats = await Chat.find({
     members:{$in:[userId]}
 }).populate("members","name email profilePic");

 res.status(200).json(chats);

 }catch(error){
 res.status(500).json(error);
 }
};