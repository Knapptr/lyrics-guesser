import { useState, useEffect } from "react";
import Layout from "./components/layout";
import LyricsCard from "./components/LyricsCard";
import Options from "./components/Options";
import fetcher from "./logic/selection";
const App = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetcher().then((result) => {
      setTrack(result);
      setLoading(false);
    });
  }, []);
  return (
    <Layout>
      <LyricsCard loading={loading} track={track} />
      <Options />
    </Layout>
  );
};

export default App;
