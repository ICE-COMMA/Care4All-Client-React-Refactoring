import React from "react";
import "../styles/box.css";

const Box = (props) => {
  const boxStyle = {
    ...props.style,
  };

  return (
    <>
      <div className={props.className} style={boxStyle} id={props.id}>
        {props.children}
      </div>
    </>
  );
};

export default Box;
