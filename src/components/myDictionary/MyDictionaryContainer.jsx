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
  useEffect(() => {
    props.getDictionary(props.match.params.dictionaryId);

    console.log("MyDictionaryContainer " + props.selectedWords.length);
  }, [props.dictionary.id, props.selectedWords.length]);

  let [isRemoved, setRemovingStatus] = useState(false);
  let deleteFromPersonals = () => {
    props.deleteDictionary(props.dictionary.id);
    setRemovingStatus(true);
  };

  let selectedWords = props.selectedWords;
  let knowSelectedWords = () => {
    props.knowWords(selectedWords);
  };
  let dontKnowSelectedWords = () => {
    props.dontKnowWords(selectedWords);
  };
  let toggleSelectAll = () => {
    let words = props.dictionary.words;
    if (selectedWords.length < words.length) {
      props.setSelectedWords(words);
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
      {...props}
      know={props.know}
      dontKnow={props.dontKnow}
      knowSelectedWords={knowSelectedWords}
      dontKnowSelectedWords={dontKnowSelectedWords}
      toggleSelectAll={toggleSelectAll}
      deleteDictionary={deleteFromPersonals}
      dictionary={props.dictionary}
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
