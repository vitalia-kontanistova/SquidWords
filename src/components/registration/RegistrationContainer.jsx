import { connect } from "react-redux";
import Registration from "./Registration";
import { registerThunkCreator } from "../../redux/auth_reducer";
import { isRegSuccess, getRegError } from "../../redux/auth_selectors";

let mapStateToProps = (state) => ({
  regError: getRegError(state),
  isRegSuccess: isRegSuccess(state),
});

export default connect(mapStateToProps, {
  register: registerThunkCreator,
})(Registration);
