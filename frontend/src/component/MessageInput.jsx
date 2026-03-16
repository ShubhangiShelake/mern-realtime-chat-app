import { useState } from "react";
import API from "../services/api";

function MessageInput({ chat, senderId }) {

  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    try {
      await API.post("/message", {
        chatId: chat._id,
        senderId,
        text
      });

      setText("");
      // optional: reload messages after sending
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex border-t p-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border p-2 rounded"
        placeholder="Type message..."
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;