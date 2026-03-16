import { useState } from "react";
import ChatList from "../component/ChatList";
import MessageArea from "../component/MessageArea";
import MessageInput from "../component/MessageInput";

function Chat() {

  const userId = "YOUR_LOGGED_IN_USER_ID"; // get this from login/auth
  const [currentChat, setCurrentChat] = useState(null);

  return (
    <div className="flex h-screen">

      <ChatList userId={userId} setCurrentChat={setCurrentChat} />

      <div className="flex flex-col flex-1">

        {currentChat ? (
          <>
            <MessageArea chat={currentChat} userId={userId} />
            <MessageInput chat={currentChat} senderId={userId} />
          </>
        ) : (
          <div className="flex-1 flex justify-center items-center">
            Select a chat to start messaging
          </div>
        )}

      </div>

    </div>
  );
}

export default Chat;