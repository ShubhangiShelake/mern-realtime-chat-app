import { useEffect, useState } from "react";
import API from "../services/api";

function MessageArea({ chat, userId }) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await API.get(`/message/${chat._id}`);
        console.log("Messages from backend:", res.data);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (chat) fetchMessages();

  }, [chat]);

  return (
    <div className="flex-1 p-4 overflow-y-scroll">
      {messages.map(msg => (
        <div
          key={msg._id}
          className={`mb-2 p-2 rounded ${
            msg.senderId === userId ? "bg-blue-200 text-right" : "bg-gray-200 text-left"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default MessageArea;