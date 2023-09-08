import "./Center.css";
import LeftNav from "../LeftNav/LeftNav";
import Content from "./Content";
import RightNav from "../RightNav/RightNav";

function Center() {
  const leftNavStyle = {
    flex: 1 /* 3:4:3 비율 중 3 */,
    backgroundColor: "#ffffff",
    borderRight: "1px solid #d9d9d9",
    overflowY: "auto",
  };

  const contentStyle = {
    flex: 4 /* 3:4:3 비율 중 4 */,
  };

  const rightNavStyle = {
    flex: 1 /* 3:4:3 비율 중 3 */,
    backgroundColor: "#ffffff",
    borderLeft: "1px solid #d9d9d9",
    overflowY: "auto",
  };

  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
      }}
    >
      <LeftNav style={leftNavStyle} />
      <Content style={contentStyle} />
      <RightNav style={rightNavStyle} />
    </div>
  );
}

export default Center;
