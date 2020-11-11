import React from "react";
import style from "./options.module.css";
import artistArray from "../logic/artistarray";
import { titleCase } from "../utils/texttransform";

const Options = ({ handler, nextQuestion, answered }) => {
  const showAnother = () => {
    if (answered) {
      return <button onClick={nextQuestion}>Try Another!</button>;
    }
  };
  const createArtistButtons = () => {
    return artistArray.map((artist) => {
      const regex = /_/g;
      let artistTitle = artist.replace(regex, " ");
      return (
        <button
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
      <div className={style.content}>{showAnother()}</div>
    </div>
  );
};

export default Options;
