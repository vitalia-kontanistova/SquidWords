import { connect } from "react-redux";
import FifthLesson from "./FifthLesson";

const FifthLessonContainer = (props) => {
  let nextButtonClick = () => {
    props.lernNextWord();
  };

  return <FifthLesson {...props} nextButtonClick={nextButtonClick} />;
};

const mapState = (state) => ({});

export default connect(mapState, {})(FifthLessonContainer);
