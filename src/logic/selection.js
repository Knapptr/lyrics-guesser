// 1. Choose P or DMB
// 2. Fetch Array
// 3. Select random entry

//// ISSUES
// Cover songs are not filtered out (data not present to filter)
// solution could be to serve songs from a DB, users flag covers-
// after review those flagged songs are removed?

import artistArray from "./artistarray";

const artistSelector = () => {
  //returns filename to fetch
  const selection = Math.floor(Math.random() * artistArray.length);
  return `${artistArray[selection]}.json`;
};
const trackSelector = (trackArray) => {
  const trackIndex = Math.floor(Math.random() * trackArray.length);
  console.log(trackIndex);
  return trackArray[trackIndex];
};
const selectStanza = (stanzaArray) => {
  const stanzaIndex = Math.floor(Math.random() * stanzaArray.length);
  return stanzaArray[stanzaIndex];
};
const fetcher = async () => {
  let validResult = false;
  let selectedTrack;
  let stanza;
  while (validResult === false) {
    const fileName = artistSelector();
    const result = await fetch(`data/${fileName}`);
    const json = await result.json();
    selectedTrack = trackSelector(json.data);
    // some entries in the DB have empty strings as lyrics. Filter them out
    if (selectedTrack.lyrics.length > 10) {
      validResult = true;
      //parse lines into an array
      selectedTrack.lyrics = selectedTrack.lyrics.split("\n");
      //create 'stanza indexes'
      let stanzaIndexes = [0];
      selectedTrack.lyrics.forEach((line, index) => {
        if (line === "") {
          stanzaIndexes.push(index);
        }
      });
      stanzaIndexes.push(selectedTrack.lyrics.length);
      let stanzas = [];
      for (let i = 0; i < stanzaIndexes.length - 1; i++) {
        let stanzaArray = selectedTrack.lyrics.slice(
          stanzaIndexes[i],
          stanzaIndexes[i + 1]
        );

        stanzas.push(stanzaArray.filter((el) => el !== "" && el !== "..."));
      }

      stanza = selectStanza(stanzas);
      if (stanza.length === 0) {
        validResult = false;
      }
    }

    // currently, the stanza will be selected at random, but this could include
    //  the stanza that is cut off by ...
    // filter that stanza out from options?
  }
  let returnData = {
    artist: selectedTrack.artist,
    trackName: selectedTrack.trackName,
    stanza: stanza,
  };
  return returnData;
};

export default fetcher;
