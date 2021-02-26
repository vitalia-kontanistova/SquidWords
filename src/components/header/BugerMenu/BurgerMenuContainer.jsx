import { connect } from "react-redux";
import { toggleBurgerMenu } from "../../../redux/header_reducer";
import BurgerMenu from "./BurgerMenu";

let mapStateToProps = (state) => ({
  isOpen: state.header.isBurgerMenuOpen,
});

export default connect(mapStateToProps, { toggleBurgerMenu })(BurgerMenu);
