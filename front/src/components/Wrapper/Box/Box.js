import React from "react";

const Box = (props) => {
  const boxStyle = {
    borderRadius: "20px",
    border: "2.5px solid #D9D9D9",
    padding: "0.5rem",
    marginBottom: "2rem",
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
