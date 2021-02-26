import DictionaryList from "./DictionaryList";
import { connect } from "react-redux";
import { getAllDictionaries } from "../../redux/dictionaries_selectors";
import { getDictionariesThunkCreator } from "../../redux/dictionaries_reducer";
import { useEffect } from "react";

const DictionaryListContainer = (props) => {
  useEffect(() => {
    props.getDictionaries();
  }, []);

  return <DictionaryList {...props} />;
};

const mapState = (state) => ({
  dictionaries: getAllDictionaries(state),
});

export default connect(mapState, {
  getDictionaries: getDictionariesThunkCreator,
})(DictionaryListContainer);
