import { personalDictionariesAPI } from "../api/api";
import cover00 from "../assets/img/covers/cover.png";
import { refreshTokenThunkCreator, temp } from "./auth_reducer";

const SET_PERSONAL_DICTIONARIES = "SET_PERSONAL_DICTIONARIES";

let initialState = {
  myDictionaries: [],
  // currentDictionary: {
  //   id: -1,
  //   title: "",
  //   summary: "",
  //   cover: "",
  //   words: [
  //     {
  //       id: 0,
  //       position: 0,
  //       wordOrigin: "",
  //       wordTranscription: "",
  //       wordTranslate: "",
  //     },
  //   ],
  // },
};

let personalDictionariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONAL_DICTIONARIES:
      return { ...state, myDictionaries: action.dictionaries };
    // case SET_CURRENT_DICTIONARY:
    //   return { ...state, currentDictionary: action.dictionary };

    default:
      return state;
  }
};

export let setPersonalDictionaries = (dictionaries) => ({
  type: SET_PERSONAL_DICTIONARIES,
  dictionaries,
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

export default personalDictionariesReducer;
