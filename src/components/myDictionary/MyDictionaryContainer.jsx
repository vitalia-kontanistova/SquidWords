import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect, withRouter } from "react-router-dom";
import Preloader from "../preloader/Preloader";
import MyDictionary from "./MyDictionary";
import {
  deletePersonalDictionaryThunkCreator,
  createPersonalDictionaryThunkCreator,
} from "../../redux/personal_dictionaries_reducer";
import {
  setDontKnowWordThunkCreator,
  setKnowSelectedWordsThunkCreator,
  setDontKnowSelectedWordsThunkCreator,
  setKnowWordThunkCreator,
  toggleSelectedWord,
  setSelectedWords,
} from "../../redux/words_reducer";

function MyDictionaryContainer(props) {
  let currentId = props.match.params.dictionaryId;
  useEffect(() => {
    props.getDictionary(currentId);
    setSelectedWords([]);
  }, [currentId, props.dictionary.id, props.selectedWords.length]);

  let [isRemoved, setRemovingStatus] = useState(false);
  let deleteFromPersonals = () => {
    props.deleteDictionary(props.dictionary.id);
    setRemovingStatus(true);
  };
  let toggleSelectAll = () => {
    if (props.selectedWords.length < props.dictionary.words.length) {
      props.setSelectedWords(props.dictionary.words);
    } else {
      props.setSelectedWords([]);
    }
  };

  if (props.dictionary.id === -1) {
    return <Preloader />;
  }

  if (isRemoved) {
    return <Redirect to="/my-dictionaries" />;
  }

  return (
    <MyDictionary
      dictionary={props.dictionary}
      selectedWords={props.selectedWords}
      knowWords={props.knowWords}
      dontKnowWords={props.dontKnowWords}
      toggleSelectAll={toggleSelectAll}
      deleteDictionary={deleteFromPersonals}
    />
  );
}

const mapState = (state) => ({
  dictionary: state.personalDictionaries.personalDictionary,
  selectedWords: state.words.selectedWords,
});

export default compose(
  connect(mapState, {
    getDictionary: createPersonalDictionaryThunkCreator,
    deleteDictionary: deletePersonalDictionaryThunkCreator,
    know: setKnowWordThunkCreator,
    dontKnow: setDontKnowWordThunkCreator,
    knowWords: setKnowSelectedWordsThunkCreator,
    dontKnowWords: setDontKnowSelectedWordsThunkCreator,
    toggleSelectedWord: toggleSelectedWord,
    setSelectedWords: setSelectedWords,
  }),
  withRouter
)(MyDictionaryContainer);
