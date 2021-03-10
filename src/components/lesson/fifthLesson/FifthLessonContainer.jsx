import { connect } from "react-redux";
import FifthLesson from "./FifthLesson";

const FifthLessonContainer = (props) => {
  return <FifthLesson {...props} />;
};

const mapState = (state) => ({});

export default connect(mapState, {})(FifthLessonContainer);
