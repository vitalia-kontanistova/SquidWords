import { connect } from "react-redux";
import ThirdLesson from "./ThirdLesson";

const ThirdLessonContainer = (props) => {
  let nextButtonClick = () => {
    props.lernNextWord();
    props.startFourthLesson();
  };
  return <ThirdLesson {...props} nextButtonClick={nextButtonClick} />;
};

const mapState = (state) => ({});

export default connect(mapState, {})(ThirdLessonContainer);
