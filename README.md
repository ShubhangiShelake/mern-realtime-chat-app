# MERN Chat Application - Backend

This is the backend for a real-time chat application built using the MERN stack.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Socket.io
- JWT Authentication

## Features
- User Registration & Login
- JWT Authentication
- Real-time Messaging using Socket.io
- One-to-One Chat
- Group Chat
- Online / Offline Status
- File Sharing Support

## Project Structure

backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── socket/
├── config/
├── server.js
└── package.json

## Installation

Clone the repository

git clone https://github.com/yourusername/mern-chat-app.git

Install dependencies

npm install

Create .env file

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

Start the server

npm run dev

## API Endpoints

POST /api/auth/register  
POST /api/auth/login  
GET /api/chat  
POST /api/message

## Author

Shubhangi Shelake