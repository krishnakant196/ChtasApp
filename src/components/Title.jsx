import React from "react";

function Title(props) {
  function SetState() {
    props.Switch(0);
  }
  return (
    <div className="container">
      <h3 className="navigation" onClick={SetState}>
        back
      </h3>
      <h1>Chats</h1>
      <h3></h3>
    </div>
  );
}

export default Title;
