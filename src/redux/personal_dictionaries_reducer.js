import { dictionariesAPI } from "../api/api";
import cover00 from "../assets/img/covers/cover.png";
// personalDictionariesAPI
// getPersonalDictionaries

const SET_DICTIONARIES = "SET_DICTIONARIES";

let initialState = {};

let personalDictionariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DICTIONARIES:
      return { ...state, dictionaries: action.dictionaries };
    default:
      return state;
  }
};

export let setDictionaries = (dictionaries) => ({
  type: SET_DICTIONARIES,
  dictionaries,
});

export const getDictionariesThunkCreator = () => (dispatch) => {
  return dictionariesAPI.getDictionaries().then((resp) => {
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

    dispatch(setDictionaries(dictionaries));
  });
};

export const getPersonalDictionaryThunkCreator = (id) => (dispatch) => {
  return personalDictionariesAPI.getPersonalDictionaries(id).then((resp) => {
    dispatch(setDictionaries(dictionaries));
  });
};

export default personalDictionariesReducer;
