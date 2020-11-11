import { useState, useEffect } from "react";
import Layout from "./components/layout";
import LyricsCard from "./components/LyricsCard";
import Options from "./components/Options";
import fetcher from "./logic/selection";
import Score from "./components/score";
const App = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  useEffect(() => {
    setLoading(true);
    fetcher().then((result) => {
      setTrack(result);
      setLoading(false);
    });
  }, []);
  const checkCorrect = (artist) => {
    if (artist === track.artist) {
      setCorrectAnswers(correctAnswers + 1);
      return true;
    } else {
      return false;
    }
  };
  const answer = (artistString, answer) => {
    setTotalQuestions(totalQuestions + 1);
    setAnswered(true);
    checkCorrect(artistString);
  };
  const nextQuestion = () => {
    setAnswered(false);
    fetcher().then((result) => {
      setTrack(result);
    });
  };
  return (
    <Layout>
      <LyricsCard loading={loading} track={track} answered={answered} />
      <Options
        handler={answer}
        answered={answered}
        nextQuestion={nextQuestion}
      />
      <Score totalQuestions={totalQuestions} correctAnswers={correctAnswers} />
    </Layout>
  );
};

export default App;
