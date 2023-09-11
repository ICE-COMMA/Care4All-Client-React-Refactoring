import React from "react";

const Box = (props) => {
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    ...props.style,
  };

  return (
    <>
      <div className="text-box" style={boxStyle} id={props.id}>
        {props.children}
      </div>
    </>
  );
};

export default Box;
