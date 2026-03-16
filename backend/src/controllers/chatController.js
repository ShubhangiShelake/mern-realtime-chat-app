const Chat = require("../models/Chat");

// Create Chat (one-to-one)
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