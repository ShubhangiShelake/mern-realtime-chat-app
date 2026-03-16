const Message = require("../models/Message");

exports.sendMessage = async (req,res)=>{
 try{

 const newMessage = new Message(req.body);

 const savedMessage = await newMessage.save();

 res.status(200).json(savedMessage);

 }catch(error){
 res.status(500).json(error);
 }
};