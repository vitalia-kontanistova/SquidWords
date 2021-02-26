import { connect } from "react-redux";
import { authenticateThunkCreator } from "../../redux/auth_reducer";
import { getLoginError } from "../../redux/auth_selectors";
import Login from "./Login";
import { isAuth } from "../../redux/auth_selectors";

const LoginContainer = (props) => {
  return <Login {...props} />;
};

let mapStateToProps = (state) => ({
  loginError: getLoginError(state),
  isAuth: isAuth(state),
});

export default connect(mapStateToProps, {
  login: authenticateThunkCreator,
})(LoginContainer);
