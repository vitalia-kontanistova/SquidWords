import { connect } from "react-redux";
import { toggleUserMenu } from "../../../redux/header_reducer";
import UserMenu from "./UserMenu";

let mapStateToProps = (state) => ({
  isUserOpen: state.header.isUserMenuOpen,
  userName: state.auth.firstName,
});

export default connect(mapStateToProps, { toggleUserMenu })(UserMenu);
