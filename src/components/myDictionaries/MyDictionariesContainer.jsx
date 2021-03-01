import { connect } from "react-redux";
import { useEffect } from "react";
import { getMyDictionaries } from "../../redux/personal_dictionaries_selectors";
import { getPersonalDictionariesThunkCreator } from "../../redux/personal_dictionaries_reducer";
import MyDictionaries from "./MyDictionaries";
import { Redirect } from "react-router-dom";

const MyDictionariesContainer = (props) => {
  useEffect(() => {
    if (props.isAuth) {
      props.getMyDictionaries();
    }
  }, []);

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }

  return <MyDictionaries {...props} />;
};

const mapState = (state) => ({
  dictionaries: getMyDictionaries(state),
});

export default connect(mapState, {
  getMyDictionaries: getPersonalDictionariesThunkCreator,
})(MyDictionariesContainer);
