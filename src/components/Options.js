import React from "react";
import style from "./options.module.css";
import artistArray from "../logic/artistarray";
import { titleCase } from "../utils/texttransform";

const Options = ({ handler, nextQuestion, answered, correct }) => {
  const createArtistButtons = () => {
    return artistArray.map((artist) => {
      const regex = /_/g;
      let artistTitle = artist.replace(regex, " ");
      return (
        <button
          className={`${style.button} ${
            answered && correct === artist && style.correct
          } ${answered && correct !== artist && style.incorrect}`}
          onClick={() => {
            handler(artist);
          }}
        >
          {titleCase(artistTitle)}
        </button>
      );
    });
  };
  return (
    <div className={style.frame}>
      <div className={style.content}>{createArtistButtons()}</div>
    </div>
  );
};

export default Options;
