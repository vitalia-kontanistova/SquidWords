import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Preloader from "../preloader/Preloader";
import MyDictionary from "./MyDictionary";
import {
  deletePersonalDictionaryThunkCreator,
  getPersonalDictionaryThunkCreator,
} from "../../redux/personal_dictionaries_reducer";
import { setWordToStudy } from "../../redux/words_reducer";

function MyDictionaryContainer(props) {
  let dictionaryId = props.match.params.dictionaryId;

  useEffect(() => {
    props.getDictionary(dictionaryId);
  }, [dictionaryId]);

  if (props.dictionary.id === -1) {
    return <Preloader />;
  }
  return <MyDictionary {...props} />;
}

const mapState = (state) => ({
  dictionary: state.personalDictionaries.personalDictionary,
  wordsToStudy: state.words.wordsToStudy,
});

export default compose(
  connect(mapState, {
    getDictionary: getPersonalDictionaryThunkCreator,
    deleteDictionary: deletePersonalDictionaryThunkCreator,
    setWordToStudy: setWordToStudy,
  }),
  withRouter
)(MyDictionaryContainer);
