const SET_WORD_TO_STUDY = "SET_WORD_TO_STUDY";
// const SET_ALL_WORD_TO_STUDY = "SET_ALL_WORD_TO_STUDY";

let initialState = {
  wordsToStudy: [],
};

let wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORD_TO_STUDY:
      return {
        ...state,
        wordsToStudy: state.wordsToStudy.some((w) => w.id === action.word.id)
          ? state.wordsToStudy.filter((w) => w.id !== action.word.id)
          : [...state.wordsToStudy, action.word],
      };
    default:
      return state;
  }
};

export let setWordToStudy = (word) => ({ type: SET_WORD_TO_STUDY, word });

export default wordsReducer;
