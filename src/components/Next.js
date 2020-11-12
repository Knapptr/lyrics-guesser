import React from "react";
import style from "./options.module.css";
const Next = ({ nextQuestion }) => {
  return (
    <div className={style.frame}>
      <button onClick={nextQuestion} className={style.button}>
        Try another!
      </button>
    </div>
  );
};

export default Next;
