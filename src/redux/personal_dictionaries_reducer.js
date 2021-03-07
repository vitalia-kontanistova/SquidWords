import { personalDictionariesAPI } from "../api/api";
import cover00 from "../assets/img/covers/cover.png";

const SET_PERSONAL_DICTIONARIES = "SET_PERSONAL_DICTIONARIES";
const SET_PERSONAL_DICTIONARY = "SET_PERSONAL_DICTIONARY";

let initialState = {
  myDictionaries: [],
  personalDictionary: {
    id: -1,
    title: "",
    summary: "",
    cover: "",
    words: [
      {
        id: 0,
        position: 0,
        wordOrigin: "",
        wordTranscription: "",
        wordTranslate: "",
      },
    ],
  },
};

let personalDictionariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONAL_DICTIONARIES:
      return { ...state, myDictionaries: action.dictionaries };
    case SET_PERSONAL_DICTIONARY:
      return { ...state, personalDictionary: action.dictionary };

    default:
      return state;
  }
};

export let setPersonalDictionaries = (dictionaries) => ({
  type: SET_PERSONAL_DICTIONARIES,
  dictionaries,
});

export let setPersonalDictionary = (dictionary) => ({
  type: SET_PERSONAL_DICTIONARY,
  dictionary,
});

export const getPersonalDictionariesThunkCreator = () => (dispatch) => {
  return personalDictionariesAPI
    .getPersonalDictionaries()
    .then((resp) => {
      let dictionaries = resp.data.map((dictionaryData) => {
        let dictionary = dictionaryData.dictionary;

        let hasCover = !!dictionary.imgUrl && dictionary.imgUrl !== "/";
        let cover = hasCover ? dictionary.imgUrl : cover00;
        let words = dictionaryData.personalWords
          ? dictionaryData.personalWords.length
          : "100500";
        let summary = !!dictionary.summary
          ? dictionary.summary
          : 'Наиболее часто употребляемые слова на тему: "' +
            dictionary.name +
            '"';
        return {
          id: dictionary.id,
          cover: cover,
          title: dictionary.name,
          descr: summary,
          info: "Слов: " + words,
        };
      });

      dispatch(setPersonalDictionaries(dictionaries));
    })
    .catch((error) => {
      if (error.response) {
        console.error(error.response.data.message);
        debugger;
      } else if (error.request) {
        console.log(error.request);
        debugger;
      } else {
        console.log("Error", error.message);
        debugger;
      }
    });
};

/* ********************* */
export const getPersonalDictionaryThunkCreator = (dictionaryId) => (
  dispatch
) => {
  return personalDictionariesAPI
    .getPersonalDictionary(dictionaryId)
    .then((resp) => {
      /* 
        data:
          dictionary:
            id: 3
            imgUrl: "/"
            name: "Fruits (Фрукты)"
            summary: ""
          personalWords: Array(29)
            0:
            id: 176
            score: 0
            word:
              dictionaryId: 3
              id: 1045
              position: 1
              wordOrigin: "apple"
              wordTranscription: "[ æpl ]"
              wordTranslate: "яблоко"          
        */

      let hasCover =
        !!resp.data.dictionary.imgUrl && resp.data.dictionary.imgUrl !== "/";
      let cover = hasCover ? resp.data.dictionary.imgUrl : cover00;
      let words = resp.data.personalWords.map((w) => ({
        wordId: w.id,
        position: w.word.position,
        wordOrigin: w.word.wordOrigin,
        wordTranscription: w.word.wordTranscription,
        wordTranslate: w.word.wordTranslate,
      }));
      let description = !!resp.data.dictionary.summary
        ? resp.data.dictionary.summary
        : 'Наиболее часто употребляемые слова на тему: "' +
          resp.data.dictionary.name +
          '"';

      let dictionary = {
        id: resp.data.id,
        title: resp.data.dictionary.name,
        summary: description,
        cover: cover,
        words,
      };

      dispatch(setPersonalDictionary(dictionary));
    })
    .catch((error) => {
      if (error.response) {
        console.error(error.response.data.message);
        debugger;
      } else if (error.request) {
        console.log(error.request);
        debugger;
      } else {
        console.log("Error", error.message);
        debugger;
      }
    });
};

export const deletePersonalDictionaryThunkCreator = (dictionaryId) => (
  dispatch
) => {
  return personalDictionariesAPI
    .deletePersonalDictionary(dictionaryId)
    .then((resp) => {
    })
    .catch((error) => {
      if (error.response) {
        console.log("deletePersonalDictionaryThunkCreator");
        console.log(error.response.data.message);
        debugger;
      } else if (error.request) {
        console.log("deletePersonalDictionaryThunkCreator");
        console.log(error.request);
        debugger;
      } else {
        console.log("deletePersonalDictionaryThunkCreator");
        console.log("Error", error.message);
        debugger;
      }
    });
};

export default personalDictionariesReducer;
