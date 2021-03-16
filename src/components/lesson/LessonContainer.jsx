import Lesson from "./Lesson";
import { connect } from "react-redux";
import { useState } from "react";

const LessonContainer = (props) => {
  let wordsList = [
    {
      wordId: 1,
      score: 0,
      position: 25,
      wordOrigin: "1 word",
      wordTranscription: "[ 1 ]",
      wordTranslate: "1 translation",
    },
    {
      wordId: 2,
      score: 0,
      position: 25,
      wordOrigin: "2 word",
      wordTranscription: "[ 2 ]",
      wordTranslate: "2 translation",
    },
    {
      wordId: 3,
      score: 0,
      position: 25,
      wordOrigin: "3 word",
      wordTranscription: "[ 3 ]",
      wordTranslate: "3 translation",
    },
    {
      wordId: 4,
      score: 0,
      position: 25,
      wordOrigin: "4 word",
      wordTranscription: "[ 4 ]",
      wordTranslate: "4 translation",
    },
    {
      wordId: 5,
      score: 0,
      position: 25,
      wordOrigin: "5 word",
      wordTranscription: "[ 5 ]",
      wordTranslate: "5 translation",
    },
  ];

  let [words, setWords] = useState(wordsList);
  let lernNextWord = () => {
    let newList = words.slice(1).concat(words[0]);
    setWords(newList);
  };
  let anchorWord = wordsList[wordsList.length - 1];
  let [startedLessons, setLessonStart] = useState({
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    lesson5: false,
  });
  let startFirstLesson = () => {
    setLessonStart((state) => ({ ...state, lesson1: true }));
  };
  let startSecondLesson = () => {
    if (anchorWord.wordId === words[0].wordId) {
      setLessonStart((state) => ({ ...state, lesson2: true }));
    }
  };
  let startThirdLesson = () => {
    if (anchorWord.wordId === words[0].wordId) {
      setLessonStart((state) => ({ ...state, lesson3: true }));
    }
  };
  let startFourthLesson = () => {
    if (anchorWord.wordId === words[0].wordId) {
      setLessonStart((state) => ({ ...state, lesson4: true }));
    }
  };
  let startFifthLesson = () => {
    if (anchorWord.wordId === words[0].wordId) {
      setLessonStart((state) => ({ ...state, lesson5: true }));
    }
  };

  return (
    <Lesson
      {...props}
      words={words}
      anchorWord={anchorWord}
      startedLessons={startedLessons}
      lernNextWord={lernNextWord}
      startFirstLesson={startFirstLesson}
      startSecondLesson={startSecondLesson}
      startThirdLesson={startThirdLesson}
      startFourthLesson={startFourthLesson}
      startFifthLesson={startFifthLesson}
    />
  );
};

const mapState = (state) => ({});

export default connect(mapState, {})(LessonContainer);
