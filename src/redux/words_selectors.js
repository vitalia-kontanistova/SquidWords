export const getDictionary = (state) => {
  return state.dictionaries.currentDictionary;
};
export const getWords = (state) => {
  return state.dictionaries.currentDictionary.words;
};

export const getWordsToStudy = (state) => {
  return state.words.wordsToStudy;
};

export const getRandomWords = (words) => {
  //cloning original array to avoid unforeseen changes there
  let pickedWords = words.slice();

  //forming array of "randome" indexes
  let indexes = [];
  for (let i = 0; i < 4; i++) {
    indexes.push(Math.floor(Math.random() * pickedWords.length));
  }

  // moving "randome" pickedWords elements to the beginning
  // to avoid repeated words
  let tempWord;
  for (let i = 0; i < indexes.length; i++) {
    tempWord = pickedWords.splice(indexes[i], 1);
    pickedWords = tempWord.concat(pickedWords);
  }

  //returning required amount (here it's 4) of "random" words
  return pickedWords.splice(0, 4);
};
