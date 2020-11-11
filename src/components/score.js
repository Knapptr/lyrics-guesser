import React from "react";
import style from "./score.module.css";
const Score = ({ totalQuestions, correctAnswers }) => {
  return (
    <div className={style.frame}>
      <div className={style.correct}>{correctAnswers} correct </div>
      <div className={style.total}>, of {totalQuestions}</div>
    </div>
  );
};
export default Score;
