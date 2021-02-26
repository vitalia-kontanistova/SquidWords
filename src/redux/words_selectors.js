export const getDictionary = (state) => {
  return state.dictionaries.currentDictionary;
};
export const getWords = (state) => {
  return state.dictionaries.currentDictionary.words;
};

export const getWordsToStudy = (state) => {
  return state.words.wordsToStudy;
};
