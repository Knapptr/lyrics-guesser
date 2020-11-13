import React from "react";
import titleStyle from "./title.module.css";
const TitleBar = () => {
  return (
    <div className={titleStyle.frame}>
      <div className={titleStyle.content}>
        <h3>Under the Table and Phishing</h3>
        <p>
          Based on a bit from{" "}
          <a href="https://www.themcelroy.family/mbmbam">MBMBAM</a>. Do these
          randomly selected lyrics belong to Phish, or Dave Matthew's Band?
        </p>
      </div>
    </div>
  );
};
export default TitleBar;
