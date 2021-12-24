import React from "react";

function Messages(props) {
  return (
    <div>
      <p className="info3">
        {props.from}:{props.message}
      </p>
      <p className="info2">{props.time}</p>
    </div>
  );
}

export default Messages;
