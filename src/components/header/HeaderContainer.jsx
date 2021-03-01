import { connect } from "react-redux";
import { logOutThunkCreator } from "../../redux/auth_reducer";
import Header from "./Header";

const mapState = (state) => ({
});

export default connect(mapState, { logout: logOutThunkCreator })(Header);
