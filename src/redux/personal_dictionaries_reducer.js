import { personalDictionariesAPI } from "../api/api";
import cover00 from "../assets/img/covers/cover.png";

const SET_PERSONAL_DICTIONARIES = "SET_PERSONAL_DICTIONARIES";

let initialState = {
  myDictionaries: [
    {
      id: -1,
      cover: "",
      title: "",
      descr: "",
      info: "",
    },
  ],
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
  return personalDictionariesAPI.getPersonalDictionaries().then((resp) => {
    let dictionaries = resp.data.map((d) => {
      let hasCover = !!d.imgUrl && d.imgUrl !== "/";
      let cover = hasCover ? d.imgUrl : cover00;
      let words = d.words ? d.words.length : "100500";
      let summary = !!d.summary
        ? d.summary
        : 'Наиболее часто употребляемые слова на тему: "' + d.name + '"';
      return {
        id: d.id,
        cover: cover,
        title: d.name,
        descr: summary,
        info: "Слов: " + words,
      };
    });

    dispatch(setPersonalDictionaries(dictionaries));
  });
};

export default personalDictionariesReducer;
