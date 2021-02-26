import { dictionariesAPI } from "../api/api";
import cover00 from "../assets/img/covers/cover.png";

const SET_DICTIONARIES = "SET_DICTIONARIES";
const SET_CURRENT_DICTIONARY = "SET_CURRENT_DICTIONARY";

let initialState = {
  dictionaries: [
    {
      id: -1,
      cover: "",
      title: "",
      descr: "",
      info: "",
    },
  ],
  currentDictionary: {
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

let dictionariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DICTIONARIES:
      return { ...state, dictionaries: action.dictionaries };
    case SET_CURRENT_DICTIONARY:
      return { ...state, currentDictionary: action.dictionary };

    default:
      return state;
  }
};

export let setDictionaries = (dictionaries) => ({
  type: SET_DICTIONARIES,
  dictionaries,
});

export let setCurentDictionary = ({ id, title, summary, cover, words }) => ({
  type: SET_CURRENT_DICTIONARY,
  dictionary: { id, title, summary, cover, words },
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

export const getCurrentDictionaryThunkCreator = (id) => (dispatch) => {
  return dictionariesAPI.getDictionary(id).then((resp) => {
    let hasCover = !!resp.data.imgUrl && resp.data.imgUrl !== "/";
    let cover = hasCover ? resp.data.imgUrl : cover00;
    let words = resp.data.words.map((w) => ({
      id: w.id,
      position: w.position,
      wordOrigin: w.wordOrigin,
      wordTranscription: w.wordTranscription,
      wordTranslate: w.wordTranslate,
    }));
    let description = !!resp.data.summary
      ? resp.data.summary
      : 'Наиболее часто употребляемые слова на тему: "' + resp.data.name + '"';

    let dictionary = {
      id: resp.data.id,
      title: resp.data.name,
      summary: description,
      cover: cover,
      words,
    };
    dispatch(setCurentDictionary(dictionary));
  });
};

export default dictionariesReducer;
