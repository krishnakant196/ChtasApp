import React from "react";

function ChatList(props) {
  function updateIndex() {
    var detectClick = props.index;
    var SwitchState = 1;
    props.SetActiveChatIndex(detectClick);
    props.Switch(SwitchState);
  }
  return (
    <div className="card" onClick={updateIndex}>
      <div className="top">
        <img
          className="circle-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnsfAb2gI0rrCOkP1Rt2ZCSInjVrU2EsBN_0UlD676GtfrHREqseVn__9sOCVQtclvRw&usqp=CAU"
          alt="avatar_img"
        />
        <div style={{ width: "100%" }}>
          <h2 className="name">{props.topic}</h2>
          <p className="info">
            {props.sender}:{props.message}
          </p>
          <p className="info2">{props.time}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
