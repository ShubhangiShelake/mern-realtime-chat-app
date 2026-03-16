const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router=require("./routes/auth");
const cors = require("cors");

dotenv.config(); 

const app = express();
app.use(cors());

connectDB();

app.use(express.json());

app.use("/api/auth",router);

module.exports=app;