import { connect } from "react-redux";
import { isAuth } from "../../redux/auth_selectors";
import Header from "./Header";

const mapState = (state) => ({
  isAuth: isAuth(state),
});

export default connect(mapState, {})(Header);
