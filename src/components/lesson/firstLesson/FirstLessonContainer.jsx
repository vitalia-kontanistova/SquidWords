import { useEffect } from "react";
import { connect } from "react-redux";
import FirstLesson from "./FirstLesson";

const FirstLessonContainer = (props) => {
  useEffect(() => {
    props.startFirstLesson();
  }, []);

  let nextButtonClick = () => {
    props.lernNextWord();
    props.startSecondLesson();
  };

  return <FirstLesson {...props} nextButtonClick={nextButtonClick} />;
};

const mapState = (state) => ({});

export default connect(mapState, {})(FirstLessonContainer);
