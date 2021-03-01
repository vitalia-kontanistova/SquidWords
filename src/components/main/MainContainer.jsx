import Main from "./Main";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getAllDictionaries } from "../../redux/dictionaries_selectors";
import { getDictionariesThunkCreator } from "../../redux/dictionaries_reducer";

const MainContainer = (props) => {
  useEffect(() => {
    props.getDictionaries();
  }, []);

  return <Main {...props} />;
};

const mapState = (state) => ({
  dictionaries: getAllDictionaries(state),
});

export default connect(mapState, {
  getDictionaries: getDictionariesThunkCreator,
})(MainContainer);
