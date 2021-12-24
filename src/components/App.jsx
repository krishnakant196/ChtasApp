import React, { useState } from "react";
import Title from "./Title";
import ChatContainer from "./ChatsContainer";
import ActiveChat from "./ActiveChat";

function App() {
  const [ActiveChatIndex, SetActiveChatIndex] = useState(0);
  const [Switch, SetSwitch] = useState(0);

  return (
    <div className="parent">
      <div className="title">
        <Title Switch={SetSwitch} />
      </div>

      <div className="ChatWindow">
        {Switch === 0 ? (
          <div className="ChatList">
            <ChatContainer
              activeIndex={SetActiveChatIndex}
              Switch={SetSwitch}
            />
          </div>
        ) : (
          <div className="Chats">
            <ActiveChat activeIndex={ActiveChatIndex} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
