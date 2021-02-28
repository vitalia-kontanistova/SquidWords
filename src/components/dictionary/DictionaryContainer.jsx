import React, { useEffect } from "react";
import Dictionary from "./Dictionary";
import { connect } from "react-redux";
import {
  getDictionary,
  getWords,
  getWordsToStudy,
} from "../../redux/words_selectors";
import { getCurrentDictionaryThunkCreator } from "../../redux/dictionaries_reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { setWordToStudy } from "../../redux/words_reducer";
import Preloader from "../preloader/Preloader";

function DictionaryContainer(props) {
  let dictionaryId = props.match.params.dictionaryId;

  useEffect(() => {
    props.getDictionary(dictionaryId);
  }, [dictionaryId]);

  if (props.dictionary.id !== dictionaryId) {
    return <Preloader />;
  }
  return <Dictionary {...props} />;
}

const mapState = (state) => ({
  dictionary: getDictionary(state),
  words: getWords(state),
  wordsToStudy: getWordsToStudy(state),
});

export default compose(
  connect(mapState, {
    getDictionary: getCurrentDictionaryThunkCreator,
    setWordToStudy: setWordToStudy,
  }),
  withRouter
)(DictionaryContainer);
