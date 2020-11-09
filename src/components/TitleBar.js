import React from "react";
import titleStyle from "./title.module.css";
const TitleBar = () => {
  return (
    <div className={titleStyle.frame}>
      <div className={titleStyle.content}>
        <h3>Title of Game</h3>
        <p>Small description of Game</p>
      </div>
    </div>
  );
};
export default TitleBar;
