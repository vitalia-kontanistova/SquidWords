import { accountAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_REG_ERROR = "SET_REG_ERROR";
const SET_REG_SUCCESS = "SET_REG_SUCCESS";
const LOGOUT = "LOGOUT";

const initialState = {
  role: "",
  firstName: "",
  isVerified: "",

  isAuth: false,
  loginError: "",
  regError: "",
  isRegSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.userData, isAuth: true, loginError: "" };
    case LOGOUT:
      return { ...state, ...action.userData };
    case SET_LOGIN_ERROR:
      return { ...state, loginError: action.message };
    case SET_REG_ERROR:
      return { ...state, regError: action.message };
    case SET_REG_SUCCESS:
      return { ...state, isRegSuccess: action.status };
    default:
      return state;
  }
};

export const setLoginError = (message) => ({ type: SET_LOGIN_ERROR, message });
export const setRegError = (message) => ({ type: SET_REG_ERROR, message });
export const setRegSuccess = (status) => ({ type: SET_REG_SUCCESS, status });
export const setUserData = ({ email, firstName, id, isVerified, role }) => ({
  type: SET_USER_DATA,
  userData: { email, firstName, id, isVerified, role },
});
export const logOut = () => ({
  type: LOGOUT,
  userData: {
    role: "",
    firstName: "",
    isVerified: false,
    isAuth: false,
    loginError: "",
    regError: "",
    isRegSuccess: false,
  },
});

export const logInThunkCreator = ({ email, pass }) => (dispatch) => {
  accountAPI
    .authenticate({ email, password: pass })
    .then((response) => {
      if (response.status === 200) {
        dispatch(setUserData(response.data));
        localStorage.setItem("user", JSON.stringify(response.data)); // пока так, поправить позже
      }
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 400) {
          dispatch(setLoginError("Вы ввели неверную почту и/или пароль."));
        }
        console.error(error.response.data.message);
      } else if (error.request) {
        console.error(error.request);
        debugger;
      } else {
        console.error("Error", error.message);
        debugger;
      }
    });
};

export const logOutThunkCreator = () => (dispatch) => {
  localStorage.removeItem("user"); // пока так, поправить позже
  dispatch(logOut());
};

export const registerThunkCreator = ({ email, name, pass }) => (dispatch) => {
  accountAPI
    .register({ name, email, password: pass })
    .then((response) => {
      if (response.status === 200) {
        dispatch(setRegSuccess(true));
      }
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 400) {
          dispatch(setRegError("Пользователь с такой почтой уже существует."));
        }
        console.error(error.response.data.message);
      } else if (error.request) {
        console.error(error.request);
        debugger;
      } else {
        console.error("Error", error.message);
        debugger;
      }
    });
};

export default authReducer;
