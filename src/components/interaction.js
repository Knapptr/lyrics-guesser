import React from "react";
import style from "./interaction.module.css";
const Interaction = ({ children }) => {
  return <div className={style.frame}>{children}</div>;
};
export default Interaction;
