import { useEffect } from "react";
import { connect } from "react-redux";
import FourthLesson from "./FourthLesson";

const FourthLessonContainer = (props) => {
  let nextButtonClick = () => {
    props.lernNextWord();
    props.startFifthLesson();
  };
  return <FourthLesson {...props} nextButtonClick={nextButtonClick} />;
};

const mapState = (state) => ({});

export default connect(mapState, {})(FourthLessonContainer);
