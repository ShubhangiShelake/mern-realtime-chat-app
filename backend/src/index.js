const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes =require("./routes/auth");
const chatRoutes=require("./routes/chatRoutes");
const messageRoutes=require("./routes/messageRoutes");
const cors = require("cors");

dotenv.config(); 

const app = express();
app.use(cors());

connectDB();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/chat",chatRoutes);
app.use("/api/message",messageRoutes);

module.exports=app;