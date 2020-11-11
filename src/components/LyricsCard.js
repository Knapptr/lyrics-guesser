import React from "react";
import lyricsStyle from "./lyrics.module.css";
import { titleCase } from "../utils/texttransform";

const LyricsCard = ({ loading, track, answered }) => {
  const presentLyrics = () => {
    return track.stanza.map((line) => {
      return <p className={lyricsStyle.line}>{line}</p>;
    });
  };
  const q_aToggle = (answered) => {
    if (answered) {
      return (
        <div key="answerBox" className={lyricsStyle.question}>
          {presentLyrics()}
          <div className={lyricsStyle.showAppend}>
            <p>{titleCase(track.trackName)}</p>
            <p>{titleCase(track.artist.replace(/_/g, " "))}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div key="answerBox" className={lyricsStyle.answer}>
          {presentLyrics()}
          <div className={lyricsStyle.hideAppend}></div>
        </div>
      );
    }
  };
  return (
    <div className={lyricsStyle.frame}>
      <div className={lyricsStyle.content}>
        {loading ? "loading" : q_aToggle(answered)}
      </div>
    </div>
  );
};

export default LyricsCard;
