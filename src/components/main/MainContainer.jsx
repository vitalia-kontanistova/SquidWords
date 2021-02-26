import Main from "./Main";
import { connect } from "react-redux";

const mapState = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapState, {})(Main);
