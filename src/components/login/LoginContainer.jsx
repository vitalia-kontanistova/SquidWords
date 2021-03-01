import { connect } from "react-redux";
import { logInThunkCreator } from "../../redux/auth_reducer";
import { getLoginError } from "../../redux/auth_selectors";
import Login from "./Login";

const LoginContainer = (props) => {
  return <Login {...props} />;
};

let mapStateToProps = (state) => ({
  loginError: getLoginError(state),
});

export default connect(mapStateToProps, {
  login: logInThunkCreator,
})(LoginContainer);
