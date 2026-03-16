const router = require("express").Router();

const {createChat,getUserChats} = require("../controllers/chatController");

router.post("/",createChat);

router.get("/:userId",getUserChats);

module.exports = router;