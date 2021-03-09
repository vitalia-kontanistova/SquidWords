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
} from "../../redux/words_reducer";

function MyDictionaryContainer(props) {
  let [isRemoved, setRemovingStatus] = useState(false);
  let deleteFromPersonals = () => {
    props.deleteDictionary(props.dictionary.id);
    setRemovingStatus(true);
  };

  let [selectedWords, setSelectedWords] = useState([]);
  let toggleSelectedWord = (word) => {
    let hasCurrentWord = selectedWords.some((w) => w.wordId === word.wordId);

    if (hasCurrentWord) {
      setSelectedWords(selectedWords.filter((w) => w.wordId !== word.wordId));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  useEffect(() => {
    props.getDictionary(props.match.params.dictionaryId);
  }, [props.dictionary]);

  let knowSelectedWords = () => {
    props.knowWords(selectedWords);
    setSelectedWords([]);
  };
  let dontKnowSelectedWords = () => {
    props.dontKnowWords(selectedWords);
    setSelectedWords([]);
  };
  let toggleSelectAll = () => {
    let words = props.dictionary.words;
    if (selectedWords.length < words.length) {
      setSelectedWords(words);
    } else {
      setSelectedWords([]);
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
      know={props.know}
      dontKnow={props.dontKnow}
      toggleSelectedWord={toggleSelectedWord}
      knowSelectedWords={knowSelectedWords}
      dontKnowSelectedWords={dontKnowSelectedWords}
      toggleSelectAll={toggleSelectAll}
      deleteDictionary={deleteFromPersonals}
      dictionary={props.dictionary}
      selectedWords={selectedWords}
    />
  );
}

const mapState = (state) => ({
  dictionary: state.personalDictionaries.personalDictionary,
});

export default compose(
  connect(mapState, {
    getDictionary: createPersonalDictionaryThunkCreator,
    deleteDictionary: deletePersonalDictionaryThunkCreator,
    know: setKnowWordThunkCreator,
    dontKnow: setDontKnowWordThunkCreator,
    knowWords: setKnowSelectedWordsThunkCreator,
    dontKnowWords: setDontKnowSelectedWordsThunkCreator,
  }),
  withRouter
)(MyDictionaryContainer);
