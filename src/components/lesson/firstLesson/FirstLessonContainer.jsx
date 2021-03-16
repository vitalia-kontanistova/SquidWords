import { useEffect } from "react";
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

export default FirstLessonContainer;
