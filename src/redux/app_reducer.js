import { setUserData } from "./auth_reducer";

const INITIALIZE = "INITIALIZE";

let initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, isInitialized: true };
    default:
      return state;
  }
};

export const initialize = () => ({ type: INITIALIZE });

export const initializeAppThunkCreator = () => (dispatch) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData) {
    dispatch(setUserData(userData));
  }
  dispatch(initialize());
};

export default appReducer;
