import { useEffect } from "react";
import { connect } from "react-redux";
import SecondLesson from "./SecondLesson";

const SecondLessonContainer = (props) => {
  let nextButtonClick = () => {
    props.lernNextWord();
    props.startThirdLesson();
  };


  return <SecondLesson {...props} nextButtonClick={nextButtonClick} />;
};

const mapState = (state) => ({});

export default connect(mapState, {})(SecondLessonContainer);
