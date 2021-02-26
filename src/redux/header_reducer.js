const TOGGLE_BURGER_MENU = "TOGGLE_BURGER_MENU";
const TOGGLE_USER_MENU = "TOGGLE_USER_MENU";

const initialState = {
  isBurgerMenuOpen: false,
  isUserMenuOpen: false,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BURGER_MENU:
      return { ...state, isBurgerMenuOpen: !state.isBurgerMenuOpen };
    case TOGGLE_USER_MENU:
      return { ...state, isUserMenuOpen: action.status };
    default:
      return state;
  }
};

export const toggleBurgerMenu = () => ({ type: TOGGLE_BURGER_MENU });
export const toggleUserMenu = (status) => ({ type: TOGGLE_USER_MENU, status });

export default headerReducer;
