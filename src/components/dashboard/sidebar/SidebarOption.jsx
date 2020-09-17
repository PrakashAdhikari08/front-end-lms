import React from "react";
import "./SidebarOption.css";
const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <img src={Icon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default SidebarOption;
