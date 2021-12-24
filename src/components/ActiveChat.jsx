import React from "react";
import MessageContainer from "./MessageContainer";

function ActiveChat(props) {
  return (
    <div>
      <MessageContainer index={props.activeIndex} />
    </div>
  );
}

export default ActiveChat;
