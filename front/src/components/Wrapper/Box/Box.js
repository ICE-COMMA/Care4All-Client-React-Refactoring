import React from "react";
import "./Box.css";

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
