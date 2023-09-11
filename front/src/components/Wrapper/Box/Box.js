import React from "react";

const Box = (props) => {
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
