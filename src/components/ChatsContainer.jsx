import React from "react";
import samplechat from "../samplechat";
import ChatList from "./ChatList";

// function createList(chat, index) {
//   return (
//     <ChatList
//       key={index}
//       topic={chat.topic.substring(0, 30) + "..."}
//       sender={chat.messages[1].from}
//       message={chat.messages[1].message.substring(0, 30) + "..."}
//       time={chat.messages[1].time}
//     />
//   );
// }
function ChatsContainer(props) {
  return (
    <div>
      {samplechat.map((chat, index, Switch) => {
        return (
          <ChatList
            Switch={props.Switch}
            key={index}
            index={index}
            topic={chat.topic.substring(0, 25) + "..."}
            sender={chat.messages[1].from}
            message={chat.messages[1].message.substring(0, 30) + "..."}
            time={chat.messages[1].time}
            SetActiveChatIndex={props.activeIndex}
          />
        );
      })}
    </div>
  );
}

export default ChatsContainer;
