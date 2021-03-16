import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SecondLesson from "./SecondLesson";

const SecondLessonContainer = (props) => {
  let nextButtonClick = () => {
    props.lernNextWord();
    props.startThirdLesson();
  };
  let options = props.words.slice(0, 4);

  let initialState = {};
  let resetInitialState = () => {
    options.forEach((w) => {
      initialState[w.wordId] = "";
    });
  };
  resetInitialState();
  let [wordsStatus, setWordsStatus] = useState(initialState);
  let choseAnswer = (wordId, answerId) => {
    if (wordId == answerId) {
      setWordsStatus((prevState) => (prevState[wordId] = "green"));
    } else {
      setWordsStatus((prevState) => (prevState[wordId] = "red"));
    }
  };

  return (
    <SecondLesson
      {...props}
      nextButtonClick={nextButtonClick}
      options={options}
    />
  );
};

const mapState = (state) => ({});

export default connect(mapState, {})(SecondLessonContainer);
