import React from "react";
import lyricsStyle from "./lyrics.module.css";

const LyricsCard = ({ loading, track }) => {
  const presentLyrics = () => {
    return track.stanza.map((line) => {
      return <p>{line}</p>;
    });
  };
  return (
    <div className={lyricsStyle.frame}>
      <div className={lyricsStyle.content}>
        {loading ? "loading" : presentLyrics()}
      </div>
    </div>
  );
};

export default LyricsCard;
