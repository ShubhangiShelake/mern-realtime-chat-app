const router = require("express").Router();
const {chatController}=require("../controllers/chatController");

router.post("/",chatController.createChat);

router.get("/:userId",chatController.getUserChats);

module.exports = router;