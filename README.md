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




# MERN Chat Application - Frontend

This is the **frontend of a real-time chat application** built using the MERN stack.
The frontend is developed using **React.js** and communicates with the backend API to enable messaging features.

---

## 🚀 Tech Stack

* React.js
* JavaScript (ES6)
* Axios
* Socket.io-client
* CSS / Tailwind CSS

---

## ✨ Features

* User Registration & Login
* Real-time messaging
* One-to-one chat
* Group chat
* Online / Offline user status
* Message notifications
* Responsive UI

---

## 📁 Project Structure

frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── utils/
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md

---

## ⚙️ Installation

Clone the repository

git clone https://github.com/yourusername/mern-realtime-chat-app.git

Go to frontend folder

cd frontend

Install dependencies

npm install

Start the development server

npm start

The application will run on:

http://localhost:3000

---

## 🔗 Backend API

The frontend communicates with the backend API running on:

http://localhost:5000

Make sure the **backend server is running before starting the frontend**.

---

## 👩‍💻 Author

**Shubhangi Shelake**

MERN Stack Developer
