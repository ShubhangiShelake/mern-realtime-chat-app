import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api"; // Axios instance

function ChatList({ userId, setCurrentChat }) {

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await API.get(`/chat/${userId}`);
        console.log("Chats from backend:", res.data);
        setChats(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchChats();
  }, [userId]);

  return (
    <div className="w-64 h-screen bg-gray-100 border-r flex flex-col">

      {/* Profile Section */}
      <div className="flex items-center p-4 border-b">
        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
          S
        </div>

        <Link to="/profile" className="ml-3 font-semibold">
          My Profile
        </Link>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        <h2 className="p-4 font-bold">Chats</h2>

        {chats.map((chat) => {
          // show the other user in the chat
          const otherUser = chat.members.find(m => m._id !== userId);

          return (
            <div
              key={chat._id}
              className="p-3 hover:bg-gray-200 cursor-pointer"
              onClick={() => setCurrentChat(chat)}
            >
              {otherUser?.name || "Unknown User"}
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ChatList;