import { wordAPI } from "../api/api";
let initialState = {};

let wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export let setKnowWordThunkCreator = (wordId) => (dispatch) => {
  wordAPI.setKnowWord(wordId).catch((error) => {
    if (error.response) {
      console.log("setKnowWordThunkCreator");
      console.log(error.response.data.message);
      debugger;
    } else if (error.request) {
      console.log("setKnowWordThunkCreator");
      console.log(error.request);
      debugger;
    } else {
      console.log("setKnowWordThunkCreator");
      console.log("Error", error.message);
      debugger;
    }
  });
};

export let setDontKnowWordThunkCreator = (wordId) => (dispatch) => {
  wordAPI.setDontKnowWord(wordId).catch((error) => {
    if (error.response) {
      console.log("setKnowWordThunkCreator");
      console.log(error.response.data.message);
      debugger;
    } else if (error.request) {
      console.log("setKnowWordThunkCreator");
      console.log(error.request);
      debugger;
    } else {
      console.log("setKnowWordThunkCreator");
      console.log("Error", error.message);
      debugger;
    }
  });
};

export let setKnowSelectedWordsThunkCreator = (wordsList) => (dispatch) => {
  wordsList.forEach((word) => dispatch(setKnowWordThunkCreator(word.wordId)));
};

export let setDontKnowSelectedWordsThunkCreator = (wordsList) => (dispatch) => {
  wordsList.forEach((word) =>
    dispatch(setDontKnowWordThunkCreator(word.wordId))
  );
};

export default wordsReducer;
