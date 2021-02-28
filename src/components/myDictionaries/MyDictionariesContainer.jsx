import { connect } from "react-redux";
import { useEffect } from "react";
import { getMyDictionaries } from "../../redux/personal_dictionaries_selectors";
import { getPersonalDictionariesThunkCreator } from "../../redux/personal_dictionaries_reducer";
import MyDictionaries from "./MyDictionaries";

const MyDictionariesContainer = (props) => {
  useEffect(() => {
    props.getMyDictionaries();
  }, []);

  return <MyDictionaries {...props} />;
};

const mapState = (state) => ({
  isAuth: state.auth.isAuth,
  dictionaries: getMyDictionaries(state),
});

export default connect(mapState, {
  getMyDictionaries: getPersonalDictionariesThunkCreator,
})(MyDictionariesContainer);
