import React from "react";
import samplechat from "../samplechat";
import Messages from "./Messages";

function createMessage(info, index) {
  return (
    <Messages
      key={index}
      from={info.from}
      message={info.message}
      time={info.time}
    />
  );
}
function MessageContainer(props) {
  const index = props.index;
  return (
    <div className="card2">
      <div className="top2">
        <img
          className="circle2-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnsfAb2gI0rrCOkP1Rt2ZCSInjVrU2EsBN_0UlD676GtfrHREqseVn__9sOCVQtclvRw&usqp=CAU"
          alt="avatar_img"
        />
        <h2 className="name2">{samplechat[index].topic}</h2>
      </div>
      <div className="bottom2">
        <div className="messages">
          {samplechat[index].messages.map(createMessage)}
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;
