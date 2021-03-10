import { wordAPI } from "../api/api";

const SET_SELECTED_WORD = "SET_SELECTED_WORD";
const SET_BUNCH_OF_WORDS = "SET_BUNCH_OF_WORDS";
const TOGGLE_SELECTED_WORD = "TOGGLE_SELECTED_WORD";

let initialState = { selectedWords: [] };

let wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_WORD:
      return { ...state, selectedWords: [...state.selectedWords, action.word] };
    case SET_BUNCH_OF_WORDS:
      return { ...state, selectedWords: action.words };
    case TOGGLE_SELECTED_WORD:
      let hasCurrentWord = state.selectedWords.some(
        (w) => w.wordId === action.word.wordId
      );

      if (hasCurrentWord) {
        return {
          ...state,
          selectedWords: state.selectedWords.filter(
            (w) => w.wordId !== action.word.wordId
          ),
        };
      } else {
        return {
          ...state,
          selectedWords: [...state.selectedWords, action.word],
        };
      }
    default:
      return state;
  }
};

export let setSelectedWord = (word) => ({ type: SET_SELECTED_WORD, word });
export let setSelectedWords = (words) => ({ type: SET_BUNCH_OF_WORDS, words });
export let toggleSelectedWord = (word) => ({
  type: TOGGLE_SELECTED_WORD,
  word,
});

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
  wordsList.forEach((word) => {
    dispatch(setKnowWordThunkCreator(word.wordId));
    dispatch(toggleSelectedWord(word));
  });
};

export let setDontKnowSelectedWordsThunkCreator = (wordsList) => (dispatch) => {
  wordsList.forEach((word) => {
    dispatch(setDontKnowWordThunkCreator(word.wordId));
    dispatch(toggleSelectedWord(word));
  });
};

export default wordsReducer;
